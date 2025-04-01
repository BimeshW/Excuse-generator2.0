import ExcusesToolsWrapper from "@/components/ExcuseToolsWrapper";
import HeaderTypingEffect from "@/components/HeaderTypingEffect";

export default function Home() {
   return (
      <div className="w-full min-h-screen flex bg-[#1D1D1D] items-center flex-col text-white">
         <div className="mt-32 flex flex-col justify-center items-center">
            <section className="flex flex-col items-center gap-5">
               <HeaderTypingEffect />
               <p className="text-center text-lg w-[90%] max-sm:text-xs text-gray-300">
                  Tired of making excuses? 😩 One click and Excuse Generator
                  24/7 gives you instant, believable excuses—no thinking needed!
                  🚀😂
               </p>
            </section>
            <ExcusesToolsWrapper />
         </div>
      </div>
   );
}

