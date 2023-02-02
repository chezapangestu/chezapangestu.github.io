export default function PlaylistItems(props){
    return(
        // <div className="flex rounded-lg border p-10">
            <a className="flex flex-row items-center border rounded-md mb-5" href={props.src}>
                <p className="font-montserrat font-bold max-w-[5px] ml-5">{props.id}</p>
                <img className="h-20 ml-5" src={props.albumArt} alt="album-cover" />
                <div className="flex flex-col ml-5">
                    <p className="font-montserrat font-bold">{props.title}</p>
                    <p className="font-montserrat font-semibold text-gray-400 text-sm">{props.artist}</p>
                </div>
            </a>
        // </div>
    );
}