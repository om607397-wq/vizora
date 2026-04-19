import { motion } from "motion/react";
import { Phone, MessageCircle, CreditCard } from "lucide-react";

export function ContactAndPayment() {
  return (
    <section id="contact" className="py-24 bg-vizora-dark border-t border-[#333]">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[60px]">
        
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-black uppercase mb-4 leading-tight">
            تواصل معنا ومحفظة الدفع <span className="text-vizora-green">.</span>
          </h2>
          <p className="text-[18px] text-[#AAAAAA] max-w-[500px] mx-auto">
            متواجدين دايماً للرد على استفساراتكم وتأكيد طلباتكم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          
          {/* Payment Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-vizora-green/30 rounded-lg p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-[0_10px_40px_rgba(204,255,0,0.05)] hover:shadow-[0_10px_40px_rgba(204,255,0,0.15)] transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[50px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-vizora-green/10 blur-[50px] pointer-events-none" />
            
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
              <CreditCard size={32} />
            </div>
            
            <h3 className="text-[24px] font-black mb-2 text-white">
              الدفع عبر فودافون كاش
            </h3>
            <p className="text-[#AAAAAA] mb-6">
              يُرجى إرسال المبلغ وتصوير الإيصال لتأكيد الطلب
            </p>
            
            <div className="bg-vizora-black border-2 border-vizora-green text-vizora-green text-[28px] md:text-[32px] font-black tracking-wider px-8 py-4 rounded-[4px] shadow-[0_0_20px_rgba(204,255,0,0.2)]">
              01000000000
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#333] hover:border-[#555] rounded-lg p-8 flex flex-col justify-center space-y-6 transition-colors"
          >
            <h3 className="text-[24px] font-black text-white border-b border-[#333] pb-4">
              معلومات الاتصال
            </h3>

            <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <MessageCircle size={28} />
              </div>
              <div>
                <div className="text-[14px] text-[#AAAAAA] mb-1">واتساب (مباشر)</div>
                <div className="text-[20px] font-bold text-white group-hover:text-[#25D366] transition-colors" dir="ltr">+20 100 000 0000</div>
              </div>
            </a>

            <a href="tel:+201000000000" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <div>
                <div className="text-[14px] text-[#AAAAAA] mb-1">اتصال هاتفي</div>
                <div className="text-[20px] font-bold text-white group-hover:text-blue-500 transition-colors" dir="ltr">+20 100 000 0000</div>
              </div>
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
