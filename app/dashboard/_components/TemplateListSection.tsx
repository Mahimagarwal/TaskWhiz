import Templates from "@/app/(data)/Templates"
import TemplateCard from "./TemplateCard"
import { useEffect, useState } from "react"
export interface TEMPLATE{
    name:string,
    desc:string,
    category:string,
    icon:string,
    aiPrompt:string,
    slug:string,
    form?:FORM[],  
}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}
const TemplateListSection = ({userSearchInput}:any) => {
    const [templateList,setTemplateList]=useState(Templates)
    useEffect(()=>{
   if(userSearchInput)
   {
     const filterdata=Templates.filter(item=>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
     );
     setTemplateList(filterdata);
   }
   else
   {
    setTemplateList(Templates)
   }
    },[userSearchInput])
    
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 '>
            {templateList.map((item:TEMPLATE,index:number)=>(
             <TemplateCard {...item}/>
            ))}
        </div>
      )
}

export default TemplateListSection