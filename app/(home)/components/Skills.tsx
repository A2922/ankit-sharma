"use client"
import Image from "next/image";
import Title from "./Title";
import { HoverEffect } from "./ui/card-hover-effect";
import { SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiDocker, SiNodedotjs, SiReact, SiTailwindcss , SiPython, SiPostgresql, SiMysql, SiAmazonaws, SiSelenium, SiJenkins} from "react-icons/si";


export default function Skils() {
  const skills = [
    {
      title: "Selenium",
      Icon: SiSelenium,
    },
    {
      title: "Docker",
      Icon: SiDocker,
    },
    {
      title:"Python",
      Icon:SiPython
    },
    {
      title:"AWS",
      Icon:SiAmazonaws
    },
    {
      title: "Javascript",
      Icon: SiJavascript
    },
    {
      title: "Jenkins",
      Icon: SiJenkins,
    },

    {
      title: "NodeJs",
      Icon: SiNodedotjs
    },
    
    {
      title: "MongoDB",
      Icon: SiMongodb
    },
    {
      title:"MySQL",
      Icon:SiMysql
    },
  
   
    
    
  ]
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title text="Skills 🔪"  className="flex flex-col items-center justify-center -rotate-6"/>
      <HoverEffect items={skills}/>
    </div>
  );
}
