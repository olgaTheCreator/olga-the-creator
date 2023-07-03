import { AboutMeComponent } from "./AboutMeComponent";
import { MySkillsComponent } from "./MySkillsComponent";

const AboutMe = () => {
  return (
    <div className="w-full bg-yellow_bright font-roboto font-medium h-full border-x-4 border-b-4 border-black flex-col items-center flex pb-6 gap-10">
      <AboutMeComponent />
      <MySkillsComponent />
    </div>
  );
};

export default AboutMe;
