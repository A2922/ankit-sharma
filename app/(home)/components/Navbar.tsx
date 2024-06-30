import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar({className}:{className ?: string}) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/ankit1082/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/A2922/",
      label: "Github",
      Icon: SiGithub,
    },

  ];

  return (
    <nav className={cn("py-10 animate-move-down flex justify-between items-center",className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Ankit Sharma 🧑‍💻
      </h1>
      <div className=" flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
