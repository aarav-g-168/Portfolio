import React from 'react';
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: {title, imageSrc, description, skill, demo, source}}) => {
  return (
    <div className = {styles.container}>
        <img src = {imageSrc} alt={title} className={styles.image}/>
        <h3 className = {styles.title}>
            {title}
        </h3>
        <p className = {styles.description}>
            {description}
        </p>
        <ul className = {styles.skills}>{
            skill.map((skill, id) => {
                return (
                <li key = {id} className = {styles.skill}>
                    {skill}
                </li>
                );
            })}
        </ul>
        <div className = {styles.links}>
            <a href = {demo} className = {styles.link}>
                Have a look🚀
            </a>
            <a href = {source}>
                <img src='/assets/contact/repo.png' className = {styles.repo}/>
            </a>
        </div>
    </div>
  );
};
