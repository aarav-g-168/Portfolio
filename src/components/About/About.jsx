import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';

export const About = () => {
  const titleRef = useRef(null);
  const hasTypedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasTypedRef.current) {
          typeWriter("about..");
          hasTypedRef.current = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
  }, []);

  const typeWriter = (textToType) => {  
    const speed = 150;
    let i = 0;

    titleRef.current.innerHTML = '';

    const typingEffect = () => {
      if (titleRef.current && i < textToType.length) {
        titleRef.current.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typingEffect, speed);
      }
    };
    typingEffect();
  };

  return(
    <section className={styles.container} id="about">
      <h2 className={styles.title} ref={titleRef}></h2>
      <div className={styles.content}>
        <img src='/assets/About/About.jpg' className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div>
              <h3>Frontend Developer!</h3>
              <p>
                A passionate Frontend Developer specializing in building beautiful, responsive, and user-friendly web applications. I love working with React, Next.js, and TypeScript to craft seamless user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div>
              <h3>Backend Developer!</h3>
              <p>
                A Backend Developer who loves building robust, scalable, and efficient server-side applications. I focus on writing clean, optimized code to ensure seamless performance and security.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div>
              <h3>Competitive Programmer!</h3>
              <p>
              An enthusiastic and skilled Competitive Programmer driven by the thrill of solving intricate problems and enhancing algorithms. I enjoy conquering tough coding challenges and consistently refining my problem-solving abilities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
