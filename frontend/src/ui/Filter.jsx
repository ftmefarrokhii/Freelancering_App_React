import { useSearchParams } from "react-router-dom"

export default function Filter({options,filterField}){
    const[searchParams, setSearchParams] = useSearchParams("")
    const currentFilter = searchParams.get(filterField) || options.at(0).value //  value index 0 : default 
    console.log("filter",currentFilter);
    function handleClick(value){
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }
    return(
        <div className="flex items-center gap-x-2 text-xs">
            <span>وضعیت</span>
            <div className="flex items-center rounded-lg gap-x-2 p-1 bg-secondary-0 border border-secondary-100">
                {options.map(({label,value})=>{
                    const isActive = value == currentFilter;
                    return (
                        <button key={value} onClick={() => handleClick(value)} disabled={isActive}
                            className={`whitespace-nowrap rounded-md px-4 p-1 font-bold transition-all duration-300 
                                ${isActive ? "!bg-primary-900 text-white" : "bg-secondary-0 text-secondary-800"}`}>
                            {label}
                        </button>

                    )
                }
               

                    
                )}
            </div>
        </div>
    )

}