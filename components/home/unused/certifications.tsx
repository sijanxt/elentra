export default function Certifications() {
  const certifications = [
    {
      name: "Energy Star",
      description: "EPA certified for superior energy efficiency"
    },
    {
      name: "ISO 9001",
      description: "International quality management standards"
    },
    {
      name: "CE Certified",
      description: "European safety and compliance approved"
    },
    {
      name: "UL Listed",
      description: "Safety tested and certified by Underwriters Laboratories"
    },
    {
      name: "A+++ Rating",
      description: "Highest energy efficiency classification"
    },
    {
      name: "RoHS Compliant",
      description: "Environmentally friendly and safe materials"
    }
  ];

  return (
    <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/40 dark:border-zinc-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-cream-600 dark:text-cream-400 font-bold mb-3 block">
            Trusted & Certified
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            Industry Certifications
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            Our commitment to quality, safety, and sustainability is validated by leading international standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/40 dark:border-zinc-900/40 text-center hover:-translate-y-1 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cream-400 to-cream-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-50 mb-2">
                {cert.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partner Brands */}
        <div className="mt-20 pt-16 border-t border-zinc-200/40 dark:border-zinc-900/40">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Trusted by Leading Brands
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Partnering with the world's best in smart home technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center text-2xl font-bold text-zinc-400">Amazon Alexa</div>
            <div className="text-center text-2xl font-bold text-zinc-400">Google Home</div>
            <div className="text-center text-2xl font-bold text-zinc-400">Apple HomeKit</div>
            <div className="text-center text-2xl font-bold text-zinc-400">Samsung SmartThings</div>
          </div>
        </div>
      </div>
    </section>
  );
}
