import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  const whatsappUrl = "https://wa.me/201000000000"; // Replace with real number
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[30px] left-[30px] w-[60px] h-[60px] z-[99] bg-[#25D366] text-white rounded-[50%] shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center justify-center group hover:scale-110 transition-all"
      aria-label="تواصل معنا على واتساب"
    >
      <MessageCircle size={30} className="group-hover:-rotate-12 transition-transform fill-white" />
    </a>
  );
}
