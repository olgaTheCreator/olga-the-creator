import Link from "next/link";
import {
  computerScienceLinks,
  cssAndHtmlLinks,
  frameworksLinks,
  javaScriptLinks,
  resourcesLink,
} from "./resourcesLinks";

interface LearningArea {
  title: string;
  links: resourcesLink[];
}

const learningAreas: LearningArea[] = [
  { title: "COMPUTER SCIENCE", links: computerScienceLinks },
  { title: "CSS and HTML", links: cssAndHtmlLinks },
  { title: "JAVASCRIPT and TYPESCRIPT", links: javaScriptLinks },
  { title: "FRONTEND FRAMEWORKS", links: frameworksLinks },
];

const LearningResources = () => {
  return (
    <>
      <div className="w-full relative bg-blue_bright font-roboto font-medium h-max min-h-screen border-x-4 border-b-4 border-black flex flex-col py-16 px-8 items-center gap-10">
        <h1 className="w-full max-w-screen-xl  text-5xl text-justify">
          For people who want to start or expand their self-taught coding
          journey I recommend visiting pages listed below.
        </h1>
        <h2 className="w-full max-w-screen-xl  text-4xl">
          They all were a source of great{" "}
          <span className="font-bold">knowledge</span> and all of the resources
          are <span className="font-bold">free</span>. * next to a link suggests
          more advanced content.
        </h2>
        <div className="flex gap-8">
          {learningAreas.map((area) => {
            return (
              <div
                key={area.title}
                className="bg-white max-w-md mt-5 p-6 h-max  border-4 border-black border-dashed relative"
              >
                <h1 className="text-3xl font-bold">{area.title}</h1>
                <ul className="mt-4 text-2xl space-y-2  leading-9 font-semibold list-[square] list-inside">
                  {area.links.map((link) => {
                    return (
                      <li key={link.title}>
                        <Link
                          target="_blank"
                          href={link.href}
                          className="underline hover:text-blue_bright"
                        >
                          {link.title}
                        </Link>
                        {link.star}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LearningResources;
