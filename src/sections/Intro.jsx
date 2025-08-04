import LinkedInIcon from "../icons/LinkedInIcon";
import { Linkedin, Mail, Github, FileText} from "lucide-react";
function Intro() {
  return (
    <>
    <div className="bg-gradient-to-b  text-neutral-900 from-green-400 to-white dark:bg-gradient-to-b dark:from-emerald-800 dark:to-[#121212]">
      <div className="flex mx-auto max-w-6xl items-center flex-row h-screen" >
        <div className = "mx-4">
        <h2 className=" dark:text-neutral-200 font-inter font-bold text-3xl ">
          Graduate Teaching Assistant ~ Aspiring Software Engineer
        </h2>
        <p className=" dark:text-neutral-200 font-inter">
          Hi, I'm Zachary Katz! I’ve been working as a Graduate Teaching Assistant at the University
          of California, Irvine since September 2024, while completing my M.S in
          CS. I work for courses taught by Professor Mohammad Moshirpour.
          <br></br>
          <br></br>Some of my interests include baseball, music, video
          games, movies, and comics.
        </p>
        
        <div className = "flex gap-4">
        <a href="https://www.linkedin.com/in/zachary-katz-681261229/"><div className = "my-4 p-1 flex justify-center items-center rounded-full w-10 h-10 dark:bg-[#1d1d1d] shadow dark:text-neutral-200 bg-neutral-100 transition-transform duration-300 hover:scale-110"><Linkedin ></Linkedin></div>
        </a>
        <a href="https://github.com/Zkatz72"><div className = "my-4 p-1 flex justify-center items-center rounded-full w-10 h-10 dark:bg-[#1d1d1d]   transition-transform duration-300 shadow  dark:text-neutral-200 bg-neutral-100 hover:scale-110"><Github></Github></div></a>
        <a href="mailto:zacharyevankatz@gmail.com"><div className = "my-4 p-1 flex justify-center items-center rounded-full w-10 h-10 dark:bg-[#1d1d1d]  bg-neutral-100 shadow  transition-transform duration-300 hover:scale-110 dark:text-neutral-200"><Mail></Mail></div></a>
        <a href="/files/ZacharyKatzResume.pdf"
  target="_blank"
  rel="noopener noreferrer" ><div className = "my-4 p-1 flex justify-center items-center dark:bg-[#1d1d1d]  rounded-full w-10 h-10  transition-transform duration-300  bg-neutral-100  shadow dark:text-neutral-200 hover:scale-110"><FileText></FileText></div></a>
        
        </div>
        </div>
       </div>
        </div>
    </>
  );
}

export default Intro;
