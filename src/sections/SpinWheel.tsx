import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, Send } from "lucide-react";

const SEGMENTS = [
  { id: 0, label: "بوستر مجاني", icon: "🎁", color: "#CCFF00", textColor: "#050505", type: "win" },
  { id: 1, label: "حظ أوفر", icon: "❌", color: "#1A1A1A", textColor: "#FFFFFF", type: "lose" },
  { id: 2, label: "خصم 70%", icon: "🔥", color: "#ff4444", textColor: "#FFFFFF", type: "win" },
  { id: 3, label: "حظ أوفر", icon: "❌", color: "#1A1A1A", textColor: "#FFFFFF", type: "lose" },
  { id: 4, label: "خصم خاص", icon: "⚡", color: "#3B82F6", textColor: "#FFFFFF", type: "win" },
  { id: 5, label: "حظ أوفر", icon: "❌", color: "#111111", textColor: "#FFFFFF", type: "lose" },
];

const SPIN_DURATION_SECS = 4;

export function SpinWheel() {
  const [hasSpunToday, setHasSpunToday] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<typeof SEGMENTS[0] | null>(null);

  useEffect(() => {
    // Check if spun today
    const lastSpinDateStr = localStorage.getItem("vizora_last_spin_date");
    const todayStr = new Date().toDateString();
    
    if (lastSpinDateStr === todayStr) {
      setHasSpunToday(true);
      const savedResult = localStorage.getItem("vizora_last_spin_result");
      if (savedResult) {
        try {
          setResult(JSON.parse(savedResult));
        } catch (e) {
          // ignore
        }
      }
    }
  }, []);

  const handleSpin = () => {
    if (hasSpunToday || isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    // Bias logic to make big wins rare
    const rand = Math.random();
    let winningIndex = 1; // Default "حظ أوفر"

    if (rand < 0.05) {
      winningIndex = 0; // 5% chance for Free Poster
    } else if (rand < 0.15) {
      winningIndex = 2; // 10% chance for 70% discount
    } else if (rand < 0.35) {
      winningIndex = 4; // 20% chance for Special Discount
    } else {
      // randomly pick one of the "lose" segments (1, 3, or 5)
      const loseIndices = [1, 3, 5];
      winningIndex = loseIndices[Math.floor(Math.random() * loseIndices.length)];
    }

    // Calculate rotation
    const segmentAngle = 360 / SEGMENTS.length;
    const targetRotationOffset = 360 - (winningIndex * segmentAngle);
    const extraSpins = 5 * 360;
    const randomOffset = (Math.random() * 40) - 20;

    const finalRotation = rotation + extraSpins + targetRotationOffset + randomOffset;
    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setHasSpunToday(true);
      const wonSegment = SEGMENTS[winningIndex];
      setResult(wonSegment);
      
      const todayStr = new Date().toDateString();
      localStorage.setItem("vizora_last_spin_date", todayStr);
      localStorage.setItem("vizora_last_spin_result", JSON.stringify(wonSegment));
    }, SPIN_DURATION_SECS * 1000);
  };

  const constructConicGradient = () => {
    let gradient = "conic-gradient(";
    const step = 360 / SEGMENTS.length;
    SEGMENTS.forEach((seg, i) => {
      const start = i * step;
      const end = start + step;
      gradient += `${seg.color} ${start}deg ${end}deg${i === SEGMENTS.length - 1 ? "" : ", "}`;
    });
    gradient += ")";
    return gradient;
  };

  const getWhatsAppMessage = (rewardLabel: string) => {
    return encodeURIComponent(`السلام عليكم، كسبت عرض ${rewardLabel} من موقع Vizora`);
  };

  return (
    <section id="spin-wheel" className="py-[100px] bg-vizora-black border-t border-[#333] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vizora-green/10 via-transparent to-transparent pointer-events-none opacity-50" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px] relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Area */}
        <div className="flex-1 text-center md:text-right w-full">
          <div className="inline-flex items-center gap-2 rounded border border-vizora-green/30 bg-vizora-green/5 text-vizora-green text-xs font-bold mb-4 uppercase tracking-widest px-3 py-1">
            <Sparkles size={14} />
            جرب حظك
          </div>
          <h2 className="text-[40px] md:text-[56px] font-black uppercase mb-4 leading-none tracking-tight text-white drop-shadow-md">
            عجلة الحظ <br />
            <span className="text-vizora-green drop-shadow-[0_0_15px_rgba(204,255,0,0.4)]">المجانية 🔥</span>
          </h2>
          <p className="text-[18px] text-[#AAAAAA] mb-8 leading-[1.6] max-w-[450px] mx-auto md:mx-0">
            لك محاولة واحدة كل يوم.. جرب حظك واكسب بوستر مجاني أو خصومات تصل إلى 70٪ لفترة محدودة.
          </p>

          {!hasSpunToday && !isSpinning && (
            <button 
              onClick={handleSpin}
              className="bg-vizora-green text-vizora-black px-10 py-5 rounded-[8px] font-black text-[24px] tracking-wide shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:shadow-[0_0_50px_rgba(204,255,0,0.6)] hover:scale-105 transition-all w-full max-w-[320px] mx-auto md:mx-0 border-2 border-[#b3e600]"
            >
              لف العجلة
            </button>
          )}

          {isSpinning && (
            <div className="text-vizora-green font-bold text-[24px] animate-pulse">
              جاري اللف...
            </div>
          )}

          {/* Result Popup */}
          {hasSpunToday && result && !isSpinning && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`mt-6 border ${result.type === 'win' ? 'border-vizora-green shadow-[0_0_40px_rgba(204,255,0,0.2)]' : 'border-[#333] shadow-lg'} bg-[#111] p-6 rounded-lg max-w-[400px] w-full mx-auto md:mx-0 relative overflow-hidden`}
            >
              <div className="text-red-400 font-bold mb-4 text-[14px]">❌ لقد استخدمت محاولتك اليوم</div>
              
              <h3 className="text-[16px] text-[#AAAAAA] mb-2">نتيجتك:</h3>
              <div 
                className="text-[32px] md:text-[40px] font-black mb-6 flex items-center justify-center md:justify-start gap-4 drop-shadow-md"
                style={{ color: result.type === 'win' ? '#CCFF00' : '#FFFFFF' }}
              >
                <span>{result.icon}</span>
                <span>{result.label}</span>
              </div>
              
              {result.type === 'win' ? (
                <a 
                  href={`https://wa.me/201000000000?text=${getWhatsAppMessage(result.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-vizora-green text-vizora-black py-4 px-6 rounded-[6px] font-black text-[18px] hover:scale-105 transition-transform w-full shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                >
                  استلم عرضك
                  <Send size={20} />
                </a>
              ) : (
                <div className="bg-[#222] text-[#AAAAAA] py-4 px-6 rounded-[6px] font-bold text-[18px] text-center w-full border border-[#333]">
                  حظ أوفر في المرة القادمة 💪
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Wheel Area */}
        <div className="flex-1 flex justify-center relative w-full h-[350px] md:h-[450px]">
          
          {/* Wheel Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[35px] border-t-white z-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />

          {/* The Glowing Wheel */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <motion.div 
              className="w-full h-full rounded-full border-[8px] border-vizora-green shadow-[0_0_60px_rgba(204,255,0,0.3)] overflow-hidden relative"
              style={{ background: constructConicGradient() }}
              animate={{ rotate: rotation }}
              transition={{ duration: SPIN_DURATION_SECS, type: "tween", ease: "circOut" }}
            >
              {/* Place Labels on Wheel */}
              {SEGMENTS.map((seg, i) => {
                const angle = (i * (360 / SEGMENTS.length)) + (360 / SEGMENTS.length) / 2;
                return (
                  <div 
                    key={seg.id}
                    className="absolute top-0 left-1/2 w-8 h-1/2 origin-bottom flex flex-col items-center pt-6"
                    style={{ 
                      transform: `translate(-50%, 0) rotate(${angle}deg)`, 
                      color: seg.textColor 
                    }}
                  >
                    <span className="text-[24px] md:text-[28px] mb-2 drop-shadow-md">{seg.icon}</span>
                    <span className="text-[14px] md:text-[16px] font-black text-center leading-tight [writing-mode:vertical-rl] rotate-180 drop-shadow-md">
                      {seg.label}
                    </span>
                  </div>
                );
              })}
              
              {/* Center Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] bg-vizora-black rounded-full border-[4px] border-vizora-green shadow-[0_0_20px_rgba(204,255,0,0.5)] flex items-center justify-center font-black text-vizora-green text-[18px]">
                حظك
              </div>
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
