import { Utensils, Leaf, Compass } from "lucide-react";

const features = [
  {
    icon: <Utensils size={48} />,
    title: "Dining",
    desc: "Sustainable gastronomy from farm to plate.",
    href: "/dining",
  },
  {
    icon: <Leaf size={48} />,
    title: "Wellness",
    desc: "Holistic healing in our botanical spa.",
    href: "/wellness",
  },
  {
    icon: <Compass size={48} />,
    title: "Experience",
    desc: "Curated adventures for the curious.",
    href: "/experiences",
  },
];

export function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      {features.map((feat) => (
        <a
          key={feat.title}
          href={feat.href}
          className="p-10 bg-white rounded-3xl shadow-sm border border-stone-100 hover:shadow-xl transition-all group"
        >
          <div className="text-emerald-900 mb-6 group-hover:scale-110 transition-transform">
            {feat.icon}
          </div>
          <h3 className="text-2xl font-semibold text-stone-800 mb-4">
            {feat.title}
          </h3>
          <p className="text-stone-500 leading-relaxed">{feat.desc}</p>
        </a>
      ))}
    </div>
  );
}
