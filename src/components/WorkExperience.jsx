//import SkillCard from "./SkillCard";
import GithubIcon from "../icons/GithubIcon";
import { Github } from "lucide-react";
import SkillCard from "./SkillCard2";
function WorkExperience(props) {
  return (
    <>
      <div class="rounded-xl w-full mb-8 h-fit max-w-7xl border-gray-200 dark:border-neutral-800 dark:bg-[#1d1d1d] border-1 shadow p-4 text-neutral-900 dark:text-neutral-200">
        <div className="w-full flex justify-center">
        
        </div>
        <div id="info">
        <div className="flex flex-col">
          <div className="flex justify-between">
          <h2 className="font-inter text-neutral-900 dark:text-neutral-200 mt-2 text-xl">
            <b>{props.title}</b>
            {props.desc}
          </h2>
          <h2 className="hidden sm:flex md:flex lg:flex xl:flex font-inter dark:text-neutral-300 text-neutral-600 mt-2 text-md">
            {props.range}
            {props.desc}
          </h2>
          </div>
          <h2 className="font-inter italic dark:text-neutral-300 text-neutral-600 text-md">
            {props.company}
            {props.desc}
          </h2>
            
          <h2 className="font-inter italic text-neutral-400 text-md">

            {props.location}  <span className="not-italic sm:hidden md:hidden lg:hidden xl:hidden inline-flex ">◆ {props.range}</span>
            {props.desc}
          </h2>
          <div id="long" className="mt-4 flex flex-col gap-y-2">
            
            {props.long.map((item, index) => (
            <>
              <p>▹ {item}</p>
              </>
            ))}
        </div>
        </div>
          
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
