import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroesSection from "@/components/HeroesSection";
import TasksSection from "@/components/TasksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HeroesSection />
        <TasksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
