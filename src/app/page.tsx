import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      {/* Hero Section with Scroll Animation */}
      <HeroSection />

      {/* ── About Section ── */}
      <section className="content-section" style={{ background: "#0e0e0e" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-4xl md:text-6xl font-bold mb-8 gradient-text"
            style={{ lineHeight: 1.2 }}
          >
            Driving Digital Growth
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-16"
            style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}
          >
            We craft high-performance digital experiences that convert. From
            stunning web design to data-driven marketing strategies — Itzfizz
            delivers results that matter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🚀",
                title: "Performance",
                desc: "Lightning-fast websites optimized for speed and SEO",
              },
              {
                icon: "🎨",
                title: "Design",
                desc: "Pixel-perfect designs that captivate and convert",
              },
              {
                icon: "📈",
                title: "Growth",
                desc: "Data-driven strategies that deliver measurable results",
              },
            ].map((card) => (
              <div key={card.title} className="glass-card text-center">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {card.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="content-section" style={{ background: "#0a0a0a" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            style={{ lineHeight: 1.2 }}
          >
            Our Services
          </h2>
          <p
            className="text-base max-w-xl mx-auto mb-14"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Full-stack digital solutions tailored to your business needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            {[
              {
                num: "01",
                title: "Web Development",
                desc: "Custom websites built with modern frameworks and best practices",
                color: "#45db7d",
              },
              {
                num: "02",
                title: "E-Commerce",
                desc: "Shopify and WooCommerce stores that drive revenue",
                color: "#6ac9ff",
              },
              {
                num: "03",
                title: "SEO Optimization",
                desc: "Rank higher and attract quality organic traffic",
                color: "#def54f",
              },
              {
                num: "04",
                title: "Digital Marketing",
                desc: "Strategic campaigns across all digital channels",
                color: "#fa7328",
              },
            ].map((service) => (
              <div key={service.num} className="glass-card flex gap-5">
                <span
                  className="text-3xl font-bold"
                  style={{ color: service.color, opacity: 0.7 }}
                >
                  {service.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-12 text-center"
        style={{
          background: "#080808",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p className="gradient-text text-2xl font-bold mb-2">ITZFIZZ</p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
          © 2026 Itzfizz Digital. Crafted with passion.
        </p>
      </footer>
    </>
  );
}
