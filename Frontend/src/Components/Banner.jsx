import React from "react";
import banner from "../../public/Jar.png"
import {motion} from "framer-motion";
function Banner() {
  return (
    <>
      
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12  md:mt-32">
        
        <motion.h1 initial={{ opacity: 0, y: -100}}
        animate={{ opacity: 1, y:0}}
        transition={{
            type: "spring",
            stiffness:100,
            delay: 0.4,
        }}
         className="text-4xl font-bold">
            Unleash Your Best Self with {"  "}
            <span className="text-orange-700">FitConnect!</span></motion.h1>
            <div className="space-y-6">
            <h2 className="text-xl font-bold ">
                Your ultimate fitness partner-stay fit, stay connected.</h2>
            <motion.p  initial={{ x: -200 }}
                        animate={{ x: 0 }}
                         transition={{
                             type: "tween",
                                duration: 1,
                                ease: "easeInOut",}}
             className="text-gray-500 text-xl font-semibold">
            FitConnect offers personalized fitness plans, expert guidance, and a supportive community. Track your progress, join challenges, and stay motivated. Start your fitness journey today and achieve your goals with FitConnect!

            </motion.p>
            <button href="http://localhost:5176/"className="btn bg-orange-700 text-white text-xl">About</button>
        </div>
        </div>

        <div className="w-full md:w-1/2"></div>
       
        <motion.img initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1}}
        transition={{
            type: "spring",
            stiffness:100,
            damping: 10,
            delay: 0.4,
        }}
        src={banner} className=" w-86 h-92 relative z-40 h-[200px] md:h-[500px] img-shadow img-left" ></motion.img>
      </div>
      
    </>
  );
}

export default Banner;
