import { motion } from "motion/react";
import { Check, Star, Zap, Palette, Camera } from "lucide-react";

export function Pricing() {
  const handleOrder = (packageName: string) => {
    const message = `مرحباً Vizora!%0Aأريد الاشتراك في: ${packageName}%0Aأرجو تزويدي بالتفاصيل وكيفية إرسال الصور.`;
    const whatsappUrl = `https://wa.me/201032832715?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const getFeatureIcon = (index: number) => {
    if (index === 0) return <Camera size={14} className="text-vizora-green" />;
    if (index === 1) return <Palette size={14} className="text-vizora-green" />;
    if (index === 2) return <Zap size={14} className="text-vizora-green" />;
    return <Check size={14} className="text-vizora-green" />;
  };

  const packages = [
    {
      id: "simple",
      title: "الباقة البسيطة",
      price: "120",
      currency: "جنيه",
      features: ["3 بوسترات", "جودة عالية", "تسليم خلال 24 ساعة"],
      isPopular: false,
    },
    {
      id: "medium",
      title: "الباقة المتوسطة",
      price: "200",
      currency: "جنيه",
      features: ["3 بوسترات", "تصميم احترافي", "تأثيرات مميزة", "ألوان سينمائية"],
      isPopular: true,
    },
    {
      id: "pro",
      title: "الباقة الاحترافية",
      price: "220",
      currency: "جنيه",
      features: ["3 بوسترات", "أعلى جودة", "تفاصيل دقيقة", "لمسة فنية خاصة"],
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="py-[120px] relative bg-vizora-black border-t border-[#111]">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[60px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#333] px-5 py-2 rounded-full mb-6">
            <span className="text-vizora-green animate-pulse">🔥</span>
            <span className="text-[14px] font-bold text-white tracking-widest uppercase">خصم 50% لفترة محدودة</span>
          </div>
          <h2 className="text-[40px] md:text-[56px] font-black leading-tight tracking-tight mb-4">
            عروض حصرية <span className="text-vizora-green">لفترة محدودة</span>
          </h2>
          <p className="text-[18px] text-[#AAAAAA] max-w-2xl mx-auto leading-[1.6]">
            اختار باقتك وابدأ رحلتك نحو بوستر احترافي يعكس شغفك بكرة القدم.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto relative z-10">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-vizora-green/10 rounded-full blur-[150px] pointer-events-none" />

          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: pkg.isPopular ? 1.05 : 1.02 }}
              className={`relative bg-[#0A0A0A] rounded-xl transition-all duration-300 ${
                pkg.isPopular 
                  ? 'border-2 border-vizora-green shadow-[0_0_40px_rgba(204,255,0,0.15)] z-20 py-12 px-8 lg:transform lg:scale-110' 
                  : 'border border-[#222] hover:border-[#444] py-10 px-8 z-10'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vizora-green text-vizora-black px-4 py-1.5 rounded-full text-[12px] font-black flex items-center gap-1.5 whitespace-nowrap shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                  <Star size={14} className="fill-vizora-black" />
                  الأكثر طلبًا
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-[24px] font-black text-white mb-4">{pkg.title}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[54px] font-black text-white leading-none tracking-tighter">
                    {pkg.price}
                  </span>
                  <span className={`text-[18px] font-bold ${pkg.isPopular ? 'text-vizora-green' : 'text-[#888]'}`}>
                    {pkg.currency}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-3 text-white text-[16px]">
                    <div className="w-6 h-6 rounded-full bg-vizora-green/10 flex items-center justify-center shrink-0">
                      {getFeatureIcon(featureIdx)}
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleOrder(pkg.title)}
                className={`w-full py-4 rounded-md font-black text-[16px] transition-all flex items-center justify-center gap-2 ${
                  pkg.isPopular
                    ? 'bg-vizora-green text-vizora-black hover:bg-white shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                    : 'bg-[#1A1A1A] text-white hover:bg-vizora-green hover:text-vizora-black border border-[#333] hover:border-transparent'
                }`}
              >
                <span>اطلب الآن</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
