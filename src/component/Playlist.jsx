import React from "react";
import PlaylistItem from "./PlaylistItems";
import tracks from "../data/tracks";
import { motion } from "framer-motion"

export default function Playlist(){
    return(
        <section id="playlist" className="mb-5">
            <p className="font-circular text-md text-gray-500 dark:text-whity mb-5">etc.</p>
            <p className="font-medium font-circular text-md text-gray-500 dark:text-whity mb-5">The songs that i loved the most:</p>
            <motion.div 
            className=" overflow-auto h-[100px] transition duration-300 ease-in-out"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2}}

            >
        <div className="">
        {tracks.map((tracks => <PlaylistItem
            key={tracks.key}
            id={tracks.no}
            artist={tracks.artist}
            title={tracks.title}
            albumArt={tracks.albumArt}
            src={tracks.src}
            />
        ))}
        </div>
        </motion.div>
        </section>
    );
}