import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Play, Pause } from "lucide-react";

// Placeholder video from W3C or generic public domain
const MOCK_VIDEOS = [
{ id: 1, title: "تحويل معاذ جابر", videoUrl: "/imgs/1.mp4", thumbnail: "/imgs/1.jpg" },

{ id: 2, title: "تحويل خالد رونالدو", videoUrl: "/imgs/2.mp4", thumbnail: "/imgs/2.jpg" },

{ id: 3, title: "تحويل صاصا", videoUrl: "/imgs/3.mp4", thumbnail: "/imgs/3.jpg" },

{ id: 4, title: "تصميم مصطفي", videoUrl: "/imgs/4.mp4", thumbnail: "/imgs/4.jpg" },
];

export function TransformationVideos() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const dragged = useRef(false);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // Autoplay first video when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && playingIndex === null) {
          // Play the first video once the section is 50% visible
          setPlayingIndex(0);
          observer.disconnect(); // Only trigger on first scroll-in
        }
      },
      { threshold: 0.5 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  }, [playingIndex]);

  // Handle play/pause sync when playingIndex changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === playingIndex) {
        video.currentTime = 0;
        // Need to add pointer-events logic correctly on playback
        video.play().catch(err => console.log("Autoplay blocked:", err));
      } else {
        video.pause();
      }
    });

    // Make sure pointer events on the container allow scrolling on mobile
  }, [playingIndex]);

  const handleVideoEnded = (index: number) => {
    const nextIndex = index + 1;
    if (nextIndex < MOCK_VIDEOS.length) {
      setPlayingIndex(nextIndex);
      // Optional: Auto-scroll to the next video
      if (scrollRef.current && videoRefs.current[nextIndex] && videoRefs.current[nextIndex]?.parentElement) {
        // @ts-ignore
        videoRefs.current[nextIndex].parentElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    } else {
      setPlayingIndex(null); // End of sequence
    }
  };

  const toggleVideo = (index: number) => {
    if (dragged.current) return;
    if (playingIndex === index) {
      setPlayingIndex(null); // Pause current
    } else {
      setPlayingIndex(index); // Play this one and pause others
    }
  };

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

  return (
    <section ref={sectionRef} id="transformation-videos" className="py-[120px] bg-vizora-dark border-t border-[#333] relative overflow-hidden group/section">
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
            {MOCK_VIDEOS.map((item, index) => {
              const isPlaying = playingIndex === index;
              return (
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
                    className={`group block relative aspect-[1059/1488] w-full mx-auto overflow-hidden bg-vizora-black border-2 transition-all shadow-lg rounded-[4px] cursor-pointer ${isPlaying ? 'border-vizora-green shadow-[0_0_30px_rgba(204,255,0,0.15)]' : 'border-[#222] hover:border-[#444]'}`}
                    draggable="false"
                    onClick={() => toggleVideo(index)}
                  >
                    {/* Poster Thumbnail */}
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100 group-hover:opacity-80'}`}
                      draggable="false"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Video Elements */}
                    <video 
                      ref={el => {
                        if (el) {
                           videoRefs.current[index] = el;
                        }
                      }}
                      src={item.videoUrl}
                      onEnded={() => handleVideoEnded(index)}
                      muted
                      webkit-playsinline="true"
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                    />

                    {/* Play/Pause icon overlay */}
                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isPlaying ? 'opacity-0' : 'opacity-100 group-hover:opacity-100'}`}>
                      <div className="w-16 h-16 rounded-full bg-vizora-green/90 text-vizora-black flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-transform group-hover:scale-110">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Pause icon when playing (briefly visible on hover / tap to indicate pause action) */}
                    <div className={`absolute top-4 right-4 bg-black/60 rounded-full p-3 transition-opacity duration-300 pointer-events-none ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                       <Pause size={20} className="text-white fill-white" />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity pointer-events-none" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform pointer-events-none">
                      <h3 className={`font-black text-[20px] leading-tight mb-2 transition-colors line-clamp-1 ${isPlaying ? 'text-vizora-green' : 'text-white'}`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-32 bg-gradient-to-r from-vizora-dark to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-32 bg-gradient-to-l from-vizora-dark to-transparent pointer-events-none z-10" />
      </div>

    </section>
  );
}
