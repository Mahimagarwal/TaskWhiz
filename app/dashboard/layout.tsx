"use client"
import { useState } from "react";
import { TotalUsageContext } from "../(context)/TotalUsageContex";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { UpdateCreditUsageContext } from "../(context)/UpdateCredits";

const layout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
    const[totalUsage,setTotalUsage]=useState<Number>(0);
    const [updateCreditUsage,setUpdateCreditUsage]=useState<any>();
  return (
    <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
    <div className="bg-slate-200 h-screen">
    <div className="md:w-64 hidden md:block fixed">
          <SideNav/>
    </div>
    <div className="md:ml-64">
      <Header/>
        {children}
    </div>
    </div>
    </TotalUsageContext.Provider>
    </UpdateCreditUsageContext.Provider>

  )
}

export default layout