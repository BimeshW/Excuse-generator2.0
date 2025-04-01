import { RefreshCw } from "lucide-react";
import Typewriter from "typewriter-effect";

interface Props {
   generatedExcuse: string;
   isGenerating: boolean;
}

const GeneratedExcuse = ({ generatedExcuse, isGenerating }: Props) => {
   return (
      <div className="w-[20rem] h-[10rem] flex justify-center items-center">
         {isGenerating && (
            <p className="animate-pulse flex gap-2 items-center text-xl">
               Generating
               <RefreshCw className="animate-spin size-10" />
            </p>
         )}
         {!isGenerating && generatedExcuse && (
            <div className="text-xl">
               <Typewriter
                  options={{
                     delay: 50,
                  }}
                  onInit={(typewriter) => {
                     typewriter.typeString(generatedExcuse).start();
                  }}
               />
            </div>
         )}
      </div>
   );
};

export default GeneratedExcuse;
