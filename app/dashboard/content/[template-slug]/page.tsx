"use client"
import FormSection from "../-components/FormSection"
import OutputSection from "../-components/OutputSection"
import Templates from "@/app/(data)/Templates"
import { TEMPLATE } from "../../_components/TemplateListSection"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { chatSession } from "@/utils/AiModel"
import { useState } from "react"

interface PROPS{
    params:{
        'template-slug':string
    }
}

const page = (props:PROPS) => {
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])
    const [loading,setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState<string>('');
    const GenerateAIContent= async(formData:any)=>{
        setLoading(true);
        const SelectedPrompt=selectedTemplate?.aiPrompt;
        const FinalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;
        const result= await chatSession.sendMessage(FinalAIPrompt);
        setAiOutput(result?.response.text());
        setLoading(false);
       
    }
    return (
        <div className='p-5'>
            <Link href={"/dashboard"}>
                <Button> <ArrowLeft/> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
                {/* FormSection  */}
                    <FormSection 
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v:any)=>GenerateAIContent(v)}
                    loading={loading} 
                    />
                {/* OutputSection  */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput}/>
                    </div>
            </div>
        </div>
      )
}

export default page