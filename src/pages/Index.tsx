import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { TournamentsSection } from "@/components/TournamentsSection";
import { BottomNav } from "@/components/BottomNav";
import { GrainOverlay } from "@/components/GrainOverlay";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <TopBar />
      <main className="pb-28 md:pb-0">
        <Hero />
        <TournamentsSection />
      </main>
      <BottomNav />
    </div>
  );
};

export default Index;
