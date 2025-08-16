import DesktopProect from "../components/DesktopProject";
import MobileProject from "../components/MobileProject";
import MinorProject from "../components/MinorProject";
import WorkExperience from "../components/WorkExperience";
import { Linkedin, Mail, Github, FileText} from "lucide-react";
import { FaLinkedin, FaLinkedinIn, FaGithub, FaRegEnvelope, FaRegFileAlt} from "react-icons/fa";
function Contact(props) {
  return (
    <>
      <div
        id="contact"
        className=" w-full border-t-1 border-gray-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-200 scroll-mt-32 flex justify-center">
        <div className="max-w-lg w-full  p-4 flex justify-center items-center flex-col">
            <p className = "mt-4 font-inter">zacharyevankatz <i>at</i> gmail <i>dot</i> com</p>
            
            <div className="flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/zachary-katz-681261229/"><div className = "my-2 p-1 flex justify-center items-center rounded-full w-10 h-10 dark:bg-[#1d1d1d] shadow dark:text-neutral-200  transition-transform duration-300 hover:scale-110"><FaLinkedinIn size={20}></FaLinkedinIn></div>
            </a>
            <a href="https://github.com/Zkatz72"><div className = "my-2 p-1 flex justify-center items-center rounded-full w-10 h-10 dark:bg-[#1d1d1d]   transition-transform duration-300 shadow  dark:text-neutral-200  hover:scale-110"><FaGithub size={20}></FaGithub></div></a>
            <a href="mailto:zacharyevankatz@gmail.com"><div className = "my-2 p-1 flex justify-center items-center rounded-full w-10 h-10 dark:bg-[#1d1d1d]   shadow  transition-transform duration-300 hover:scale-110 dark:text-neutral-200"><FaRegEnvelope size={20}></FaRegEnvelope></div></a>
            <a href=""><div className = "my-2 p-1 flex justify-center items-center dark:bg-[#1d1d1d]  rounded-full w-10 h-10  transition-transform duration-300    shadow dark:text-neutral-200 hover:scale-110"><FaRegFileAlt size={20}></FaRegFileAlt></div></a>
            </div>
        </div>
        
       </div> 
    </>
  );
}

export default Contact;
