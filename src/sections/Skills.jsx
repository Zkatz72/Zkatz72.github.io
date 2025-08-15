import DesktopProect from "../components/DesktopProject";
import MobileProject from "../components/MobileProject";
import MinorProject from "../components/MinorProject";
import SkillRating from "../components/SkillRating";
const languages = [{skill: 'Python', icon:'python', rating:5, icon2:'python'}, {skill: 'Java', icon:'java', rating:4.5, icon2:'java-sol'}, {skill: 'JavaScript', icon:'javascript', rating:4, icon2:'javascript-sol'}, {skill: 'TypeScript', icon:'typescript', rating:3},{skill: 'C++', icon:'cpp', rating:3.5}, {skill: 'C', icon:'c', rating:4}, {skill: 'SQL', icon:'sql', rating:3}, {skill: 'C#', icon:'csharp', rating:3}, {skill: 'Bash', icon:'bash2', rating:3},]

const tools = [{skill: 'MongoDB', icon:'mongodb', rating:3}, {skill: 'MySQL', icon:'mysql', rating:3}, {skill: 'Vim', icon:'vim', rating:3}, {skill: 'Git', icon:'git', rating:3}, {skill: 'Linux', icon:'linux', rating:3}]
const libs = [{skill: 'React.js', icon:'react', rating:3}, {skill: 'Express.js', icon:'express', rating:3}, {skill: 'Node.js', icon:'node', rating:3}, {skill: 'Pandas', icon:'pandas', rating:3}, {skill: 'Numpy', icon:'numpy', rating:3}, {skill: 'Flask', icon:'flask', rating:3}, {skill: 'Pytorch', icon:'pytorch', rating:3}, {skill: 'SKLearn', icon:'scikit', rating:3}, {skill: 'Firebase', icon:'firebase', rating:3}]


const libs2 = ['react', 'express', 'node', 'pandas', 'numpy', 'flask', 'scikit', 'pytorch', 'firebase']
function Skills(props) {


  return (
    <>
      <section id="skills" className="mx-4 mb-8 text-neutral-900  dark:text-neutral-200 font-inter">
        <div id="languages" className="scroll-mt-32 mb-8">
          <h2 className="mt-4 mb-4 text-2xl font-bold ">Languages</h2>
          <div className="px-4 w-full ">
          <div className="grid lg:grid-cols-7 mx-auto md:grid-cols-6 sm:grid-cols-4 justify-items-center grid-cols-3  xs:g gap-10">
            
            {([...languages]).map((item)=>(
           <div className="flex justify-center items-center  flex-col rounded-xl dark:bg-[#1d1d1d] border-1 shadow border-gray-200 dark:border-neutral-800 p-6 w-24 h-24 ">
                <img src={`icons/${item.icon}.svg`} alt="React logo" className="dark:invert w-16  h-16 opacity-100 " />
                <p className="mt-2 ">{item.skill}</p>
                
            </div>))
            }
          </div>
          </div>

        </div>
        <div id="libraries" className="mb-8">
          <h2 className="mt-4 mb-4 text-2xl font-bold">Libraries/Frameworks</h2>
          <div className="px-4 w-full">
          <div className="grid lg:grid-cols-7 mx-auto md:grid-cols-6 sm:grid-cols-4 justify-items-center grid-cols-3  xs:g gap-10">
            
            {libs.map((item)=>(
            <div className="flex justify-center items-center  flex-col rounded-xl dark:bg-[#1d1d1d] border-1 shadow border-gray-200 dark:border-neutral-800 p-6 w-24 h-24 ">
               <img src={`icons/${item.icon}.svg`} alt="React logo" className="dark:invert w-16  h-16 opacity-100 " /> <p className="mt-2">{item.skill}</p>
            </div>))
            }
          </div>
          </div>

        </div>
        <div id="tools" className="mb-12">
          <h2 className="mt-4 mb-4 text-2xl font-bold">Developer Tools</h2>
          <div className="px-4 w-full">
          <div className="grid lg:grid-cols-7 mx-auto md:grid-cols-6 sm:grid-cols-4 justify-items-center grid-cols-3  xs:g gap-10">
            
            {tools.map((item)=>(
           <div className="flex justify-center items-center  flex-col rounded-xl dark:bg-[#1d1d1d] border-1 shadow border-gray-200 dark:border-neutral-800 p-6 w-24 h-24 ">
                <img src={`icons/${item.icon}.svg`} alt="React logo" className="dark:invert w-16  h-16 opacity-100 " />
                <p className="mt-2">{item.skill}</p>
            </div>))
            }
          </div>
          </div>

        </div>
        
        
      </section>
    </>
  );
}

export default Skills;
