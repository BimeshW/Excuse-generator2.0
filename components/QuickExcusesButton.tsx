import { Button } from "./ui/button";

const excuses = ["Work", "School", "Relationship", "Friends", "Gym"];

const QuickExcusesButton = ({
   handleButtonClick,
}: {
   handleButtonClick: (excuse: string) => Promise<void>;
}) => {
   return (
      <div className="flex gap-5 flex-wrap justify-center">
         {excuses.map((excuse) => (
            <Button
               key={excuse}
               className="cursor-pointer bg-[#6735FD] hover:bg-[#6735fdd8] min-w-24 rounded-3xl"
               onClick={() => handleButtonClick(excuse)}
            >
               {excuse}
            </Button>
         ))}
      </div>
   );
};

export default QuickExcusesButton;
