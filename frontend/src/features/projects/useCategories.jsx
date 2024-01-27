import { useQuery } from "react-query";
import { getCategoryApi } from "../../services/CategoryService";


export default function useCategories(){
    const {data , isLoading} = useQuery({
        queryKey : ["categories"],
        queryFn : getCategoryApi
    })
    // console.log("data",data);

    const {categories : rawCategories = [] } = data || {}
    console.log("rawCategories",rawCategories);
    // categories shamele _id ,title,enTitle,description,value k ma faghat label va value mikhaym
    const categories = rawCategories.map((category)=> (
        {
            value : category._id,
            label :category.title
        }
    ))
    const transformedCategories = rawCategories.map((category)=> (
        {
            value : category.englishTitle,
            label :category.title
        }
    ))

    return {isLoading, categories, transformedCategories}
}