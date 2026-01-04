"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Scott Stout",
      company: "MedVector",
      quote:
        "Their ability to understand complex topics and visualize them was amazing. We’ve raised $3.5M with a lot of help from HipHip Videos!",
    },
    {
      name: "Ian Phillips",
      company: "Saatchi Wellness",
      quote:
        "HipHip Videos is a beautiful explainer video company with an easy process to get your project done in a simple, elegant way.",
    },
    {
      name: "Lhea Lecy",
      company: "Thermo Fisher",
      quote:
        "HipHip Videos is amazing to work with. Their quality of work is exceptional, and they are very responsive and always professional.",
    },
    {
      name: "Josh Kliot",
      company: "Airtm",
      quote:
        "HipHip Videos went the extra mile to understand our product. Very satisfied with their team, process, creativity, and explainer video.",
    },
    {
      name: "April A. Arslan",
      company: "Law-Whiz",
      quote:
        "Nothing out there compares to their ability to deliver the story and message with such clarity and impact.",
    },
    {
      name: "Mandy Kennedy",
      company: "Infinant Health",
      quote:
        "HipHip Videos was super easy to work with and flexible to our pace. Their process and review system were seamless.",
    },
    {
      name: "Jen Erickson",
      company: "DocuSign",
      quote:
        "The internal feedback we’ve gotten has been great. We appreciated the team’s responsiveness and ability to meet deadlines.",
    },
    {
      name: "Lindsey Reis",
      company: "SoClean",
      quote:
        "The process was simple, stayed on track, and always professional. We highly recommend HipHip Videos.",
    },
  ];

  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-[#CCFF00] mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            What Clients Say About{" "}
            <span className="text-[#CCFF00]">HipHip Videos</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Trusted by startups, enterprises, and global brands to bring their
            stories to life through powerful explainer videos.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 hover:border-[#CCFF00] transition"
            >
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                “{item.quote}”
              </p>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-[#CCFF00]">{item.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
