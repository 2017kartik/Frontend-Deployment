import {
  Brain,
  Heart,
  Zap,
  ArrowRight,
  Sparkles,
  Activity,
  Moon,
  Target,
  Image,
} from "lucide-react";

const RecommendationEngineSection = () => {
  const recommendations = [
    {
      condition: "Elevated Stress",
      icon: <Activity className="h-6 w-6 text-[#0B1E38]" />,
      solution: "5 Mukhi Rudraksha + calming meditation",
      bgColor: "from-red-50 to-orange-50",
      iconBg: "bg-red-100",
      imageAlt: "5 Mukhi Rudraksha beads with meditation setup",
    },
    {
      condition: "Anxiety",
      icon: <Heart className="h-6 w-6 text-[#0B1E38]" />,
      solution: "6 Mukhi Rudraksha + Amethyst + breathing routine",
      bgColor: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
    },
    {
      condition: "Low Energy",
      icon: <Zap className="h-6 w-6 text-[#0B1E38]" />,
      solution: "Citrine + Sunstone + motivational guidance",
      bgColor: "from-yellow-50 to-orange-50",
      iconBg: "bg-yellow-100",
    },
  ];

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-[#0B1E38]" />,
      title: "Rudraksha Recommendations",
      description: "Based on chakra imbalance & stress levels",
      image: "/Rudraksha.jpeg",
      imageAlt: "5 Mukhi Rudraksha beads with meditation setup",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-[#0B1E38]" />,
      title: "Gemstone Guidance",
      description: "For emotional & mental wellness needs",
      image: "/Gems.jpeg",
      imageAlt: "6 Mukhi Rudraksha with amethyst crystals",
    },
    {
      icon: <Moon className="h-8 w-8 text-[#0B1E38]" />,
      title: "Meditation Routines",
      description: "Personalized affirmations for balance",
      image: "/Meditation.jpeg",
      imageAlt: "Citrine and sunstone crystals arrangement",
    },
  ];

  return (
    <main className="bg-yellow-50 py-15">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-15 text-center">
          <div className="relative inline-block">
            <span className="px-4 py-1 text-sm font-medium tracking-wider text-[#0B1E38] uppercase">
              Recommendation Engine Section
            </span>
            <h2 className="my-6 text-5xl font-bold tracking-tight text-[#0B1E38]">
              Hybrid <span className="text-yellow-500">Spiritual +</span>
              <span className="block">Data-Driven Guidance</span>
            </h2>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-8">
              <Target className="h-8 w-8 text-[#0B1E38] opacity-20" />
            </div>

            <p className="text-md mx-auto max-w-3xl leading-relaxed text-[#0B1E38] opacity-80">
              Our AI analyzes your mood, stress levels, sleep patterns, and
              wearable data. Combined with traditional wisdom, we recommend:
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl border border-yellow-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-50 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#0B1E38]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#0B1E38] opacity-75">
                {feature.description}
              </p>

              {/* Image Slot */}
              <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex aspect-[4/3] items-center justify-center border-2 border-dashed border-yellow-200 bg-white/50">
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Example Recommendations */}
        <div className="mb-16">
          <h2 className="my-12 text-center text-lg font-medium text-[#0B1E38]">
            Personalized Recommendations
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="group relative flex cursor-pointer flex-col justify-around overflow-hidden rounded-3xl border border-yellow-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-yellow-50 opacity-40 transition-transform duration-500 group-hover:scale-125"></div>

                {/* Condition Badge */}
                <div className="mb-6 flex items-center space-x-3">
                  <div
                    className={`h-12 w-12 ${rec.iconBg} flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    {rec.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1E38]">
                      {rec.condition}
                    </h3>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="relative mb-6 rounded-2xl bg-yellow-50 p-4 text-center">
                  <div className="flex items-start space-x-3">
                    <p className="text-sm leading-relaxed font-medium text-[#0B1E38]">
                      {rec.solution}
                    </p>
                  </div>
                </div>

                {/* AI Badge */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-2 rounded-full bg-[#0B1E38] px-3 py-1 text-sm font-medium text-white">
                    <Brain className="h-4 w-4" />
                    <span>AI Recommended</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-yellow-100 bg-white p-12 shadow-2xl">
            {/* Background decorations */}
            <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-yellow-50 opacity-30"></div>
            <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-yellow-50 opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-yellow-50 opacity-10"></div>

            <div className="relative z-10">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-50">
                <Target className="h-10 w-10 text-[#0B1E38]" />
              </div>

              <h3 className="mb-4 text-3xl font-bold text-[#0B1E38]">
                Ready for Your Personal Guidance?
              </h3>

              <p className="text-md mb-8 leading-relaxed text-[#0B1E38] opacity-80">
                Let our AI analyze your unique patterns and receive personalized
                spiritual recommendations tailored to your wellness journey.
              </p>

              <button className="group text-md inline-flex cursor-pointer items-center space-x-3 rounded-2xl bg-[#0B1E38] px-10 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1E38]/90 hover:shadow-xl">
                <Brain className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                <span>Get My Recommendation</span>
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecommendationEngineSection;
