export function Footer() {
  return (
    <footer className="bg-vizora-black border-t border-[#333] py-[60px] relative">
      <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-[60px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <span className="font-black text-[32px] tracking-[-1px] uppercase text-vizora-white leading-none">
            VIZORA<span className="text-vizora-green">.</span>
          </span>
        </div>
        
        <p className="text-[#AAAAAA] text-[14px]">
          &copy; {new Date().getFullYear()} VIZORA. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
