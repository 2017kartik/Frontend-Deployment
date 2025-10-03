import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <main className="flex items-center w-full justify-center lg:min-h-screen">
      <div className="mx-auto w-full bg-yellow-50 px-6 pb-20 max-lg:px-3 max-lg:pt-20 lg:h-full lg:px-10">
        <div className="flex h-full flex-col items-center justify-around gap-20 max-lg:flex-col-reverse max-lg:gap-10 lg:flex-row">
          {/* Left Content */}
          <div className="flex max-w-3xl flex-1 flex-col items-start justify-center max-lg:items-center">
            <h1 className="leading-wide mb-8 text-left text-3xl font-bold tracking-tight text-[#0B1E38] max-lg:text-center sm:text-4xl lg:text-5xl xl:text-6xl">
              Your <span className="text-yellow-500">Path</span> to Balance
              <br />
              Guided by Listeners
              <br />
              Supported by <span className="text-yellow-500">Experts</span>.
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed tracking-tight text-[#0B1E38] opacity-80 max-lg:text-center max-lg:text-sm">
              From empathetic listeners to specialists like psychologists,
              astrologers, healers, and yoga trainers — connects you to the
              right guidance, powered by AI & spiritual wisdom.
            </p>

            <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center">
              <button className="group flex w-full cursor-pointer items-center justify-center space-x-3 rounded-2xl bg-[#0B1E38] px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1E38]/90 hover:shadow-xl sm:w-auto">
                <span className="text-md md:text-sm xl:text-lg">
                  Start a Conversation
                </span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="group flex w-full cursor-pointer items-center justify-center space-x-3 rounded-2xl border-2 border-yellow-400 bg-white px-8 py-4 font-medium text-[#0B1E38] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-50 hover:shadow-lg sm:w-auto">
                <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-md md:text-sm xl:text-lg">
                  Meet Our Experts
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center space-x-8 opacity-70">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0B1E38]">1000+</div>
                <div className="text-sm text-[#0B1E38]">Happy Users</div>
              </div>
              <div className="h-8 w-px bg-[#0B1E38] opacity-30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0B1E38]">50+</div>
                <div className="text-sm text-[#0B1E38]">Expert Listeners</div>
              </div>
              <div className="h-8 w-px bg-[#0B1E38] opacity-30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#0B1E38]">24/7</div>
                <div className="text-sm text-[#0B1E38]">Available</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-lg flex-1">
            <div className="relative mx-auto h-full">
              {/* Background Glow Effect */}
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-yellow-200/60 via-yellow-100/40 to-transparent opacity-70 blur-3xl"
              />

              {/* Main Image */}
              <div className="relative h-9/10">
                <img
                  src="/temp.jpeg"
                  alt="Calm, smiling family at sunset symbolizing harmony"
                  className="hover:shadow-3xl relative z-10 h-full lg:w-full rounded-4xl object-cover shadow-2xl ring-1 ring-yellow-200/60 transition-all duration-500 max-lg:aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
