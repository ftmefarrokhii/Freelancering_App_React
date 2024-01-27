import Filter from "../../../ui/Filter";
import FilterDropdown from "../../../ui/FilterDropdown";
import useCategories from "../../projects/useCategories"

export default function FreelancerProjectHeader(){
    const {transformedCategories} = useCategories()
    console.log("transformedCategories",transformedCategories);
    const statusOptions = [
        {label : "همه" , value :"ALL"},
        {label : "باز" , value :"OPEN"},
        {label : "بسته" , value :"CLOSED"}
    ]
    const sortOptions = [
        { label : "جدیدترین" , value : "latest"},
        { label : "قدیمی ترین" , value : "earliest"}
    ]

    return(
        <div className="flex justify-between items-center text-secondary-700 mb-8">
            <h1 className="text-lg font-bold">لیست پروژه ها</h1>
            <div className="flex gap-x-8 items-center">
                <Filter filterField="status" options={statusOptions} />

                <FilterDropdown filterField="category" options={[
                    { value : "ALL", label : "دسته بندی(همه)" },
                    ... transformedCategories 
                    ]}
                />
                <FilterDropdown filterField="sort" options={sortOptions}/>
                

            </div>
        </div>
    )
}