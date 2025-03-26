import React from 'react';
import styles from "./Contact.module.css";

export const Contact = () => {
  return <footer id = "contact" className = {styles.container}>
    <div className = {styles.text}>
        <h2>
            Contact!
        </h2>
        <p>
            Reach out anytime — I'd love to connect!
        </p>
    </div>
    <ul className = {styles.links}>
        <li className = {styles.link}>
            <img src = '/assets/contact/gmail.png' />
        <a href = "mailto:myemail@email.com">
            myemail@email.com
        </a>
        </li>
        <li className = {styles.link}>
            <img src = '/assets/contact/github.png' />
        <a href = "https://github.com/aarav-g-168">
            github.com/aarav-g-168
        </a>
        </li>
        <li className = {styles.link}>
            <img src = '/assets/contact/linkedin.png' />
        <a href = "https://www.linkedin.com/in/aarav-gupta-a1120526a/">
            linkedin.com/in/aarav-gupta-a1120526a/
        </a>
        </li>
        <li className = {styles.link}>
            <img src = '/assets/contact/instagram.png' />
        <a href = "https://www.instagram.com/aarav_g_168/">
        instagram.com/aarav_g_168/
        </a>
        </li>
    </ul>
  </footer>;
};
