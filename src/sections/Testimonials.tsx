import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    { id: 1, name: "خالد رونالدو", role: "مهاجم", text: "التصميم فاق التوقعات! الإضاءة والتفاصيل خرافية، شكراً فيزورا." },
    { id: 2, name: "صاصا", role: "مهاجم", text: "سرعة في الإنجاز واحترافية عالية، البوستر كأنه طالع من لعبة فيفا." },
    { id: 3, name: "احمد", role: "مهاجم", text: "صممنا بوستر للفريق كامل والكل انبهر فيه، تعامل راقي جداً." },
    { id: 4, name: "زياد", role: "مهاجم", text: "أفضل مكان تصمم فيه بوسترات رياضية، دمج الصور احترافي جداً." },
  ];

  return (
    <section id="testimonials" className="py-[120px] bg-vizora-black overflow-hidden relative border-t border-[#333]">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[60px] mb-12 text-center flex flex-col items-center">
        <h2 className="text-[48px] font-black mb-4 leading-none tracking-tight uppercase">
          قالوا عنا <span className="text-vizora-green">.</span>
        </h2>
        <p className="text-[18px] text-[#AAAAAA] max-w-[450px] leading-[1.6]">
          نفخر بثقة عملائنا، ونسعى دائماً لتقديم أفضل تصاميم رياضية تليق بنجوميتهم.
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-[30px] px-6 lg:px-[60px] animate-marquee whitespace-nowrap" style={{ animationDuration: '40s' }}>
          {/* Double the array to create an infinite loop effect */}
          {[...reviews, ...reviews].map((review, i) => (
            <div 
              key={i} 
              className="inline-flex flex-col bg-vizora-dark border border-[#333] p-8 rounded-[4px] w-[320px] md:w-[400px] flex-shrink-0"
              style={{ whiteSpace: 'normal' }}
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={18} className="fill-vizora-green text-vizora-green" />
                ))}
              </div>
              <p className="text-vizora-white text-[18px] font-medium leading-[1.6] mb-8 flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#333]">
                <div className="w-12 h-12 rounded bg-vizora-gray overflow-hidden opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all">
                  <img src={`https://picsum.photos/seed/user${review.id}/100/100`} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#FFF] text-[16px] leading-tight">{review.name}</h4>
                  <p className="text-[12px] font-bold text-vizora-green uppercase text-[#AAA] mt-1">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradients for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-vizora-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-vizora-black to-transparent z-10 pointer-events-none" />
      </div>

    </section>
  );
}
