import React from "react";
import web1 from "../pict/web-1.png"

function Portoflio(){
    return(
        <section id="portfolio">
        <div className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black dark:text-white pt-16 sm:pt28 md:pt-28 lg:pt-28">
            <h1 className="text-3xl font-bold">
            What I recently worked on
            </h1>
            <p className="mb-6">Read about some of the products I've got the opportunity to work on</p>
            <div className="rounded border-2 border-gray-100 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20222</time>
                        <h1 className="text-2xl font-semibold mt-4">Project-1</h1>
                        <p className="text-gray-500 mb-5">In the middle of last year, I started designing on...</p>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={web1} alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="rounded border-2 border-blue-100 bg-blue-50 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20222</time>
                        <h1 className="text-2xl font-semibold mt-4">Project-1</h1>
                        <p className="text-gray-500 mb-5">In the middle of last year, I started designing on...</p>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={web1} alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="rounded border-2 border-indigo-100 bg-indigo-50 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20222</time>
                        <h1 className="text-2xl font-semibold mt-4">Project-1</h1>
                        <p className="text-gray-500 mb-5">In the middle of last year, I started designing on...</p>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={web1} alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="rounded border-2 border-green-100 bg-green-50 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20222</time>
                        <h1 className="text-2xl font-semibold mt-4">Project-1</h1>
                        <p className="text-gray-500 mb-5">In the middle of last year, I started designing on...</p>
                        <a href="http://www.vireal.live" className="rounded-lg border-2 border-gray-400 px-2 py-1">vireal.live</a>
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={web1} alt="avatar" />
                    </div>
                </div>
            </div>
            
    
        
        </div>
        </section>
    )
}

export default Portoflio;