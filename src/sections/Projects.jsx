import DesktopProect from "../components/DesktopProject";
import MobileProject from "../components/MobileProject";
import MinorProject from "../components/MinorProject";
function Projects(props) {
  return (
    <>
      <div id="projects" className="mx-4 text-neutral-900 dark:text-neutral-200 scroll-mt-32">
        <h2 className="mt-4 mb-4 text-2xl font-bold">Projects</h2>
        <DesktopProect
          name={"BasePath"}
          desc={"Daily MLB-themed trivia game"}
          long={[
            "Major League Baseball-themed daily web game with a user-friendly and responsive front-end.",
            "Built a pipeline to scrape, transform, and store data for 23,000+ players using Bash and Python scripting.",
            'Designed and integrated a MongoDB database with an Express.js API to efficiently handle queries on player data'
          ]}
          skills = {[{skill: 'React.js', icon:'react'}, , {skill: 'MaterialUI', icon:'matui'}, {skill: 'Python', icon:'python'}, {skill: 'Bash', icon:'bash2'}, {skill: 'MongoDB', icon:'mongodb'}]}

          
          img = { "basepath-day.png"}
        ></DesktopProect>
        <MobileProject name={"ZotFitness"} desc={"Fitness App"} long = {["Led a team of software engineers to create a mobile app that allows users to chronicle their workout plans, meals, and sleep schedule while receiving personalized recommendations.",

            "Developed a cross-platform mobile front-end using React Native, integrating a Firebase cloud storage system.",
            "Constructed a personalized model by interacting with Apple HealthKit to extract various user health metrics."

        ]} skills = {[{skill: 'React Native', icon:'react'}, {skill: 'TypeScript', icon:'typescript'}, {skill: 'Firebase', icon:'firebase'}]}
></MobileProject>
        
      </div>
    </>
  );
}

export default Projects;
