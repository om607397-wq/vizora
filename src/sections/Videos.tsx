import { useState, useRef, useEffect } from "react";
import { GripVertical } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const IMAGE_PAIRS = [
  { id: 1, before: "https://picsum.photos/seed/b1/1059/1488?grayscale", after: "https://picsum.photos/seed/a1/1059/1488" },
  { id: 2, before: "https://picsum.photos/seed/b2/1059/1488?grayscale", after: "https://picsum.photos/seed/a2/1059/1488" },
  { id: 3, before: "https://picsum.photos/seed/b3/1059/1488?grayscale", after: "https://picsum.photos/seed/a3/1059/1488" },
  { id: 4, before: "https://picsum.photos/seed/b4/1059/1488?grayscale", after: "https://picsum.photos/seed/a4/1059/1488" },
];

export function Videos() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchend", stopDragging);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  // Auto-switch images
  useEffect(() => {
    const timer = setInterval(() => {
      // Pause autoscroll if user is currently interacting with the slider
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % IMAGE_PAIRS.length);
      }
    }, 120000); // 120 seconds (2 minutes)

    return () => clearInterval(timer);
  }, [isDragging]);

  const currentPair = IMAGE_PAIRS[currentIndex];

  return (
    <section id="videos" className="py-[120px] bg-vizora-dark border-t border-[#333] relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[60px]">
        
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-black mb-4 leading-none tracking-tight uppercase border-vizora-green">
            الفرق قبل وبعد <span className="text-vizora-green">.</span>
          </h2>
          <p className="text-[18px] text-[#AAAAAA] max-w-[450px] mx-auto leading-[1.6]">
            شاهد كيف نحول الصور العادية إلى بوسترات احترافية بلمسات كواليس استوديو فيزورا.
          </p>
        </div>

        <div className="max-w-[450px] md:max-w-[500px] mx-auto">
          {/* Before/After Slider */}
          <div 
            className="relative w-full aspect-[1059/1488] bg-[#111] rounded-[4px] overflow-hidden cursor-ew-resize select-none border border-[#333] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            ref={containerRef}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPair.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Before Image (Background) */}
                <img 
                  src={currentPair.before} 
                  alt="Before" 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Before Label */}
                <div className="absolute top-6 right-6 bg-vizora-black/80 text-white backdrop-blur-md px-5 py-2.5 rounded font-black text-[12px] uppercase tracking-wider border border-white/10 z-10 pointer-events-none">
                  الصورة الأصلية
                </div>

                {/* After Image (Clipped) */}
                <div 
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
                >
                  <img 
                    src={currentPair.after} 
                    alt="After" 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* After Label */}
                  <div className="absolute top-6 left-6 bg-vizora-green text-vizora-black px-5 py-2.5 rounded font-black text-[12px] uppercase tracking-wider z-10 shadow-[0_5px_15px_rgba(204,255,0,0.2)]">
                    البوستر النهائي
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-vizora-green z-30 flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.5)]"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-12 h-12 bg-vizora-green rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(204,255,0,0.3)] text-vizora-black border-[3px] border-vizora-black">
                <GripVertical size={20} />
              </div>
            </div>
            
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {IMAGE_PAIRS.map((pair, idx) => (
              <button
                key={pair.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-vizora-green w-8 shadow-[0_0_10px_rgba(204,255,0,0.5)]" 
                    : "bg-[#444] hover:bg-[#666]"
                }`}
                aria-label={`Show image pair ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
