import React from 'react';
import styles from './About.module.css';

export const About = () => {
  return(
  <section className = {styles.container} id = "about">
    <h2 className = {styles.title}>
        about..
    </h2>
    <div className = {styles.content}>
        <img src = '/assets/About/About.png' className = {styles.aboutImage}/>
        <ul className = {styles.aboutItems}>
            <li className = {styles.aboutItem}>
                <img src = '/assets/About/Frontend.png' className = {styles.image}/>
                <div>
                    <h3>
                        Frontend Developer!
                    </h3>
                    <p>
                        A passionate Frontend Developer specializing in building beautiful, responsive, and user-friendly web applications. I love working with React, Next.js, and TypeScript to craft seamless user experiences.
                    </p>
                </div>
            </li>
            <li className = {styles.aboutItem}>
                <img src = '/assets/About/Backend.png' className = {styles.image}/>
                <div>
                    <h3>
                        Backend Developer!
                    </h3>
                    <p>
                        A Backend Developer who loves building robust, scalable, and efficient server-side applications. I focus on writing clean, optimized code to ensure seamless performance and security.
                    </p>
                </div>
            </li>
            <li className = {styles.aboutItem}>
                <img src = '/assets/About/Comp.png' className = {styles.image}/>
                <div>
                    <h3>
                        Competitive Programmer!
                    </h3>
                    <p>
                        A passionate Competitive Programmer who thrives on solving complex problems and optimizing algorithms. I love tackling challenging coding contests and continuously improving my problem-solving skills.
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  );
};
