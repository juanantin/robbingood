import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContractBuy } from "@/components/ContractBuy";
import { HowItWorks } from "@/components/HowItWorks";
import { CommunityRewards } from "@/components/CommunityRewards";
import { QuestBoard } from "@/components/QuestBoard";
import { Philosophy } from "@/components/Philosophy";
import { WhyItWorks } from "@/components/WhyItWorks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ContractBuy />
        <HowItWorks />
        <CommunityRewards />
        <QuestBoard />
        <Philosophy />
        <WhyItWorks />
      </main>
      <Footer />
    </div>
  );
}
