import Image from "next/image";

export function SpaSection() {
  return (
    <section className="bg-emerald-950 py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-800/20 rounded-full blur-3xl" />
          <h3 className="text-emerald-400 uppercase tracking-widest text-xs font-bold mb-4">
            Wellness & Rejuvenation
          </h3>
          <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            The Botanical <br />
            <span className="italic font-serif">Spa Experience</span>
          </h2>
          <p className="text-emerald-100/60 mb-10 leading-relaxed text-lg">
            Our signature treatments use native ingredients harvested from the
            surrounding rainforest. Escape the digital world and reconnect with
            your inner rhythm in our open-air treatment pavilions.
          </p>
          <ul className="space-y-4">
            {[
              "Holistic Massage",
              "Volcanic Stone Therapy",
              "Forest Bathing Rituals",
            ].map((item) => (
              <li key={item} className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full border border-emerald-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </div>
                <span className="text-emerald-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image + Quote */}
        <div className="relative group">
          <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
              alt="Botanical Spa"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl hidden md:block shadow-xl">
            <p className="text-emerald-950 font-serif italic text-xl">
              &quot;Pure transcendence.&quot;
            </p>
            <p className="text-stone-400 text-xs mt-2 uppercase tracking-widest">
              Vogue Travel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
