import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Python</li>
                <li>C / C++</li>
                <li>Java(OOP/Concurrent Programming)</li>
                <li>SAS</li>
                <li>R Programming</li>
                <li>SAS Enterprise Miner</li>
                <li>Microsaft Power BI</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>ETH Singapore</li>
            <li>ETH KL</li>
            <li>ETH Online</li>
            <li>ETHGlobal Superhack</li>
            <li>Solana Hyperdrive</li>
            <li>APUBCC Sparkathon</li>
            <li>Encode Club</li>
            <li>Google CTF</li>
            <li>NUS Grey CTF</li>
            <li>Tune Protect Hackathon</li>
            <li>geNFesT Ideathon</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>SMJK Sam Tet</li>
                <li>SMJK Ave Maria Convent</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <Image src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am currently pursuing a degree in Computer Science with a specialism in Data Analytics at APU.
                        Additionally, I have ventured into the world of blockchain development, particularly with Solidity, allowing me to build smart contracts for decentralized applications.
                        My passion for technology and problem-solving has led me to actively participate in 11 hackathons this year, where I primarily serve as a Front End Developer. However, I am not limited to frontend tasks and often take on backend responsibilities, demonstrating my versatility and commitment to delivering complete solutions. </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;
