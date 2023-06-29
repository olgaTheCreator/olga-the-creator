import { WatchTogetherTextComponent } from "./WatchTogetherTextComponent";
import { WatchTogetherImageComponent } from "./WatchTogetherImageComponent";
import { BreazyImageComponent } from "./BreazyImageComponent";
import { BreazyTextComponent } from "./BreazyTextComponent";

const Portfolio = () => {
  return (
    <div className="w-full bg-red_bright font-roboto font-medium h-max min-h-screen border-x-4 border-b-4 border-black flex-col items-center flex py-16 px-8">
      <div className="flex flex-col w-full justify-between gap-10 divide-y-4 divide-black divide-dotted">
        <div className="flex justify-start">
          <WatchTogetherTextComponent />
          <WatchTogetherImageComponent />
        </div>
        <div className="flex justify-start pt-10">
          <BreazyImageComponent />
          <BreazyTextComponent />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
