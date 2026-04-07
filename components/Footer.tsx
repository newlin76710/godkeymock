export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-[rgba(0,255,65,0.1)] py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[rgba(0,255,65,0.4)] text-xs tracking-widest">
            <span className="text-[#00ff41]">神鍵墨客</span> × 練功大師
          </div>
          <div className="text-[rgba(0,255,65,0.25)] text-xs">
            © {year} 林成翰 Shawn Lin — newlin76710@gmail.com
          </div>
          <div className="text-[rgba(0,255,65,0.25)] text-xs tracking-wider">
            [BUILD: {year}.STABLE]
          </div>
        </div>
      </div>
    </footer>
  );
}
