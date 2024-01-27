export default function Stat({icon , title , value , color}){
    const colors = {
        "primary" : "bg-primary-100 text-primary-700",
        "green" : "bg-green-100 text-green-700",
        "orange" : "bg-orange-100 text-orange-700",
    }
    
    return(
        <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4 ">
            <div className={`row-span-2 items-center justify-center p-2 
                aspect-square rounded-full ${colors[color]}`}
            >
                {icon}
            </div>
            <h5 className="font-bold text-secondary-500 text-lg self-center">{title}</h5>
            <p className="font-bold text-secondary-900 text-3xl">{value}</p>
        </div>
    )
}