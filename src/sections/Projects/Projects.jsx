import styles from "./ProjectsStyles.module.css";
import amzn from "../../assets/amzn.png";
import gungame from "../../assets/gungame.png";
import todl from "../../assets/todl.png";
import wapp from "../../assets/wapp.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Personal Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={gungame}
          link="https://sar1911.itch.io/gun-game"
          h3="Gun Game"
          p="Made with Unity Engine"
        />
        <ProjectCard
          src={amzn}
          link="https://sarth-amz.netlify.app"
          h3="Amazon Website"
          p="Frontend clone"
        />
        <ProjectCard
          src={todl}
          link="https://sarth-todo.netlify.app"
          h3="To-Do List"
          p="Autosaves data"
        />
        <ProjectCard
          src={wapp}
          link="https://sarth-weather.netlify.app"
          h3="Weather App"
          p="Real time weather"
        />
      </div>
    </section>
  );
}

export default Projects;
