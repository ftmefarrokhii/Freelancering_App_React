import DatePicker from "react-multi-date-picker";
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

export default function DatePickerField({label , date, setDate}){
    return(
        <div>
            <label className="mb-2 text-secondary-700 block">{label}</label>

            <DatePicker containerClassName="w-full" 
                        inputClass="textField__input" 
                        format="YYYY/MM/DD"
                        calendarPosition="bottom-center"
                        value={date} 
                        onChange={setDate} 
                        locale={persian_fa} 
                        calendar={persian}
            />
        </div>
    )
}