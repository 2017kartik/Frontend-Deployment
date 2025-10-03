import {
  Brain,
  Star,
  Dumbbell,
  Hand,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const ExpertsSection = () => {
  const experts = [
    {
      icon: <Brain className="h-6 w-6 text-[#0B1E38] sm:h-8 sm:w-8" />,
      title: "Psychologists & Counselors",
      description: "for stress, anxiety, and emotional balance.",
      bgPosition: "top-2 right-2",
      image: "/Counseler.jpeg",
      imageAlt: "Therapist in session with client",
    },
    {
      icon: <Star className="h-6 w-6 text-[#0B1E38] sm:h-8 sm:w-8" />,
      title: "Astrologers",
      description: "for planetary insights and life alignment.",
      bgPosition: "top-2 right-2",
      image: "/Astrologer.jpeg",
      imageAlt: "Astrologer reading charts with zodiac wheel",
    },
    {
      icon: <Dumbbell className="h-6 w-6 text-[#0B1E38] sm:h-8 sm:w-8" />,
      title: "Yoga Trainers & Nutritionists",
      description: "for physical health and discipline.",
      bgPosition: "top-2 right-2",
      image: "/Yoga.jpeg",
      imageAlt: "Person doing yoga with healthy food",
    },
    {
      icon: <Hand className="h-6 w-6 text-[#0B1E38] sm:h-8 sm:w-8" />,
      title: "Healers & Reiki Practitioners",
      description: "for spiritual and energy healing.",
      bgPosition: "top-2 right-2",
      image: "/Healer.jpeg",
      imageAlt: "Peaceful meditation in nature with healing energy",
    },
    {
      icon: <Heart className="h-6 w-6 text-[#0B1E38] sm:h-8 sm:w-8" />,
      title: "Compassionate Listeners",
      description: "first point of contact, guiding your next step.",
      bgPosition: "top-2 right-2",
      image: "/Listener.jpeg",
      imageAlt: "Compassionate listener in conversation",
    },
    {
      icon: <Heart className="h-6 w-6 text-[#0B1E38] sm:h-8 sm:w-8" />,
      title: "Ayurveda & Aroma Therapist",
      description: "restore harmony with natural therapies.",
      bgPosition: "top-2 right-2",
      image: "/Ayurveda.jpeg",
      imageAlt: "Ayurveda and aroma therapy session",
    },
  ];

  return (
    <main className="bg-yellow-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <div className="relative inline-block">
            <span className="px-4 py-1 text-xs font-medium tracking-wider text-[#0B1E38] uppercase sm:text-sm">
              Experts Section
            </span>
            <h2 className="my-4 text-3xl font-bold tracking-tight text-[#0B1E38] sm:my-6 sm:text-4xl lg:text-5xl">
              One <span className="text-yellow-500">Platform</span>, Many{" "}
              <span className="text-yellow-500">Experts</span>
            </h2>
            <div className="absolute -top-4 -right-4 hidden sm:block">
              <Sparkles className="h-6 w-6 text-[#0B1E38] opacity-30" />
            </div>
          </div>
          <p className="mx-auto max-w-3xl px-4 text-sm leading-relaxed text-[#0B1E38] opacity-80 sm:text-base">
            Based on your listener call, you'll be guided to the right expert
            who fits your needs.
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="group relative flex min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-yellow-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:min-h-[320px] sm:rounded-3xl sm:shadow-xl"
              >
                {/* Image Section */}
                <div className="relative h-40 overflow-hidden sm:h-48">
                  <img
                    src={expert.image}
                    alt={expert.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm sm:top-4 sm:right-4 sm:h-12 sm:w-12 sm:rounded-xl">
                    {expert.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-grow flex-col justify-center p-6 sm:p-8">
                  <div
                    className={`absolute ${expert.bgPosition} h-16 w-16 rounded-full bg-yellow-50 opacity-30 transition-transform duration-500 group-hover:scale-125`}
                  ></div>

                  <div className="text-center">
                    <h3 className="mb-2 text-lg leading-tight font-bold text-[#0B1E38] sm:mb-3 sm:text-xl">
                      {expert.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#0B1E38] opacity-75 sm:text-base">
                      {expert.description}
                    </p>
                  </div>

                  <div className="absolute right-4 bottom-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowRight className="h-5 w-5 text-[#0B1E38] opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 text-center">
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-yellow-100 bg-white p-8 shadow-lg sm:rounded-3xl sm:p-10 sm:shadow-xl">
            <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-yellow-50 opacity-30"></div>
            <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-yellow-50 opacity-30"></div>

            <div className="relative z-10">
              <h3 className="mb-3 text-xl font-bold text-[#0B1E38] sm:mb-4 sm:text-2xl">
                Find Your Perfect Match
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[#0B1E38] opacity-80 sm:mb-8 sm:text-base">
                Discover the expert who aligns with your unique wellness journey
                and goals.
              </p>
              <button className="group inline-flex cursor-pointer items-center space-x-2 rounded-xl bg-[#0B1E38] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1E38]/90 hover:shadow-lg sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base">
                <span>Explore Experts</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExpertsSection;
