function About() {
  const features = [
    {
      title: "Discover Nearby Events",
      description:
        "Find concerts, tech meetups, sports events, and community gatherings happening around your current location.",
      icon: "📍",
    },
    {
      title: "Create & Manage Events",
      description:
        "Organizers can easily create events, manage attendees, and keep local communities informed.",
      icon: "📅",
    },
    {
      title: "Role-Based Access",
      description:
        "Different dashboards and permissions for users and administrators to ensure smooth platform management.",
      icon: "🛡️",
    },
    {
      title: "Modern User Experience",
      description:
        "Built with responsiveness and simplicity in mind for both desktop and mobile devices.",
      icon: "⚡",
    },
  ];

  const teamValues = [
    "Community Connection",
    "Accessibility",
    "Scalability",
    "Innovation",
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* HERO SECTION */}
      <section className="flex items-center max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="  gap-12 items-center">
          <div>
            <p className=" text-blue-600 font-semibold uppercase tracking-wider mb-3">
              About MtaaniConnect
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Connecting Communities Through Local Events
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              MtaaniConnect is a location-based event discovery platform that
              helps people find exciting events happening around them. From
              concerts and hackathons to sports and social gatherings, the
              platform makes local discovery simple, fast, and engaging.
            </p>

            <div className="flex place-items-center flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition">
                Explore Events
              </button>

              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-2xl font-semibold transition">
                Learn More
              </button>
            </div>
          </div>

          
        </div>
      </section>

      {/* FEATURES */}
      

      {/* MISSION SECTION */}
      <section className="bg-blue-600 text-white py-20 px-4 mt-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Our Mission
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-3xl mx-auto">
            We aim to bridge the gap between communities and local experiences
            by providing a platform that makes discovering and organizing events
            simple, inclusive, and engaging.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {teamValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Explore Your Community?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Join MtaaniConnect today and discover events happening around you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition shadow-md">
              Get Started
            </button>

            <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition">
              Browse Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default  About
