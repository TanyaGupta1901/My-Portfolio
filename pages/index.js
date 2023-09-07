import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import TiltImage from "../components/TiltImage";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-2 md:w-[80%] md:m-auto xl:width-[60%]">
      <div className="flex flex-col justify-between items-start text-white font-bold xl:w-[40%] w-full pr-8 md:ml-8">
        <p className="h1">
          Hi, my name is<span className="text-accent"></span>
          <br /> <span className="text-accent">Tanya Gupta</span>.
        </p>
        <p className="xl:w-[90%] m-y-[2rem]">
          Creative software developer, experienced in building user-friendly and
          engaging web experiences<br/>
          <span className="md:hidden text-accent font-light underline">
            <a href="https://drive.google.com/drive/folders/14DyqgEGDc-23kVRuoo-y-dTEGheG3Y8E">
              Resume <HiArrowRight className="text-md inline text-white" />
            </a>
          </span>
        </p>
        <p className="text-md text-accent font-bold">
          <Typewriter
            words={[
              "Fullstack Developer",
              "Web Developer",
              "Frontend Developer",
            ]}
            loop
            cursor
            cursorColor="#19FAC4"
          />
        </p>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative m-4 hidden md:block "
        >
          <Image
            src="/round-text.png"
            width={150}
            height={150}
            alt="rounded-text"
            className="animate-spin-slow"
          />
          <a href="https://drive.google.com/drive/folders/14DyqgEGDc-23kVRuoo-y-dTEGheG3Y8E">
            <HiArrowRight className="absolute top-[43%] left-[45%] text-xl hover:scale-[2] transition-all duration-300" />
          </a>
        </motion.div>
      </div>
      <div className="z-0">
        <TiltImage>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [0, 0.5, 1, 1.2, 1] }}
            transition={{ duration: 1.5 }}
            className="flex justify-center items-center xl:bg-white xl:bg-opacity-10 xl:backdrop-blur-s drop-shadow-lg rounded-full p-4"
          >
            <Image src="/devgirl2.png" width={550} height={550} alt="devgirl" />
          </motion.div>
        </TiltImage>
      </div>
    </div>
  );
};

export default Home;

// Sketching your vision to digital reality
