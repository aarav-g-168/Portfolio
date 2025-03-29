import React from 'react'
import styles from "./Hero.module.css";

export default function Hero() {
  return <section className = {styles.container}>
    <div className = {styles.content}>
        <h1 className = {styles.title}>
            Hey! I'm Aarav
        </h1>
        <p className = {styles.description}>
            I am a full-stack developer with 1 year of experience using React and NodeJS. Reach out if you want to learn more!!
        </p>
        <a href="#contact" className = {styles.contactBtn}>
            Get In Touch
        </a>
    </div>
        <img src='/assets/hero/Hero.png' className = {styles.heroImg}/>
        <div className = {styles.topBlur}/>
        <div className = {styles.bottomBlur}/>
  </section>
}
