import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroesSection from "@/components/HeroesSection";
import ChildrenWorksSection from "@/components/ChildrenWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <HeroSection />
      <HeroesSection />
      <ChildrenWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
