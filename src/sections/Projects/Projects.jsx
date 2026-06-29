import styles from "./ProjectsStyles.module.css";
import deweb from "../../assets/deweb.png";
import fspace from "../../assets/fspace.png";
import amzn from "../../assets/amzn.png";
import todl from "../../assets/todl.png";
import wapp from "../../assets/wapp.png";
import DSC from "../../assets/dsc.png";
import ProjectCard from "../../common/ProjectCard";

const projects = [
  {
    src: fspace,
    link: "https://flowspace-opal.vercel.app",
    h3: "FlowSpace",
    p: "Realtime Workspace",
    description:
      "Realtime workspace web app built using MERN stack with Socket.IO live updates, JWT auth, Zustand state management, and responsive UI.",
  },
  {
    src: deweb,
    link: "https://germanwithritika.com",
    h3: "Business Website",
    p: "React.js",
    description:
      "Business landing page built with React.js featuring responsive design and a clean, modern user interface.",
  },
  {
    src: DSC,
    link: "https://github.com/Sar1911/DualSenseCompanion",
    h3: "DualSense Companion",
    p: "Hardware Utility",
    description:
      "Desktop utility built using C# for emulating PS5 controllers as Xbox controllers with Bluetooth/USB support, controller hiding, and lightbar customization.",
  },
  {
    src: wapp,
    link: "https://sarth-weather.netlify.app",
    h3: "Weather App",
    p: "Real-time weather",
    description:
      "Weather application providing location based forecasts and dynamic weather visuals using OpenWeather API.",
  },
  {
    src: todl,
    link: "https://sarth-todo.netlify.app",
    h3: "To-Do List",
    p: "Productivity Tool",
    description:
      "To-do list application built with JavaScript featuring theme switching and browser based data storage.",
  },
  {
    src: amzn,
    link: "https://sarth-amz.netlify.app",
    h3: "Amazon Website",
    p: "Frontend Clone",
    description: "A high fidelity recreation of the Amazon website UI.",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Personal Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, i) => (
          <ProjectCard key={project.h3} index={i + 1} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
