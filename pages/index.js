import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

const Home = () => {
  const imgAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX;
    const moveY = clientY;
    const offsetFactor = 15;
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center m-2 xl:width-[60%]">
      <div className="flex flex-col justify-between items-start text-white font-bold xl:w-[40%] w-[100%] pr-8 md:ml-8">
        <p className="h2">
          Sketching <span className="text-accent">your vision</span>
          <br /> to <span className="text-accent">digital reality.</span>
        </p>
        <p className="xl:w-[60%] mt-[2rem] md:text-[23px]">
          Diligent and creative frontend developer, experienced in building user-friendly and engaging web
          experiences, with a strong focus on communication and teamwork.{" "}
        </p>
        <div className="relative m-8 bg-circleStar bg-no-repeat bg-center ">
        <Image src="/round-text.png" width={200} height={200} alt='rounded-text' className="animate-spin-slow w-full h-full"/>
        <HiArrowRight className="absolute top-[40%] left-[43%] text-4xl hover:scale-[2] transition-all duration-300" />
      </div>
      </div>
      <motion.div
        className="flex justify-center items-center xl:bg-white xl:bg-opacity-10 xl:backdrop-blur-s drop-shadow-lg rounded-full p-4"
        // animate={imgAnimation}
        // onMouseMove={(e) => handleMouseMove(e)}
      >
        <Image src="/devgirl2.png" width={650} height={650} alt="devgirl" />
      </motion.div>
    </div>
  );
};

export default Home;
