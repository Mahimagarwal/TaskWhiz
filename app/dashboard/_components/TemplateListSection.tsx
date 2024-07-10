import Templates from "@/app/(data)/Templates"
import TemplateCard from "./TemplateCard"
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
const TemplateListSection = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
            {Templates.map((item:TEMPLATE,index:number)=>(
             <TemplateCard {...item}/>
            ))}
        </div>
      )
}

export default TemplateListSection