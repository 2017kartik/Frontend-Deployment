import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { FaDonate } from "react-icons/fa";

const DonationPool = () => {
  return (
    <div className="w-full bg-yellow-50 px-4 py-15">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="relative inline-block">
            <span className="px-4 py-1 text-sm font-medium tracking-wider text-[#0B1E38] uppercase">
              Donation Pool (Sponsor Healing)
            </span>

            <h2 className="my-6 text-5xl font-bold tracking-tight text-[#0B1E38]">
              Give the <span className="text-yellow-500">Gift of Guidance</span>
            </h2>

            <div className="absolute -top-6 -right-8">
              <FaDonate className="h-8 w-8 text-[#0B1E38] opacity-20" />
            </div>

            <p className="text-md mx-auto max-w-3xl leading-relaxed text-[#0B1E38] opacity-80">
              Not everyone can afford expert guidance. Sponsor a session for
              others through our Donation Pool. All donations are
              blockchain-verified and stored securely.
            </p>
          </div>
        </div>

        {/* Donation Options */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {/* Option 1 */}
          <div className="transform rounded-2xl border border-yellow-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-500">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="mb-2 text-2xl font-bold text-[#0B1E38]">₹100</div>
              <div className="font-medium text-gray-700">Listener Call</div>
              <div className="mt-2 text-sm text-gray-500">
                Basic emotional support session
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="relative transform rounded-2xl border border-yellow-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
              <div className="rounded-full bg-[#0B1E38] px-4 py-1 text-xs font-medium text-white">
                POPULAR
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-500">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="mb-2 text-2xl font-bold text-[#0B1E38]">₹500</div>
              <div className="font-medium text-gray-700">
                Specialist Consultation
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Professional expert guidance
              </div>
            </div>
          </div>

          {/* Option 3 */}
          <div className="transform rounded-2xl border border-yellow-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-500">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="mb-2 text-2xl font-bold text-[#0B1E38]">
                ₹1,500
              </div>
              <div className="font-medium text-gray-700">Monthly Check-ins</div>
              <div className="mt-2 text-sm text-gray-500">
                Ongoing support for a month
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-10 rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center justify-center">
            <Shield className="mr-2 h-6 w-6 text-blue-900" />
            <h4 className="text-lg font-semibold text-gray-800">
              Secure & Transparent
            </h4>
          </div>
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 font-medium text-blue-900">
                Blockchain Verified
              </div>
              <div className="text-sm text-gray-600">
                All transactions are recorded on blockchain for transparency
              </div>
            </div>
            <div>
              <div className="mb-2 font-medium text-blue-900">
                Direct Impact
              </div>
              <div className="text-sm text-gray-600">
                100% of your donation goes to sponsored sessions
              </div>
            </div>
            <div>
              <div className="mb-2 font-medium text-blue-900">
                Anonymous Giving
              </div>
              <div className="text-sm text-gray-600">
                Your privacy is protected while helping others
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group text-md inline-flex cursor-pointer items-center space-x-3 rounded-2xl bg-[#0B1E38] px-10 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1E38]/90 hover:shadow-xl">
            <span>Donate a Session </span>
            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Help someone find their path to balance and wellness
          </p>
        </div>

        {/* Impact Stats */}
        <div className="mt-12 text-center">
          <div className="mx-auto grid max-w-md grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#0B1E38]">24/7</div>
              <div className="text-sm text-gray-600">Sessions Sponsored</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0B1E38]">89</div>
              <div className="text-sm text-gray-600">Lives Touched</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#0B1E38]">₹52K</div>
              <div className="text-sm text-gray-600">Total Donated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPool;
