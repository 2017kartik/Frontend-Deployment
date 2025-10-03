import {
  Heart,
  TrendingUp,
  Moon,
  Brain,
  Zap,
  Sparkles,
  Volume2,
  Activity,
  Compass,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";

const DashboardWearablesSection = () => {
  return (
    <main className="bg-yellow-50 py-15">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-15 text-center">
          <div className="relative inline-block">
            <span className="px-4 py-1 text-sm font-medium tracking-wider text-[#0B1E38] uppercase">
              Dashboard & Wearables Section
            </span>
            <h2 className="my-6 text-5xl font-bold tracking-tight text-[#0B1E38]">
              Your Daily <span className="text-yellow-500">Dashboard</span>
            </h2>
            <div className="absolute -top-6 -right-8">
              <LayoutDashboard className="h-8 w-8 text-[#0B1E38] opacity-20" />
            </div>

            <p className="text-md mx-auto max-w-3xl leading-relaxed text-[#0B1E38] opacity-80">
              Sync heart rate, sleep, and stress from your wearable. Get AI
              insights and spiritual recommendations daily. Receive good things
              to watch and affirmations for positivity.
            </p>
          </div>
        </div>

        {/* Dashboard Features Preview */}
        <div className="mb-16 rounded-3xl bg-neutral-50 p-12 shadow-md max-lg:p-1">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            What's Inside Your Dashboard
          </h2>

          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="group text-center transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100 transition-colors group-hover:bg-orange-200">
                <TrendingUp className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800 max-lg:text-sm">
                Stress Trends
              </h3>
              <p className="text-sm text-gray-600 max-lg:text-xs">
                Track your stress patterns over time
              </p>
            </div>

            <div className="group text-center transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-100 transition-colors group-hover:bg-yellow-200">
                <Heart className="h-10 w-10 text-yellow-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800 max-lg:text-sm">
                Sentiment Analysis
              </h3>
              <p className="text-sm text-gray-600 max-lg:text-xs">
                Monitor your emotional wellbeing
              </p>
            </div>

            <div className="group text-center transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 transition-colors group-hover:bg-blue-200">
                <Moon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800 max-lg:text-sm">
                Sleep Patterns
              </h3>
              <p className="text-sm text-gray-600 max-lg:text-xs">
                Analyze your sleep quality & duration
              </p>
            </div>

            <div className="group text-center transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100 transition-colors group-hover:bg-green-200">
                <Brain className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800 max-lg:text-sm">
                AI Recommendations
              </h3>
              <p className="text-sm text-gray-600 max-lg:text-xs">
                Personalized spiritual guidance
              </p>
            </div>

            <div className="group text-center transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-100 transition-colors group-hover:bg-purple-200">
                <Compass className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800 max-lg:text-sm">
                Chakra Balance
              </h3>
              <p className="text-sm text-gray-600 max-lg:text-xs">
                Visualize your energy centers
              </p>
            </div>

            <div className="group text-center transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-100 transition-colors group-hover:bg-teal-200">
                <Sparkles className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800 max-lg:text-sm">
                Crystal Healing
              </h3>
              <p className="text-sm text-gray-600 max-lg:text-xs">
                Guided crystal therapy sessions
              </p>
            </div>

            <div className="group text-center transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-100 transition-colors group-hover:bg-indigo-200">
                <Volume2 className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800 max-lg:text-sm">
                Audio Meditation
              </h3>
              <p className="text-sm text-gray-600 max-lg:text-xs">
                Curated meditation sessions
              </p>
            </div>

            <div className="group text-center transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-pink-100 transition-colors group-hover:bg-pink-200">
                <Zap className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-800 max-lg:text-sm">
                Daily Affirmations
              </h3>
              <p className="text-sm text-gray-600 max-lg:text-xs">
                Positive mantras for your day
              </p>
            </div>
          </div>

          {/* Dashboard Preview Mock */}
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-800 max-lg:text-sm">
                Dashboard Preview
              </h3>
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-orange-700">
                    Stress Level
                  </span>
                  <Activity className="h-4 w-4 text-orange-600" />
                </div>
                <div className="mb-2 text-2xl font-bold text-orange-800">
                  Moderate
                </div>
                <div className="h-2 w-full rounded-full bg-orange-200">
                  <div className="h-2 w-3/5 rounded-full bg-orange-500"></div>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700">
                    Sleep Quality
                  </span>
                  <Moon className="h-4 w-4 text-blue-600" />
                </div>
                <div className="mb-2 text-2xl font-bold text-blue-800">
                  7.5h
                </div>
                <div className="text-sm text-blue-600">Deep sleep: 85%</div>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-green-700">
                    Today's Focus
                  </span>
                  <Sparkles className="h-4 w-4 text-green-600" />
                </div>
                <div className="text-sm font-medium text-green-800">
                  Throat Chakra
                </div>
                <div className="mt-1 text-xs text-green-600">
                  Meditation recommended
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="group text-md inline-flex cursor-pointer items-center space-x-3 rounded-2xl bg-[#0B1E38] px-10 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1E38]/90 hover:shadow-xl">
            <span>View Dashboard Demo</span>
            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default DashboardWearablesSection;
