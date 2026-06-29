import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ src, link, h3, p, description, index }) {
  return (
    <a className={styles.card} href={link} target="_blank" rel="noreferrer">
      <div className={styles.imageWrap}>
        <img className={styles.image} src={src} alt={`${h3} logo`} />
      </div>
      <div className={styles.body}>
        {typeof index !== "undefined" && (
          <span className={styles.index}>
            {String(index).padStart(2, "0")}
          </span>
        )}
        <h3 className={styles.title}>{h3}</h3>
        <p className={styles.tagline}>{p}</p>
        <p className={styles.projectDescription}>{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
