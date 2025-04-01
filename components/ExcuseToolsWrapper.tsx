"use client";

import QuickExcusesButton from "@/components/QuickExcusesButton";
import GeneratedExcuse from "./GeneratedExcuse";
import { useState } from "react";
import GenerateExcuseForm from "./GeneratedExcuseForm";


const ExcusesToolsWrapper = () => {
   const [generatedExcuse, setGeneratedExcuse] = useState("");
   const [isGenerating, setIsGenerating] = useState(false);
   const [customExcuse, setCustomExcuse] = useState("");

   const handleButtonClick = async (excuse: string) => {
      setIsGenerating(true);
      try {
         const res = await fetch("/api/excuse", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ excuse }),
         });

         const data: { excuse: string } = await res.json();
         setGeneratedExcuse(data.excuse);
      } catch (error) {
         console.log("Error generating excuse", error);
      } finally {
         setIsGenerating(false);
      }
   };

   return (
      <div className="flex flex-col justify-center items-center">
         <section className="mt-6 flex flex-col items-center gap-5">
            <p className="text-3xl">Quick Generate</p>
            <QuickExcusesButton handleButtonClick={handleButtonClick} />
         </section>
         <p className="my-4 text-2xl text-center">or</p>
         <GenerateExcuseForm
            customExcuse={customExcuse}
            handleButtonClick={handleButtonClick}
            setCustomExcuse={setCustomExcuse}
         />
         <GeneratedExcuse
            generatedExcuse={generatedExcuse}
            isGenerating={isGenerating}
         />
      </div>
   );
};

export default ExcusesToolsWrapper;
