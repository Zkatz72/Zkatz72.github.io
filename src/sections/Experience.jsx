import DesktopProect from "../components/DesktopProject";
import MobileProject from "../components/MobileProject";
import MinorProject from "../components/MinorProject";
import WorkExperience from "../components/WorkExperience";
function Experience(props) {
  return (
    <>
      <div
        id="experience"
        className="mx-4 text-neutral-900 dark:text-neutral-200 scroll-mt-32"
      >
        <h2 className="mt-4 mb-4 text-2xl font-bold">Experience</h2>
        <WorkExperience
          title="Graduate Teaching Assistant"
          location="Irvine, CA"
          company="Donald Bren School of Information & Computer Sciences"
          range="Sept. 2024 - Present"
          long={[
            "Assist in instructing up to 200 students from diverse backgrounds, supporting their development in the field of computer science through assignment design, active contributions to curriculum planning, and daily lab sections.",
            ,
            "Dramatically improved grading efficiency by automating the process with Bash and Python scripts.",
            "Delivered a guest lecture on networking and multithreading using Python’s socket and threading libraries.",
            "Increased student engagement by holding a technical interviewing workshop for beginner software engineers.",
            "Received positive evaluations from students for effective communication, support, and engagement in the course.",
          ]}
        ></WorkExperience>

        <WorkExperience
          title="Undergraduate Research Assistant"
          company="University of California - Irvine"
          location="Irvine, CA"
          range="Oct. 2023 - Mar. 2024"
          long={[
            "Collaborated with Professor Brian Demsky’s research group to explore the software development capabilities of large language models.",
            "Developed AI tools capable of implementing and assessing software using Python and OpenAI API calls.",
            "Collected and organized benchmark documents to evaluate the performance of an AI framework designed to streamline message history creation and parallelize tasks."
        
        ]}
        ></WorkExperience>
      </div>
    </>
  );
}

export default Experience;
