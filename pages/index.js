import React from "react";
import HeroSectionStatic from "@/components/HeroSection";
import Project from "../components/Project";
import ProjectCard from "../components/ProjectCard";
import dynamic from 'next/dynamic';
import AboutMe from '../components/AboutMe';
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';
import AchievementsSection from '../components/AchievementsSection';



const HeroSectionDynamic = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
        <main>
          <HeroSectionStatic />
          <AchievementsSection />
          <AboutMe />
          <Project />
          <EmailSection />
          <HeroSectionDynamic />
        </main>
        <Footer />
    </div>
  );
}
