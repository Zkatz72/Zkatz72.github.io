//import SkillCard from "./SkillCard";
import GithubIcon from "../icons/GithubIcon";
import { Github } from "lucide-react";
import SkillCard from "./SkillCard2";
function DesktopProect(props) {
  return (
    <>
      <div class="rounded-xl w-full h-fit mb-8 max-w-7xl border-gray-200 dark:border-neutral-800 dark:bg-[#1d1d1d] border-1 shadow  p-4 text-neutral-900 dark:text-neutral-200">
        <div className="w-full flex justify-center">
        <img
          class=" max-w-3xl w-full  rounded-xl shadow aspect-3/2 object-cover"
          src={props.img}
        />
        </div>
        <div id="info">
            <div className="flex gap-2 items-center">
          <h2 className=" mt-2 text-2xl">
            <b>{props.name}: </b>
            {props.desc}
          </h2>
          <a href="https://zkatz72.github.io/Basepath/">
          <img src={`icons/external.svg`} alt="React logo" className="dark:invert mt-2 w-10  h-10 opacity-100 transition-transform duration-300 hover:scale-110" />
            </a>
        </div>
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
              <SkillCard skill = {item.skill} icon = {item.icon}></SkillCard>
              </>
            ))}
            {/*
            <a href=""><div className="mt-4 shadow dark:bg-neutral-600/50   rounded-xl flex justify-center items-center w-fit h-8 max-w-6xl p-2 gap-1 ">
            
            <Github></Github>
            <span className="opacity-100 dark:text-neutral-100 text-gray-800 flex-nowrap text-xs">Github →</span>
                
            </div></a>*/}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default DesktopProect;
