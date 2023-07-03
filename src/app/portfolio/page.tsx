import { WatchTogetherTextComponent } from "./WatchTogetherTextComponent";
import { WatchTogetherImageComponent } from "./WatchTogetherImageComponent";
import { BreazyImageComponent } from "./BreazyImageComponent";
import { BreazyTextComponent } from "./BreazyTextComponent";

const Portfolio = () => {
  return (
    <div className="w-full bg-red_bright font-roboto font-medium h-max min-h-screen border-x-4 border-b-4 border-black flex-col items-center flex py-6 px-4 lg:py-16 lg:px-8">
      <div className="flex flex-col w-full justify-between gap-10 divide-y-4 divide-black divide-dotted">
        <div className="flex flex-col md:flex-row justify-start gap-6 md:gap-10">
          <WatchTogetherTextComponent />
          <WatchTogetherImageComponent />
        </div>
        <div className="flex flex-col lg:flex-row justify-start pt-10 gap-10">
          <BreazyImageComponent />
          <BreazyTextComponent />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
