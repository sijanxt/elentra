export default function About() {
  const values = [
    {
      title: "German Engineering",
      description: "Precision-machined parts and high-quality materials built to perform flawlessly for decades.",
      icon: (
        <svg className="w-6 h-6 text-cream-600 dark:text-cream-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    },
    {
      title: "Acoustic Silence",
      description: "Advanced soundproofing and vibration decoupling keep operation near-silent.",
      icon: (
        <svg className="w-6 h-6 text-cream-600 dark:text-cream-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
        </svg>
      )
    },
    {
      title: "Eco-Conscious Design",
      description: "Industry-leading energy ratings and eco-conscious manufacturing cycles minimize footprint.",
      icon: (
        <svg className="w-6 h-6 text-cream-600 dark:text-cream-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="bg-primary py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/40 dark:border-zinc-900/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-cream-600 dark:text-cream-455 font-bold mb-3 block">
            About Our Brand
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-secondary tracking-tight mb-8">
            Quietly Redefining Home Comfort
          </h2>
          <p className="text-base sm:text-lg text-secondary/70 leading-relaxed font-light">
            Elentra is dedicated to bringing innovative home appliances that blend cutting-edge technology with minimalist design. We believe every home deserves quality products that simplify life, perform silently, and respect the planet.
          </p>
        </div>

        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, i) => (
            <div key={i} className="p-8 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200/40 dark:border-zinc-900/40 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
              <div className="w-12 h-12 rounded-xl bg-cream-50 dark:bg-cream-950/20 flex items-center justify-center border border-cream-200/40 dark:border-cream-900/20 mb-6 shadow-xs">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-secondary/70 leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="pt-16 border-t border-zinc-200/40 dark:border-zinc-900/40 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-cream-600 dark:text-cream-400 mb-2 tracking-tight">15+</h3>
            <p className="text-xs uppercase tracking-wider text-secondary/60 font-semibold">Years of Excellence</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-cream-600 dark:text-cream-400 mb-2 tracking-tight">500+</h3>
            <p className="text-xs uppercase tracking-wider text-secondary/60 font-semibold">Precision Products</p>
          </div>
          <div className="p-4">
            <h3 className="text-4xl sm:text-5xl font-extrabold text-cream-600 dark:text-cream-400 mb-2 tracking-tight">50K+</h3>
            <p className="text-xs uppercase tracking-wider text-secondary/60 font-semibold">Homes Transformed</p>
          </div>
        </div>
      </div>
    </section>
  );
}


