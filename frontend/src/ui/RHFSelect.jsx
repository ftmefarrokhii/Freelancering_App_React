
export default function RHFSelect({label, name , required,options, register}){
    return(
        <div>
            <label htmlFor={name} className="mb-2 text-secondary-700 block">
                {label} {required && <span className="text-error">*</span>}
            </label>
            <select id={name} {...register(name)} className="textField__input">
                {options.map((option)=>(
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
               
            </select>
        </div>
    )
}