import Image from "next/image";
import { RiGithubLine, RiLinksFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Work = () => {
  const organizations = [
    {
      id: 1,
      name: "Tekion",
      role: "Associate Software Engineer Intern",
      description: "Part of the payments team",
      duration: "Feb'23 - Aug'23",
      location: "Chennai, India",
      logo: "/tekion.png",
    },
    {
      id: 2,
      name: "Admitkard",
      role: "Software Development Engineer  Intern",
      description: "Worked on Fullstack",
      duration: "Jul'22 - Nov'22",
      location: "Noida, India",
      logo: "/admitkard.jpeg",
    },
    {
      id: 2,
      name: "Google Developers Student Clubs",
      role: "Technical Head",
      description: "Worked on Fullstack",
      duration: "Jul'21 - Jul'22",
      location: "Greater Noida, India",
      logo: "/gdsc.webp",
    },
  ];
  const projects = [
    {
      id: 1,
      name: "The World Covid Dashboard",
      description:
        "This is a single page application it shows the current covid scenario in the world. It shows data country wise using graph, charts and tables",
      github: "https://github.com/TanyaGupta1901/The-World-Covid-Tracker",
      src: "/projects/covids.png",
      link: "https://tanyagupta1901.github.io/The-World-Covid-Tracker/",
    },
    {
      id: 4,
      description:
        "This is a blog on various makeup products. It explains the basic use of products present in a basic makeup kit.",
      name: "Winmake",
      github: "https://github.com/TanyaGupta1901/WINmake",
      src: "/projects/winmakes.png",
      link: "https://tanyagupta1901.github.io/WINmake/",
    },
    {
      id: 6,
      name: "Saheli",
      github: "https://github.com/TanyaGupta1901/Saheli-1",
      src: "/projects/saheli.png",
      link: "https://tanyagupta1901.github.io/Saheli-1/",
      description:
        "This is a prototype of having an online medical consultation and community for women to discuss there intimate issues.",
    },
    {
      id: 3,
      name: "RGB Guessing Game",
      github: "https://github.com/TanyaGupta1901/The-color-game",
      src: "/projects/color.png",
      link: "https://tanyagupta1901.github.io/The-color-game/",
      description:
        "This is a game built on javascript, the player has to guess the color that is the game suggests out of the given option. It has easy and hard levels as well.",
    },
    {
      id: 5,
      name: "Hiraeth",
      github: "https://github.com/TanyaGupta1901/Hiraeth",
      src: "/projects/hiraeth.png",
      link: "https://github.com/TanyaGupta1901/Hiraeth",
      description:
        "Hiraeth is an initiative to provide the inclusion of local entrepreneurs into the global market.",
    },
    {
      id: 2,
      name: "The Patatap Clone",
      github: "https://github.com/TanyaGupta1901/Patatapclone",
      description:
        "This is a minified version of Patatap website, that produces visuals and music on key press.",
      src: "/projects/patataps.png",
      link: "https://tanyagupta1901.github.io/Patatapclone/",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-full md:w-[85%] m-auto">
        <div className="flex flex-row justify-center">
          {organizations.map((org, index) => {
            return (
              <motion.div
                animate={{translateY: ["-200%", "0%"]}}
                transition={{ duration: 0.8, delay: (index/10)+0.2, ease: 'easeIn' }}
                key={org.id}
                className="flex flex-row gap-2 md:p-2 m-1 bg-white/10 rounded-xl width-[50%]"
              >
                <div className="flex items-center">
                  <Image
                    src={org.logo}
                    width={80}
                    height={80}
                    className="rounded-full hidden md:flex"
                    alt="organization logo"
                  />
                </div>
                <div className="p-2 text-sm">
                  <p className="text-sm">{org.name}</p>
                  <p className="text-sm">{org.role}</p>
                  <p className="text-sm">{org.duration}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="w-full md:w-[80%] m-auto md:mt-8 flex flex-row overflow-x-scroll snap-x snap-mandatory scrollbar-track-white/20 scrollbar-thumb-accent scrollbar-rounded-large scrollbar-thin">
          {projects.map((project) => {
            return (
              <div
                className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center flex-shrink-0 snap-center md:gap-4 p-4 lg:mt-4 text-center"
                key={project.id}
              >
                <motion.img
                  initial={{ translateY: -200, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  src={project.src}
                  width={450}
                  height={450}
                  alt="project image"
                  className="sm:animate-none"
                />
                <div className="w-full lg:w-[40%] flex flex-col gap-2 items-center">
                  <h1 className="h1 text-accent">{project.name}</h1>
                  <div className="flex flex-row justify-evenly w-full">
                    <a href={project?.github} className="h1 text-accent" target="_blank">
                      <RiGithubLine />
                    </a>
                    <a href={project?.link} className="h1 text-accent" target="_blank">
                      <RiLinksFill />
                    </a>
                  </div>
                  <div className="text-justify text-sm">
                    {project?.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Work;
