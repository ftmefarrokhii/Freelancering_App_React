import RadioInput from "./RadioInput";

export default function RadioInputGroup({register,watch ,errors ,configs }){
    const {name , options , validationSchema = {} } = configs;
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center gap-x-8">
                {options.map(({label,value})=>(
                    <RadioInput label={label} key={value}
                                value={value} 
                                id={value}
                                name={name}
                                register={register}
                                watch={watch}  
                                validationSchema={validationSchema}
                                errors={errors}
                    />

                ))}
             
            </div>
            {errors && errors["role"] && <span className="text-error block text-sm mt-2 flex-1">{errors["role"]?.message}</span>}
        </div>
    )
}
    
