import { useSearchParams } from "react-router-dom"

export default function FilterDropdown({options , filterField}){
    console.log(options);
    const[searchParams, setSearchParams] = useSearchParams()
    const value = searchParams.get(filterField) || ""
    console.log("searchParams",searchParams);
    
    function changeHandler(e){
        searchParams.set(filterField, e.target.value)
        setSearchParams(searchParams)
    }
    return (
        <select value={value} onChange={changeHandler} className="py-2 text-xs textField__input bg-secondary-0">
            {options.map((option)=>(
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
} 