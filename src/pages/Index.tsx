import { Hero } from "@/components/Hero"
import { WhatIs } from "@/components/WhatIs"
import { HowItWorks } from "@/components/HowItWorks"
import { HeroCommunity } from "@/components/HeroCommunity"
import { WhyJoin } from "@/components/WhyJoin"
import { SignUpForm } from "@/components/SignUpForm"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIs />
      <HowItWorks />
      <HeroCommunity />
      <WhyJoin />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Index;
