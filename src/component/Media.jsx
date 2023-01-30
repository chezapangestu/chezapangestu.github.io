import Spotify from "react-spotify-embed";

export default function Media(){
    return(
        <div className="fixed px-10 z-20 opacity-0 dark:opacity-100 md:w-[400px] lg:w-[400px] h-[80px] bottom-[110px] right-[0px] md:right-[10px] lg:right-[0px] rounded-xl transition duration-300 ease-in-out">
            {/* <Spotify link="https://open.spotify.com/track/73jVPicY2G9YHmzgjk69ae?si=4a1d203d3cb644d3"/> */}
            {/* <Spotify link="https://open.spotify.com/track/73jVPicY2G9YHmzgjk69ae?si=4a1d203d3cb644d3" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" /> */}
            <Spotify link="https://open.spotify.com/playlist/37i9dQZF1F0sijgNaJdgit?si=40760096bca24190" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
        </div>
    );
}