import React from "react";
import PortoItems from "./PortoItems";
import project from "../data/project";

function Portoflio(){
    
    return(
        <section id="portfolio">
            <div className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black text-gray-800 dark:text-white pt-20 sm:pt28 md:pt-28 lg:pt-28">
            <h1 className="text-3xl font-bold">
            What I recently worked on ✍
            </h1>
            <p className="font-medium text-gray-500 dark:text-whity mt-3 mb-6">Read about some of the products I've got the opportunity to work on</p>
        {project.map((project => <PortoItems 
            key={project.key}
            id={project.key}
            time={project.time}
            title={project.title}
            content={project.content}
            image={project.image}
            code={project.srcCode}
            link={project.link}
            tech1={project.tech1}
            tech2={project.tech2}
            tech3={project.tech3}
            tech4={project.tech4}
            tech5={project.tech5}
            />
        ))}
        </div>
        </section>
    )
}

export default Portoflio;