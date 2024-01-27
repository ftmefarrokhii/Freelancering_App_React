import { useForm } from "react-hook-form";
import TextField from '../../ui/TextField'
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "./useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";
import toast from "react-hot-toast";

export default function CreateProjectForm({onClose,projectToEdit = {}}){
    const {_id : editId} = projectToEdit;
    const isEditSession = Boolean(editId)
    console.log("isEditSession",isEditSession);
    
    const {title , description , budget , category , tags : prevTags , deadline} = projectToEdit;
    console.log("projectToEdit",projectToEdit);

    let editValues = {}
    if(isEditSession){
        editValues = { title , description , budget , category : category._id }
    }

    const {register , formState : {errors} , handleSubmit , reset} = useForm({defaultValues : editValues})
    const[tags,setTags]=useState(prevTags || [])
    const[date,setDate]=useState(new Date(deadline || ""))
    const { isCreatingProject , createProject } = useCreateProject()
    const {isEditingProject , editProject} = useEditProject()
    const {isLoading, categories} = useCategories()

    
    const submitHandler = (data) => {
        console.log(data);
        const newProject = {
            ...data ,
            deadline : new Date(date).toISOString(),
            tags
        }

        if(isEditSession){
            editProject({id : editId,newProject },{
                onSuccess : () => {  
                    onClose();
                    reset();
                },
                onError : (err)=>{
                    toast.error(err?.response?.data?.message)
                }
            })
        } else{
            createProject(newProject , { 
                onSuccess : (data) => {  // age project create shod form ha reset shan
                    onClose();
                    reset();
                },
                onError : (err)=>{
                    toast.error(err?.response?.data?.message)
                }
            })
        }
    }

    return(
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-8">
            <TextField name="title" label="عنوان پروژه" register={register} required errors={errors}
                validationSchema={{
                    required : "عنوان ضروری است",
                    minLength : {
                        value : 10,
                        message : "عنوان باید حداقل 10 کاراکتر باشد"
                    }
                }} 
            />
            <TextField name="description" label="توضیحات" register={register} required errors={errors}
                validationSchema={{
                    required : "توضیحات ضروری است",
                    minLength : {
                        value : 10,
                        message : "توضیحات باید حداقل 10 کاراکتر باشد"
                    }
                }} 
            />
            <TextField name="budget" label="بودجه" register={register} required errors={errors} type="number"
                validationSchema={{
                    required : "بودجه ضروری است"
                }} 
            />
            <RHFSelect label="دسته بندی" name="category" register={register} required options={categories}/>
            <div>
                <label className="mb-2 text-secondary-700 block">تگ</label>
                <TagsInput value={tags} onChange={setTags} name="tags"/>
            </div>
            <DatePickerField label="ددلاین" date={date} setDate={setDate}/> 
            <div className="!mt-8">
                { isCreatingProject ? (
                    <Loading /> 
                    ) : (
                    <button type="submit" className="btn btn--primary w-full">تایید</button>
                    )
                }
            </div>
        </form>
    )
}