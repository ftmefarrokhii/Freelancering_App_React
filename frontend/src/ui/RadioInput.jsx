export default function RadioInput({label, value , register
     , name , id ,validationSchema , watch , errors}){
    return(
        <div className="flex justify-center gap-x-2 text-secondary-600">
            <input className="cursor-pointer w-4 h-4 text-primary-900 form-radio focus:ring-primary-900"
                //accent-slate-400
                type="radio" name={name} id={id} value={value} 
               {...register(name ,validationSchema)} checked={watch(name) === value}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}