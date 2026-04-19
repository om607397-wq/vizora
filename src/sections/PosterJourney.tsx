import { motion } from "motion/react";
import { Camera, Palette, MessageCircle } from "lucide-react";

export function PosterJourney() {
  const steps = [
    {
      id: 1,
      title: "ابعت صورتك",
      icon: <Camera size={32} className="text-vizora-green" />,
      desc: "صورة واضحة بجودة كويسة"
    },
    {
      id: 2,
      title: "نصمم البوستر",
      icon: <Palette size={32} className="text-vizora-green" />,
      desc: "بلمسات سحرية واحترافية"
    },
    {
      id: 3,
      title: "نبعتلك واتساب",
      icon: <MessageCircle size={32} className="text-vizora-green" />,
      desc: "تستلم البوستر جاهز للطباعة والنشر"
    }
  ];

  return (
    <section className="py-20 bg-vizora-black border-t border-[#333]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-black uppercase mb-4 leading-tight">
            خطوات بسيطة لبوسترك <span className="text-vizora-green">.</span>
          </h2>
          <p className="text-[18px] text-[#AAAAAA]">
            3 خطوات وتستلم تصميمك بأعلى جودة ممكنة
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-4 relative">
          
          <div className="hidden md:block absolute top-[50%] left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-vizora-green/30 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 w-full max-w-[300px] flex flex-col items-center text-center p-6 bg-vizora-dark border border-[#333] rounded-[8px] hover:border-vizora-green/50 transition-colors shadow-lg"
            >
              <div className="w-[80px] h-[80px] rounded-full bg-vizora-black border-2 border-vizora-green flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(204,255,0,0.15)]">
                {step.icon}
              </div>
              <h3 className="text-[24px] font-black mb-2 text-white">
                <span className="text-vizora-green opacity-50 mr-2">{step.id}</span>
                {step.title}
              </h3>
              <p className="text-[#AAAAAA] text-[15px]">{step.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
