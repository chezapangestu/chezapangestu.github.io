import React from "react";
import PortoItems from "./PortoItems";
import project from "../data/project";

function Portoflio(){
    
    return(
        <section id="portfolio">
            <div className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black text-gray-800 dark:text-white pt-16 sm:pt28 md:pt-28 lg:pt-28">
            <h1 className="text-3xl font-bold">
            What I recently worked on ✍
            </h1>
            <p className="font-medium text-gray-500 dark:text-whity mb-6">Read about some of the products I've got the opportunity to work on</p>
        {project.map((project => <PortoItems 
            key={project.key}
            id={project.key}
            time={project.time}
            title={project.title}
            content={project.content}
            image={project.image}
            tech1={project.tech1}
            tech2={project.tech2}
            tech3={project.tech3}
            tech4={project.tech4}
            tech5={project.tech5}
            />
        ))}
        </div>
        {/* <div className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black text-gray-800 dark:text-white pt-16 sm:pt28 md:pt-28 lg:pt-28">
            <h1 className="text-3xl font-bold">
            What I recently worked on ✍
            </h1>
            
            <p className="font-medium text-gray-500 dark:text-whity mb-6">Read about some of the products I've got the opportunity to work on</p>
            <div className="rounded-lg border-2 border-gray-100 bg-gray-50 dark:bg-blacky dark:border-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20222</time>
                        <h1 className="text-2xl font-semibold mt-4">{props.title}</h1>
                        <p className="text-gray-500 mb-5">{props.content}</p>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={web5} alt="avatar" />
                    </div>
                </div>
            </div> */}
            {/* <div className="rounded-lg border-2 border-gray-100 bg-gray-50 dark:bg-blacky dark:border-gray-700 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20222</time>
                        <h1 className="text-2xl font-semibold mt-4">{props.title}</h1>
                        <p className="text-gray-500 mb-5">In the middle of last year, I started designing on...</p>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={web4} alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="rounded-lg border-2 border-gray-100 bg-gray-50 dark:bg-blacky dark:border-gray-700 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20222</time>
                        <h1 className="text-2xl font-semibold mt-4">Project-1</h1>
                        <p className="text-gray-500 mb-5">In the middle of last year, I started designing on...</p>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={web3} alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="rounded-lg border-2 border-gray-100 bg-gray-50 dark:bg-blacky dark:border-gray-700 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20222</time>
                        <h1 className="text-2xl font-semibold mt-4">Project-1</h1>
                        <p className="text-gray-500 mb-5">In the middle of last year, I started designing on...</p>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={web2} alt="avatar" />
                    </div>
                </div>
            </div> */}
            
    
        
        {/* </div> */}
        </section>
    )
}

export default Portoflio;