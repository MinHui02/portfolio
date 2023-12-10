import React from "react";
import HeroSection from "@/pages/component/HeroSection";
import Project from "./component/Project";
import ProjectCard from "./component/ProjectCard";


export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <HeroSection />
    </div>
  );
}
