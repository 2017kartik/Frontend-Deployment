import HeroSection from "../components/home/HeroSection";
import Footer from "../components/home/Footer";
import HowItWorks from "../components/home/HowItWorks";
import ExpertsSection from "../components/home/ExpertsSection";
import RecommendationEngineSection from "../components/home/RecommendationEngineSection";
import DonationPool from "../components/home/DonationPool";
import DashboardWearablesSection from "../components/home/DashboardWearablesSection";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <main className="flex flex-col bg-yellow-50 max-lg:overflow-x-hidden">
      <HeroSection />
      <HowItWorks />
      <ExpertsSection />
      <RecommendationEngineSection />
      <DonationPool />
      <DashboardWearablesSection />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
