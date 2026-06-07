export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 flex justify-between items-center px-6 md:px-16 py-4 border-b border-neutral-100">
      <div className="flex items-center">
        <a href="#hero" className="block">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIW8R3HIkXg2lgl6uH67BQ5WfSTl-1RlJxjssi-vuwdboqMobqS5QAmWRa2-BAkpJsIoE38WdVDe8MfwdBBvzwGI_ePzyAl4ypIz1CnG7n_mRB4wUIN49egcxVCFxLrVL244IUdMODW9XKjmDNwZZhHnnEXCyhPZVMSi1HZVU0tX8CVPV40cumtUwElp-0jaxCr_wrwElp9Yf9GKQh5DxG63gkcGfYrxk_bK9NvtiVPCzh1jhVsDCNyWcbgDmhwopAtqFp7fe9J0vQ" 
            alt="KRAFYX" 
            className="h-8 md:h-10 w-auto" 
          />
        </a>
      </div>
      <div className="hidden md:flex gap-10 items-center">
        <a href="#work" className="text-[#050505] font-montserrat font-bold text-[12px] hover:opacity-70 transition-opacity uppercase tracking-widest">Work</a>
        <a href="#services" className="text-[#050505] font-montserrat font-bold text-[12px] hover:opacity-70 transition-opacity uppercase tracking-widest">Services</a>
        <a href="#about" className="text-[#050505] font-montserrat font-bold text-[12px] hover:opacity-70 transition-opacity uppercase tracking-widest">About</a>
        <a href="#contact" className="text-[#050505] font-montserrat font-bold text-[12px] hover:opacity-70 transition-opacity uppercase tracking-widest">Contact</a>
      </div>
      <div className="font-geist text-[12px] font-medium tracking-[0.1em] text-[#050505] flex items-center">
        <span className="cursor-pointer hover:opacity-50 transition-opacity">ES</span>
        <span className="mx-2 opacity-30">|</span>
        <span className="cursor-pointer hover:opacity-50 transition-opacity">EN</span>
      </div>
    </nav>
  );
}
