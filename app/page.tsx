import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Team />
      {/* We'll add more sections here as we build them */}
    </div>
  )
}