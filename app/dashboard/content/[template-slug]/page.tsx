"use client"
import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSection"
import Templates from "@/app/(data)/Templates"
import { TEMPLATE } from "../../_components/TemplateListSection"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface PROPS{
    params:{
        'template-slug':string
    }
}

const page = (props:PROPS) => {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug)
    return (
        <div className='p-5'>
            <Link href={"/dashboard"}>
                <Button> <ArrowLeft/> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
                {/* FormSection  */}
                    <FormSection 
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v:any)=>console.log(v)}
                    // loading={loading} 
                    />
                {/* OutputSection  */}
                <div className='col-span-2'>
                    {/* <OutputSection aiOutput={aiOutput} /> */}
                    </div>
            </div>
        </div>
      )
}

export default page