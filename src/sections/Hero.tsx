import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

const HEADLINES = [
  "حوّل صورتك لبوستر احترافي 🔥",
  "كن مختلف بتصميم يخصك ⚡",
  "خلي صورتك تحكي قصتك 🎨",
  "انت البطل في الملعب 🏆"
];

// Simple animated counter component
const Counter = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-[120px] overflow-hidden flex flex-col justify-between min-h-[100vh]">
      {/* Background with gradient and grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vizora-green/10 via-vizora-black to-vizora-black opacity-60 pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[60px] relative z-10 flex-1 flex flex-col justify-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="flex flex-col text-right">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded border border-vizora-green/30 bg-vizora-green/5 text-vizora-green text-xs font-bold mb-6 uppercase tracking-widest px-3 py-1 self-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vizora-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-vizora-green"></span>
              </span>
              تصاميم احترافية جاهزة
            </motion.div>

            <div className="h-[150px] md:h-[180px] relative mb-6">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 text-[48px] md:text-[64px] font-black leading-[1.1] tracking-tight text-white"
                  style={{ textShadow: "0 0 20px rgba(204, 255, 0, 0.15)" }}
                >
                  {HEADLINES[headlineIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[18px] text-[#AAAAAA] mb-8 leading-[1.6] max-w-[450px] font-medium"
            >
              بوسترات كرة قدم بتصميم احترافي تُرسل لك مباشرة على واتساب. انضم لأكثر من 500 لاعب محترف حصلوا على تصاميمهم الخاصة.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a 
                href="#order"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-vizora-green text-vizora-black px-9 py-[18px] rounded font-extrabold text-[16px] shadow-[0_10px_30px_rgba(204,255,0,0.3)] hover:scale-105 transition-transform cursor-pointer text-center flex items-center justify-center gap-2"
              >
                اطلب بوسترك الآن
                <ArrowLeft size={18} />
              </a>
              
              <a 
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-white/20 text-white px-9 py-[18px] rounded font-extrabold text-[16px] hover:bg-white/5 transition-colors cursor-pointer text-center"
              >
                شاهد المعرض
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex relative h-[500px] justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-[350px] h-[480px] bg-vizora-gray border border-vizora-green relative shadow-[0_0_50px_rgba(204,255,0,0.1)] flex justify-center items-center overflow-hidden rotate-[-3deg]"
              >
                <div 
                  className="absolute inset-0 z-0 opacity-90"
              style={{
                backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.9), transparent), url('/imgs/Logo.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
                />
                
                <div className="absolute top-5 -right-5 bg-vizora-green text-vizora-black px-5 py-2 font-black rotate-[3deg] z-20">
                  PREMIUM PRO
                </div>
                
                <div className="absolute bottom-5 right-5 text-right z-20">
                  <div className="text-[24px] font-black leading-none mb-1">فيزورا</div>
                  <div className="text-[12px] font-bold text-vizora-green tracking-widest">VIZORA</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full bg-vizora-gray border-t border-[#333] relative z-10"
      >
        <div className="max-w-[1200px] mx-auto py-[30px] px-6 lg:px-[60px] flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-wrap gap-8 md:gap-16">
            <div className="flex flex-col">
              <span className="text-[32px] font-black text-vizora-green leading-none">+<Counter end={500} /></span>
              <span className="text-[12px] uppercase opacity-50 font-bold mt-1">بوستر تم تصميمه</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[32px] font-black text-vizora-green leading-none">+<Counter end={300} /></span>
              <span className="text-[12px] uppercase opacity-50 font-bold mt-1">عميل سعيد</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[32px] font-black text-vizora-green leading-none"><Counter end={5} suffix="/5" /> ⭐</span>
              <span className="text-[12px] uppercase opacity-50 font-bold mt-1">تقييم العملاء</span>
            </div>
          </div>

          <div className="flex gap-[15px]">
            <div className="w-[60px] h-[80px] bg-[#333] rounded opacity-60 overflow-hidden">
              <img src="/imgs/khaled/4.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="w-[60px] h-[80px] bg-[#333] rounded border border-vizora-green opacity-100 overflow-hidden relative shadow-[0_0_15px_rgba(204,255,0,0.2)]">
              <img src="/imgs/moaz/4.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="w-[60px] h-[80px] bg-[#333] rounded opacity-60 overflow-hidden">
              <img src="/imgs/mohamed/4.jpg" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col justify-center mr-2">
              <span className="text-[12px] opacity-50 font-medium">تصفح الفئات</span>
              <span className="text-[14px] color-vizora-green font-bold text-vizora-green mt-1">مهاجم / حارس / فرق</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
