export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#2C2C2E] px-6 md:px-16 py-16 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-6">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIW8R3HIkXg2lgl6uH67BQ5WfSTl-1RlJxjssi-vuwdboqMobqS5QAmWRa2-BAkpJsIoE38WdVDe8MfwdBBvzwGI_ePzyAl4ypIz1CnG7n_mRB4wUIN49egcxVCFxLrVL244IUdMODW9XKjmDNwZZhHnnEXCyhPZVMSi1HZVU0tX8CVPV40cumtUwElp-0jaxCr_wrwElp9Yf9GKQh5DxG63gkcGfYrxk_bK9NvtiVPCzh1jhVsDCNyWcbgDmhwopAtqFp7fe9J0vQ" 
            alt="KRAFYX" 
            className="h-6 w-auto opacity-70 grayscale" 
          />
          <p className="font-geist text-[12px] tracking-[0.1em] text-[#c4c7c8]">© 2024 KRAFYX. All rights reserved.</p>
        </div>
        <div className="flex gap-10">
          <a href="#" className="text-[#c4c7c8] hover:text-white transition-colors duration-300 font-geist text-[12px] uppercase tracking-[0.1em]">Instagram</a>
          <a href="#" className="text-[#c4c7c8] hover:text-white transition-colors duration-300 font-geist text-[12px] uppercase tracking-[0.1em]">LinkedIn</a>
          <a href="#" className="text-[#c4c7c8] hover:text-white transition-colors duration-300 font-geist text-[12px] uppercase tracking-[0.1em]">Vimeo</a>
        </div>
        <div className="font-geist text-[12px] tracking-[0.1em] text-[#c4c7c8]">
          <span className="hover:text-white cursor-pointer transition-colors duration-300">ES | EN</span>
        </div>
      </div>
    </footer>
  );
}
