import { RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";
import React, { SetStateAction } from "react";

interface Props {
   customExcuse: string;
   handleButtonClick: (excuse: string) => Promise<void>;
   setCustomExcuse: React.Dispatch<SetStateAction<string>>;
}

const GenerateExcuseForm = ({
   customExcuse,
   handleButtonClick,
   setCustomExcuse,
}: Props) => {
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleButtonClick(customExcuse);
   };
   return (
      <form
         onSubmit={(e) => handleSubmit(e)}
         className="flex gap-4 items-center justify-center max-sm:flex-col"
      >
         <input
            type="text"
            value={customExcuse}
            className="bg-[#3C3C3C] px-6 py-1 rounded-xl w-[18rem] outline-none text-lg"
            placeholder="Generate custom excuse"
            onChange={(e) => setCustomExcuse(e.target.value)}
         />
         <Button
            className="bg-[#6735FD] hover:bg-[#6735fdd8] max-w-[10rem] cursor-pointer rounded-3xl"
            type="submit"
         >
            <RefreshCcw />
            Generate Excuse
         </Button>
      </form>
   );
};

export default GenerateExcuseForm;
