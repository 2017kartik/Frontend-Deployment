import {
  MessageCircle,
  Users,
  BarChart3,
  ArrowRight,
  Brain,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Brain className="h-8 w-8 text-[#0B1E38]" />,
      title: "AI Chatbot Assessment",
      subtitle: "Quick personalized analysis",
      details: [
        "Our AI chatbot analyzes your mood, stress levels, and current state",
        "Provides instant preliminary guidance and recommendations",
        "Determines the best next step for your wellness journey",
      ],
      buttonText: "Start AI Assessment",
    },
    {
      number: "2",
      icon: <MessageCircle className="h-8 w-8 text-[#0B1E38]" />,
      title: "Talk to a Listener",
      subtitle: "Share what you're going through",
      details: [
        "Our trained listeners provide empathy and emotional support",
        "If needed, they guide you toward the right expert (psychologist, astrologer, healer, counselor, or yoga trainer)",
      ],
      buttonText: "Start with a Listener",
    },
    {
      number: "3",
      icon: <Users className="h-8 w-8 text-[#0B1E38]" />,
      title: "Consult the Right Expert",
      subtitle: "Connect with specialized professionals",
      details: [
        "Psychologist: For mental health and stress",
        "Astrologer: For planetary influence & life guidance",
        "Healer: For energy balance & meditation practices",
        "Counselor: For emotional wellness & clarity",
        "Yoga/Nutrition/Reiki experts: For physical and holistic wellbeing",
      ],
      buttonText: "Book an Expert",
    },
    {
      number: "4",
      icon: <BarChart3 className="h-8 w-8 text-[#0B1E38]" />,
      title: "Track & Improve with Dashboard",
      subtitle: "Monitor your wellness journey",
      details: [
        "Daily updates, affirmations, meditation routines",
        "Wearable data integration (heart rate, sleep, stress)",
        "Blockchain-secured consultation history",
      ],
      buttonText: "See My Dashboard",
    },
  ];

  return (
    <main className="bg-yellow-50 py-15 max-lg:py-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header Section */}
        <div className="mb-15 text-center">
          <span className="px-4 py-1 text-sm font-medium tracking-wider text-[#0B1E38] uppercase">
            How it works
          </span>
          <h2 className="my-6 text-5xl font-bold tracking-tight text-[#0B1E38]">
            Four <span className="text-yellow-500">Steps</span> Flow
          </h2>
          <p className="text-md mx-auto max-w-3xl leading-relaxed text-[#0B1E38] opacity-80">
            We blend the best of old-school knowledge with modern tricks to help
            you form long-lasting healthy habits.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-7xl">
          {/* Mobile Timeline */}
          <div className="space-y-12 lg:hidden">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="group relative rounded-3xl border border-yellow-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Mobile Step Number */}
                  <div className="absolute -top-4 left-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1E38] text-lg font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* Background decoration */}
                  <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-yellow-50 opacity-50 transition-transform duration-500 group-hover:scale-110"></div>

                  {/* Icon */}
                  <div className="mt-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50 transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-2xl leading-tight font-bold text-[#0B1E38]">
                      {step.title}
                    </h3>
                    <p className="mb-6 font-medium text-[#0B1E38] opacity-80">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="mb-8 space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#0B1E38]"></div>
                        <span className="text-sm leading-relaxed text-[#0B1E38] opacity-75">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="group/btn flex w-full cursor-pointer items-center justify-center space-x-2 rounded-2xl bg-[#0B1E38] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#0B1E38]/90 hover:shadow-lg">
                    <span>{step.buttonText}</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Zig-Zag Timeline */}
          <div className="relative hidden lg:block">
            {/* Timeline Line */}
            <div className="absolute top-16 bottom-16 left-1/2 w-1 -translate-x-1/2 transform bg-yellow-300"></div>

            {/* Timeline Steps */}
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full bg-[#0B1E38] text-xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* Left Side Content (Steps 1 & 3) */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-16">
                        <div className="group relative rounded-3xl border border-yellow-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                          {/* Background decoration */}
                          <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-yellow-50 opacity-50 transition-transform duration-500 group-hover:scale-110"></div>

                          {/* Icon */}
                          <div className="mb-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50 transition-transform duration-300 group-hover:scale-110">
                              {step.icon}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="mb-6">
                            <h3 className="mb-3 text-2xl leading-tight font-bold text-[#0B1E38]">
                              {step.title}
                            </h3>
                            <p className="mb-6 font-medium text-[#0B1E38] opacity-80">
                              {step.subtitle}
                            </p>
                          </div>

                          {/* Details */}
                          <div className="mb-8 space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="flex items-start space-x-3"
                              >
                                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#0B1E38]"></div>
                                <span className="text-sm leading-relaxed text-[#0B1E38] opacity-75">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Button */}
                          <button className="group/btn flex w-full cursor-pointer items-center justify-center space-x-2 rounded-2xl bg-[#0B1E38] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#0B1E38]/90 hover:shadow-lg">
                            <span>{step.buttonText}</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </div>
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    /* Right Side Content (Steps 2 & 4) */
                    <>
                      <div className="w-1/2"></div>
                      <div className="w-1/2 pl-16">
                        <div className="group relative rounded-3xl border border-yellow-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                          {/* Background decoration */}
                          <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-yellow-50 opacity-50 transition-transform duration-500 group-hover:scale-110"></div>

                          {/* Icon */}
                          <div className="mb-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50 transition-transform duration-300 group-hover:scale-110">
                              {step.icon}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="mb-6">
                            <h3 className="mb-3 text-2xl leading-tight font-bold text-[#0B1E38]">
                              {step.title}
                            </h3>
                            <p className="mb-6 font-medium text-[#0B1E38] opacity-80">
                              {step.subtitle}
                            </p>
                          </div>

                          {/* Details */}
                          <div className="mb-8 space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <div
                                key={detailIndex}
                                className="flex items-start space-x-3"
                              >
                                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#0B1E38]"></div>
                                <span className="text-sm leading-relaxed text-[#0B1E38] opacity-75">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Button */}
                          <button className="group/btn flex w-full cursor-pointer items-center justify-center space-x-2 rounded-2xl bg-[#0B1E38] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#0B1E38]/90 hover:shadow-lg">
                            <span>{step.buttonText}</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HowItWorks;
