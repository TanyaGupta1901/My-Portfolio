import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const skills = [
    {
      id: 1,
      label: "CSS",
      src: "/icons/css_bg.png",
    },
    {
      id: 2,
      label: "Express",
      src: "/icons/express.png",
    },
    {
      id: 3,
      label: "Framer Motion",
      src: "/icons/framer.png",
    },
    {
      id: 4,
      label: "Github",
      src: "/icons/github.png",
    },
    {
      id: 5,
      label: "Gitlab",
      src: "/icons/gitlab.png",
    },
    {
      id: 6,
      label: "Java",
      src: "/icons/java.png",
    },
    {
      id: 7,
      label: "Javascript",
      src: "/icons/javascript.png",
    },
    {
      id: 8,
      label: "Mongo DB",
      src: "/icons/mongoDb.png",
    },
    {
      id: 9,
      label: "Material Ui",
      src: "/icons/mui.png",
    },
    {
      id: 10,
      label: "Next Js",
      src: "/icons/next.png",
    },
    {
      id: 11,
      label: "Node Js",
      src: "/icons/node.png",
    },
    {
      id: 12,
      label: "PostCSS",
      src: "/icons/postcss.png",
    },
    {
      id: 13,
      label: "Python",
      src: "/icons/python.png",
    },
    {
      id: 14,
      label: "React Js",
      src: "/icons/react.png",
    },
    {
      id: 15,
      label: "Redux",
      src: "/icons/redux.png",
    },
    {
      id: 16,
      label: "Sass",
      src: "/icons/sass.png",
    },
    {
      id: 17,
      label: "Tailwind",
      src: "/icons/tailwind.png",
    },
    {
      id: 18,
      label: "Typescript",
      src: "/icons/typescript.png",
    },
    {
      id: 19,
      label: "Vs Code",
      src: "/icons/vscode.png",
    },
    {
      id: 20,
      label: "Webstorm",
      src: "/icons/webstorm.png",
    },
    {
      id: 22,
      label: "HTML",
      src: "/icons/html.png",
    },
    {
      id: 21,
      label: "Git",
      src: "/icons/git.png",
    },
    {
      id: 1,
      label: "CSS",
      src: "/icons/css_bg.png",
    },
    {
      id: 2,
      label: "Express",
      src: "/icons/express.png",
    },
    {
      id: 3,
      label: "Framer Motion",
      src: "/icons/framer.png",
    },
    {
      id: 4,
      label: "Github",
      src: "/icons/github.png",
    },
    {
      id: 5,
      label: "Gitlab",
      src: "/icons/gitlab.png",
    },
    {
      id: 6,
      label: "Java",
      src: "/icons/java.png",
    },
    {
      id: 7,
      label: "Javascript",
      src: "/icons/javascript.png",
    },
    {
      id: 8,
      label: "Mongo DB",
      src: "/icons/mongoDb.png",
    },
    {
      id: 9,
      label: "Material Ui",
      src: "/icons/mui.png",
    },
    {
      id: 10,
      label: "Next Js",
      src: "/icons/next.png",
    },
    {
      id: 11,
      label: "Node Js",
      src: "/icons/node.png",
    },
    {
      id: 12,
      label: "PostCSS",
      src: "/icons/postcss.png",
    },
    {
      id: 13,
      label: "Python",
      src: "/icons/python.png",
    },
    {
      id: 14,
      label: "React Js",
      src: "/icons/react.png",
    },
    {
      id: 15,
      label: "Redux",
      src: "/icons/redux.png",
    },
    {
      id: 16,
      label: "Sass",
      src: "/icons/sass.png",
    },
    {
      id: 17,
      label: "Tailwind",
      src: "/icons/tailwind.png",
    },
    {
      id: 18,
      label: "Typescript",
      src: "/icons/typescript.png",
    },
    {
      id: 19,
      label: "Vs Code",
      src: "/icons/vscode.png",
    },
    {
      id: 20,
      label: "Webstorm",
      src: "/icons/webstorm.png",
    },
    
    
  ];
  return (
    <>
    <h1 className="flex items-center justify-center z-1 h1 text-accent top-[10%] left-[50%] md:text-5xl">Skills</h1>
    <div className="flex lg:flex-row flex-col w-[92%]  lg:w-[80%] m-auto z-1">
      <motion.div
       className="skillBubble m-auto flex h-[30rem] md:h-[35rem] flex-wrap items-center justify-center overflow-hidden relative">
        {skills.map((skill) => {
          return (
            <motion.div
              initial={{ translateY: "0%"}}
              transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
              animate={{ translateY: "-380%" }}
              key={skill.id}
              className="p-4 flex flex-col items-center justify-center"
            >
              <div className="bg-white/20 p-4 lg:p-10 bubble rounded-full w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[10rem] flex items-center justify-center">
                <img src={skill.src} alt={skill.label} />
              </div>
              <p>{skill.label}</p>
            </motion.div>
          );
        })}
      </motion.div>
      {/* <motion.div 
      initial={{translateX: '-10%', translateY: '5%'}}
      animate={{translateY: ['0%', '5%', '0%'], translateX: '10%', scale: [1.1, 1, 1.1]}}
      transition={{duration: 10, repeat: Infinity, repeatType: 'reverse'}}
      className="w-full lg:w-[40%] flex items-center justify-center z-10">
        <Image
          src="/responsive.png"
          width={1200}
          height={1200}
          alt="responsive"
          className="rounded-full"
        ></Image>
      </motion.div> */}
    </div>
    </>
  );
};

export default Services;
