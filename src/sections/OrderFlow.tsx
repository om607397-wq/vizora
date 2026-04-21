import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "motion/react";

export function OrderFlow() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "normal",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً Vizora!%0Aأريد طلب تصميم بوستر جديد:%0A%0Aالاسم: ${formData.name}%0Aرقم الواتساب: ${formData.phone}%0Aنوع البوستر: ${formData.type === 'normal' ? 'عادي' : 'برو (احترافي)'}%0Aملاحظات: ${formData.notes}%0A%0A*الرجاء إرفاق الصورة المطلوبة بعد إرسال هذه الرسالة.*`;
    const whatsappUrl = `https://wa.me/201032832715?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="order" className="py-[120px] relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[60px]">
        
        <div className="bg-vizora-dark border border-[#333] rounded-[4px] p-8 md:p-[60px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-vizora-green/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-vizora-green/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 text-center mb-[40px]">
            <h2 className="text-[48px] font-black mb-4 leading-none tracking-tight">
              اطلب بوسترك الآن <span className="text-vizora-green">.</span>
            </h2>
            <p className="text-[18px] text-[#AAAAAA] max-w-lg mx-auto leading-[1.6]">
              قم بتعبئة البيانات أدناه وسيتم تحويلك مباشرة للواتساب لإكمال الطلب وإرسال الصورة.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-[#AAA] uppercase tracking-wider">الاسم الكريم</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-vizora-black border border-[#333] rounded-[4px] px-5 py-[18px] focus:outline-none focus:border-vizora-green transition-colors text-white text-[16px] placeholder:text-[#555]"
                  placeholder="مثال: محمد أحمد"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-[#AAA] uppercase tracking-wider">رقم الواتساب</label>
                <input 
                  required
                  type="tel" 
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-vizora-black border border-[#333] rounded-[4px] px-5 py-[18px] focus:outline-none focus:border-vizora-green transition-colors text-right text-white text-[16px] placeholder:text-[#555]"
                  placeholder="+20 100 000 0000"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[14px] font-bold text-[#AAA] uppercase tracking-wider block">نوع البوستر</label>
              <div className="grid grid-cols-2 gap-[15px]">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, type: 'normal'})}
                  className={`p-5 rounded-[4px] border text-right transition-all flex flex-col justify-center h-full ${
                    formData.type === 'normal' 
                      ? 'border-vizora-green bg-vizora-green/5' 
                      : 'border-[#333] bg-vizora-black hover:border-[#666]'
                  }`}
                >
                  <div className={`text-[18px] font-black mb-1 leading-none ${formData.type === 'normal' ? 'text-vizora-green' : 'text-white'}`}>عادي</div>
                  <div className="text-[14px] text-[#AAA]">تصميم جميل وسريع</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, type: 'pro'})}
                  className={`p-5 rounded-[4px] border text-right transition-all relative overflow-hidden flex flex-col justify-center h-full ${
                    formData.type === 'pro' 
                      ? 'border-vizora-green bg-vizora-green/5 shadow-[0_0_20px_rgba(204,255,0,0.1)]' 
                      : 'border-[#333] bg-vizora-black hover:border-[#666]'
                  }`}
                >
                  {formData.type === 'pro' && (
                    <div className="absolute top-4 left-4 flex h-[6px] w-[6px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vizora-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-vizora-green"></span>
                    </div>
                  )}
                  <div className="text-[18px] font-black mb-1 leading-none text-vizora-green uppercase">PREMIUM PRO</div>
                  <div className="text-[14px] text-[#AAA]">دمج، إضاءة متقدمة، وتأثيرات</div>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[14px] font-bold text-[#AAA] uppercase tracking-wider">ملاحظات إضافية (اختياري)</label>
              <textarea 
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full bg-vizora-black border border-[#333] rounded-[4px] px-5 py-[18px] focus:outline-none focus:border-vizora-green transition-colors resize-none text-white text-[16px] placeholder:text-[#555]"
                placeholder="ألوان مفضلة، كتابة معينة على البوستر..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-vizora-green text-vizora-black font-extrabold text-[16px] py-[18px] rounded-[4px] flex items-center justify-center gap-2 hover:bg-white transition-colors cursor-pointer shadow-[0_10px_30px_rgba(204,255,0,0.3)] mt-[20px]"
            >
              <span>إرسال الطلب عبر واتساب</span>
              <Send size={20} className="rotate-180" />
            </motion.button>
            <p className="text-center text-[12px] text-[#AAA] mt-4 font-medium opacity-70">
              سيتم نقلك لتطبيق واتساب، يرجى إعداد الصورة المطلوبة لإرسالها.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
