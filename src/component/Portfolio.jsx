import React from "react";
import PortoItems from "./PortoItems";
import project from "../data/project";
import { motion } from "framer-motion"

function Portoflio(){
    
    return(
        <section id="portfolio">
            <motion.div 
            className="next-section sm:small-body md:medium-body lg:large-body text-gray-800 dark:text-white pt-20 sm:pt28 md:pt-28 lg:pt-28 transition duration-300 ease-in-out"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2}}

            >
            <h1 className="text-3xl font-bold font-mark">
            What I recently worked on
            </h1>
            <p className="font-medium font-circular text-md text-gray-500 dark:text-whity mt-3 mb-6">Read about some of the products and website I've got the opportunity to work on</p>
        {project.map((project => <PortoItems 
            key={project.key}
            id={project.key}
            time={project.time}
            title={project.title}
            content={project.content}
            image={project.image}
            code={project.srcCode}
            link={project.link}
            proto={project.proto}
            tech1={project.tech1}
            tech2={project.tech2}
            tech3={project.tech3}
            tech4={project.tech4}
            tech5={project.tech5}
            />
        ))}
        </motion.div>
        </section>
    )
}

export default Portoflio;