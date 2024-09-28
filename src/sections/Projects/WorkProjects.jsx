import styles from "./ProjectsStyles.module.css";
import deweb from "../../assets/deweb.png";
import ProjectCard from "../../common/ProjectCard";

function WorkProjects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Freelance Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={deweb}
          link="https://germanwithritika.com"
          h3="Business Website"
          p="Made with React.js"
        />
      </div>
    </section>
  );
}

export default WorkProjects;
