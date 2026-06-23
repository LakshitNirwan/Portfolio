export interface Project {
  id: number;
  title: string;
  desc: string;
  fullDesc: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

export interface ComicProject extends Project {
  clipClass: string;
  textXY: string;
  bgGray: string;
  bgColor: string;
  textColor: string;
  textureGray: string;
  textureColor: string;
  bgImage: string;
  bgSettings: string;
}

export const projects: ComicProject[] = [
        {
          id: 1,
          title: "BUNK BUDDIES",
          desc: "VIT ROOMMATE APP",
          fullDesc:
            "The ultimate roommate crisis solver designed for VIT Vellore students. Find highly compatible roommates based on daily habits, sleep schedules, and overall vibes. No more random room allocations!",
          techStack: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"],
          githubLink: "https://github.com/LakshitNirwan",
          liveLink: "#",
          clipClass: "panel-1",
          textXY: "top-[14%] left-[21%]",
          bgGray: "bg-gray-500",
          bgColor: "bg-comic-cyan",
          textColor: "text-newpurple",
          textureGray: "halftone-gray",
          textureColor: "halftone-color",
          bgImage: "bg-[url('./images/Vector-1.png')]",
          bgSettings: "bg-[position:0%_0%] bg-[length:46%_33%] bg-no-repeat",
        },
        {
          id: 2,
          title: "CAMPUS MAP",
          desc: "CLASSROOM VISUALIZER",
          fullDesc:
            "An intra-academic block classroom visualizer for the VIT Vellore campus. Search for specific classrooms and visually locate them on a custom campus map grid.",
          techStack: ["JAVASCRIPT", "HTML5 CANVAS", "CSS3", "JSON"],
          githubLink: "https://github.com/LakshitNirwan",
          liveLink: "#",
          clipClass: "panel-2",
          textXY: "top-[16%] left-[72%]",
          bgGray: "bg-gray-200",
          bgColor: "bg-newpurple",
          textColor: "text-white",
          textureGray: "dots-gray",
          textureColor: "dots-color",
          bgImage: "bg-[url('./images/Vector-2.png')]",
          bgSettings: "bg-[position:100%_0%] bg-[length:60%_39%] bg-no-repeat",
        },
        {
          id: 3,
          title: "ATLAS",
          desc: "MERN STACK",
          fullDesc:
            "A combined digital assignment featuring two distinct browser games engineered entirely from scratch using pure vanilla JavaScript physics and DOM manipulation.",
          techStack: ["VANILLA JS", "DOM MANIPULATION", "CSS ANIMATIONS"],
          githubLink: "https://github.com/LakshitNirwan/Atlas",
          liveLink: "https://atlas-ten-inky.vercel.app/",
          clipClass: "panel-3",
          textXY: "top-[48%] left-[17%]",
          bgGray: "bg-gray-300",
          bgColor: "bg-comic-red",
          textColor: "text-white",
          textureGray: "halftone-gray",
          textureColor: "halftone-color",
          bgImage: "bg-[url('./images/Vector-3.png')]",
          bgSettings: "bg-[position:0%_50%] bg-[length:40%_44%] bg-no-repeat",
        },
        {
          id: 4,
          title: "PORTFOLIO",
          desc: "THE ARCHIVES",
          fullDesc:
            "This exact website. A comic-book themed developer portfolio utilizing advanced CSS clip-paths, React state management, and Framer Motion for cinematic transitions.",
          techStack: ["REACT.JS", "TAILWIND CSS", "FRAMER MOTION", "BABEL"],
          githubLink: "https://github.com/LakshitNirwan/Portfolio",
          liveLink: "https://portfolio-kappa-gold-69.vercel.app",
          clipClass: "panel-5",
          textXY: "top-[48%] left-[81%]",
          bgGray: "bg-gray-150",
          bgColor: "bg-comic-sand",
          textColor: "text-white",
          textureGray: "halftone-gray",
          textureColor: "halftone-color",
          bgImage: "bg-[url('./images/Vector-5.png')]",
          bgSettings: "bg-[position:100%_48%] bg-[length:42%_31%] bg-no-repeat",
        },
        {
          id: 5,
          title: "B³ PROMO",
          desc: "VINNOVATE-IT",
          fullDesc:
            "High-impact promotional content and digital materials created for B-cube (B³), the premier hackathon organized by the VinnovateIT club.",
          techStack: ["FIGMA", "ILLUSTRATOR", "UI/UX DESIGN"],
          githubLink: "https://github.com/LakshitNirwan",
          liveLink: "#",
          clipClass: "panel-4",
          textXY: "top-[48%] left-[48%]",
          bgGray: "bg-gray-600",
          bgColor: "bg-newyellow",
          textColor: "text-black",
          textureGray: "sunburst-gray",
          textureColor: "sunburst-color",
          bgImage: "bg-[url('./images/Vector-4.png')]",
          bgSettings: "bg-center bg-[length:37%_42%] bg-no-repeat",
        },
        {
          id: 6,
          title: "CLUB BANNER",
          desc: "CREATIVITY CLUB",
          fullDesc:
            "A large-scale, high-resolution physical hanging banner designed for the official VIT Creativity Club to attract new members during club rush.",
          techStack: ["GRAPHIC DESIGN", "BRANDING", "TYPOGRAPHY"],
          githubLink: "https://github.com/LakshitNirwan",
          liveLink: "#",
          clipClass: "panel-6",
          textXY: "top-[84%] left-[19%]",
          bgGray: "bg-gray-300",
          bgColor: "bg-newpink",
          textColor: "text-comic-silver",
          textureGray: "dots-gray",
          textureColor: "dots-color",
          bgImage: "bg-[url('./images/Vector-6.png')]",
          bgSettings: "bg-[position:0%_100%] bg-[length:45%_37%] bg-no-repeat",
        },
        {
          id: 7,
          title: "CLASSIFIED",
          desc: "W.I.P.",
          fullDesc:
            "This file is highly classified. The developer is currently engineering something new in the lab. Check back next issue for the full reveal.",
          techStack: ["???", "???", "COFFEE"],
          githubLink: "https://github.com/LakshitNirwan",
          liveLink: "#",
          clipClass: "panel-7",
          textXY: "top-[82%] left-[69%]",
          bgGray: "bg-gray-400",
          bgColor: "bg-comic-blue",
          textColor: "text-comic-yellow",
          textureGray: "halftone-gray",
          textureColor: "halftone-color",
          bgImage: "bg-[url('./images/Vector-7.png')]",
          bgSettings:
            "bg-[position:100%_100%] bg-[length:71%_42%] bg-no-repeat",
        },
      ];