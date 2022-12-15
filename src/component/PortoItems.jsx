import React from "react";
import clsx from 'clsx';
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';

function PortoItems(props){
    return(<div>
        {/* <div className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black text-gray-800 dark:text-white pt-16 sm:pt28 md:pt-28 lg:pt-28"> */}
            <div className="rounded-lg border-2 border-gray-100 bg-gray-50 dark:bg-blacky dark:border-gray-700 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="order-last pb-6 pt-2 sm:py-6 md:py-6 lg:py-6 px-6">
                        <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">{props.time}</time>
                        <h1 className="text-2xl font-semibold mt-4">{props.title}</h1>
                        <p className="text-gray-500 dark:text-whity text-sm mt-2">{props.content}</p>
                        <div className="mt-2 mb-4">
                            {props.tech1 ? <span className={clsx(`text-xs font-semibold rounded pb-0.5 px-2`,props.tech1)}>{props.tech1}</span> : null}
                            {props.tech2 ? <span className={clsx(`text-xs font-semibold rounded pb-0.5 px-2 ml-2`,props.tech2)}>{props.tech2}</span> : null}
                            {props.tech3 ? <span className={clsx(`text-xs font-semibold rounded pb-0.5 px-2 ml-2`,props.tech3)}>{props.tech3}</span> : null}
                            {props.tech4 ? <span className={clsx(`text-xs font-semibold rounded pb-0.5 px-2 ml-2`,props.tech4)}>{props.tech4}</span> : null}
                            {props.tech5 ? <span className={clsx(`text-xs font-semibold rounded pb-0.5 px-2 ml-2`,props.tech5)}>{props.tech5}</span> : null}
                            
                        </div>
                        {props.code ? <a href={props.code} className="rounded font-bold hover:text-whity px-1 py-1"><CodeIcon /> source code</a> : null}
                        {props.link ? <a href={props.link} className="rounded font-bold hover:text-whity px-1 py-1 ml-5"><PlayCircleIcon /> project</a> : null}
                        {props.proto ? <a href={props.proto} className="rounded font-bold hover:text-whity px-1 py-1"><Grid4x4Icon /> prototype</a> : null}
                    </div>
                    <div className="px-5 py-5 lg:py-5 lg:px-5 mx-auto my-auto">
                        <img className="shadow-lg rounded-md" src={props.image} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    // </div>
    )
}

export default PortoItems;