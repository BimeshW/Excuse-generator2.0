"use client";

import Typewriter from "typewriter-effect";

const HeaderTypingEffect = () => {
   return (
      <div className="text-center h-11">
         <Typewriter
            options={{
               delay: 100,
               loop: true,
               cursor: "|",
               autoStart: true,
            }}
            onInit={(typewriter) => {
               typewriter
                  .typeString(
                     '<span class="text-3xl font-bold text-white">GenZ Excuse Generator 24/7</span>'
                  )
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString(
                     '<span class="text-3xl text-gray-300">Need an excuse?</span>'
                  )
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
            }}
         />
      </div>
   );
};

export default HeaderTypingEffect;
