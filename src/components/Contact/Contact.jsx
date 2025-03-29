import React from 'react';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact!</h2>
        <p>Reach out anytime — I'd love to connect!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:myemail@email.com">
            <img src='/assets/contact/gmail.png' />
          </a>
          <a href="mailto:myemail@email.com">
            guptaaarav987@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/aarav-g-168">
            <img src='/assets/contact/github.png' />
          </a>
          <a href="https://github.com/aarav-g-168">
            github.com/aarav-g-168
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/aarav-gupta-a1120526a/">
            <img src='/assets/contact/linkedin.png' />
          </a>
          <a href="https://www.linkedin.com/in/aarav-gupta-a1120526a/">
            linkedin.com/in/aarav-gupta-a1120526a/
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/aarav_g_168/">
            <img src='/assets/contact/instagram.png' />
          </a>
          <a href="https://www.instagram.com/aarav_g_168/">
            instagram.com/aarav_g_168/
          </a>
        </li>
      </ul>
    </footer>
  );
};
