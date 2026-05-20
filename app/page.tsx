export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Aviation Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Turn Pilot Logbooks into{" "}
          <span className="text-[#58a6ff]">Business Intelligence</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          FlightIQ ingests CSV and PDF logbook data, runs it through analytics
          pipelines, and delivers interactive dashboards with operational
          insights — built for airlines, flight schools, and aviation
          consultants.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start for $99 / mo
        </a>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            {
              icon: "📂",
              title: "Logbook Ingestion",
              desc: "Upload CSV or PDF logbooks, or enter flights manually."
            },
            {
              icon: "📊",
              title: "Live Dashboards",
              desc: "Interactive charts for hours, routes, aircraft types, and trends."
            },
            {
              icon: "🛫",
              title: "Fleet Insights",
              desc: "Identify utilisation gaps, fatigue risks, and scheduling opportunities."
            }
          ].map((f) => (
            <div
              key={f.title}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-6"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">
          Simple Pricing
        </h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">
            Pro Plan
          </p>
          <p className="text-5xl font-extrabold text-white mb-1">$99</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited logbook uploads",
              "Interactive analytics dashboards",
              "CSV & PDF parsing",
              "Fleet & crew reporting",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What logbook formats are supported?",
              a: "FlightIQ accepts CSV exports from all major electronic logbook apps (ForeFlight, Logbook Pro, MyFlightbook) as well as scanned PDF logbooks."
            },
            {
              q: "Is my flight data secure?",
              a: "Yes. All data is encrypted at rest and in transit. We never share your data with third parties."
            },
            {
              q: "Can I cancel anytime?",
              a: "Absolutely. Cancel your subscription at any time from your account dashboard with no cancellation fees."
            }
          ].map((item) => (
            <div
              key={item.q}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} FlightIQ. All rights reserved.
      </footer>
    </main>
  );
}
