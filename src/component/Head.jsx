import React from "react";
import avatar from "../pict/avatar-profile-2.png";
import { motion } from "framer-motion";

function Head(){
    return(

        <div className="default-body sm:small-body md:medium-body lg:hero-body text-gray-800 dark:text-white transition duration-300 ease-in-out">
            <section id="head-about">
                <div className="grid grid-cols-1 pt-28 sm:pt-28 md:pt-28 lg:pt-32 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col justify-center text-center sm:text-center md:text-center lg:text-left">
                        <p className="animate-pulse text-sm font-semibold pt-5">👋 currently looking for work</p>
                        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-mark mt-6">
                            Vijay Cheza Pangestu
                        </h1>
                        <p className="leading-tight lg:leading-tight text-lg sm:text-lg md:text-lg lg:text-lg font-medium font-circular text-gray-500 dark:text-whity mt-6">is a front-end & software engineer web enthusiast. Passionate about creating products and experiences people love to use✨ </p>
                            {/* <h1 className="text-2xl mt-8"><em>Front-end Enthusiast</em></h1> */}
                        <div className="mt-6 mb-5">
                            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Frontend</span> */}
                            <span className="bg-yellow-200 text-yellow-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
                            <span className="bg-green-200 text-green-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">NodeJS</span>
                            <span className="bg-sky-200 text-sky-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">ReactJS</span>
                        </div>
                    </div>
                    <motion.div 
                    className="mx-auto my-auto sm:mx-auto sm:my-auto md:mx-auto md:my-auto lg:mx-auto lg:my-auto"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    >
                        <img className="bg-auto w-[500px] sm:w-[500px] md:w-[500px] lg:w-[500px]" src={avatar} alt="avatar" />
                    </motion.div>
                    
                    
                </div>
                        
            </section>
            
      </div>

    )
}

export default Head;