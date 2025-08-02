import SkillCard from "./SkillCard2";
import GithubIcon from "../icons/GithubIcon";
import { Github } from "lucide-react";
function MobileProject(props) {
  return (
    <>
      <div class="rounded-xl w-full  max-w-7xl  text-neutral-900 border-gray-200 dark:border-neutral-800 dark:bg-[#1d1d1d] border-1 shadow mb-8 p-4 dark:text-neutral-200">  
        <div id="project" className="flex w-full xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:hidden lg:hidden md:hidden sm:hidden flex justify-center">
          <div className=" w-1/2 max-w-md flex justify-center">
            <img class=" rounded-xl  aspect-9/19 w-4/5 object-cover h-fit max-h-lg shadow" src="zf3.png" />
            
          </div>
          </div>
          <div id="info" className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full flex-col">
            <h2 className="text-2xl xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 mt-4 w-full">
              <b>{props.name}: </b>
              {props.desc}
            </h2>
            <div id="long" className="mt-4 flex flex-col gap-y-2">
            {props.long.map((item, index) => (
            <>
              <p>▹ {item}</p>
              </>
            ))}
        </div>
            <div id="skills" className="w-full flex-wrap gap-x-4 flex">
            {props.skills.map((item, index) => (
            <>
              <SkillCard skill = {item.skill} icon={item.icon}></SkillCard>
              </>
            ))}
            {/*<a href=""><div className = "my-4 p-1 flex justify-center items-center rounded-full w-8 h-8 dark:bg-neutral-600/50 bg-neutral-200 dark:text-neutral-100"><Github/></div></a>
            */}
          </div>
          </div>
          <div className=" flex justify-center w-1/2">
          <div className="hidden xl:flex w-3/4 max-w-sm justify-center lg:flex md:flex sm:flex">
          
            <img class=" rounded-xl aspect-9/19 shadow w-4/5 object-cover h-fit " src="zf3.png" />
          
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileProject;
