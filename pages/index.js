import React from "react";
import HeroSection from "@/pages/component/HeroSection";
import Project from "./component/Project";

export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <HeroSection />
    </div>
  );
}