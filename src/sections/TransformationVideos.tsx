import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Play } from "lucide-react";

// Placeholder video from W3C or generic public domain
const MOCK_VIDEOS = [
  { id: 1, title: "تحويل محمد صلاح", videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4", thumbnail: "https://picsum.photos/seed/v1/1059/1488" },
  { id: 2, title: "كواليس تصميم رونالدو", videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4", thumbnail: "https://picsum.photos/seed/v2/1059/1488" },
  { id: 3, title: "تحويل ميسي", videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4", thumbnail: "https://picsum.photos/seed/v3/1059/1488" },
  { id: 4, title: "تصميم هالاند", videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4", thumbnail: "https://picsum.photos/seed/v4/1059/1488" },
];

export function TransformationVideos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragged = useRef(false);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    dragged.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grabbing';
      startX = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDown = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 5) dragged.current = true;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollLeftDir = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightDir = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.play().catch(err => console.log("Video autoplay blocked", err));
    }
  };

  const handleMouseLeaveVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0; // reset
    }
  };

  return (
    <section id="transformation-videos" className="py-[120px] bg-vizora-dark border-t border-[#333] relative overflow-hidden group/section">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[60px] pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-[48px] font-black uppercase mb-4 leading-none tracking-tight">
              كواليس التصميم <span className="text-vizora-green">.</span>
            </h2>
            <p className="text-[18px] text-[#AAAAAA] max-w-[450px] leading-[1.6]">
              شاهد الفيديوهات السريعة لغرفة العمليات وتحويل الصورة العادية لبوستر عالمي.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollRightDir}
              className="w-12 h-12 rounded-[4px] border border-[#333] bg-vizora-black text-white flex items-center justify-center hover:border-vizora-green hover:text-vizora-green transition-all shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-20"
              aria-label="السابق"
            >
              <ChevronRight size={24} />
            </button>
            <button 
              onClick={scrollLeftDir}
              className="w-12 h-12 rounded-[4px] border border-[#333] bg-vizora-black text-white flex items-center justify-center hover:border-vizora-green hover:text-vizora-green transition-all shadow-[0_5px_15px_rgba(0,0,0,0.5)] z-20"
              aria-label="التالي"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-[30px] overflow-x-auto px-6 lg:px-[60px] pb-12 snap-x snap-mandatory cursor-grab select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <AnimatePresence mode="popLayout">
            {MOCK_VIDEOS.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="w-[80vw] sm:w-[calc(50%-15px)] md:w-[calc(33.333%-20px)] lg:w-[calc(25%-22.5px)] shrink-0 snap-center"
              >
                <div 
                  className="group block relative aspect-[1059/1488] w-full mx-auto overflow-hidden bg-vizora-black border-2 border-[#222] hover:border-vizora-green transition-all shadow-lg hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] rounded-[4px]"
                  draggable="false"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeaveVideo}
                >
                  {/* Poster Thumbnail */}
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                    draggable="false"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Video */}
                  <video 
                    src={item.videoUrl}
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Play icon overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-vizora-green/90 text-vizora-black flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform pointer-events-none">
                    <h3 className="font-black text-[20px] text-white leading-tight mb-2 group-hover:text-vizora-green transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-vizora-dark to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-vizora-dark to-transparent pointer-events-none z-10" />
      </div>

    </section>
  );
}
