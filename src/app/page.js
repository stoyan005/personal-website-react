import Image from "next/image";
import styles from "./page.module.css";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { SocialIcon } from "./_components/socialIcons";
import { Typewriter } from "./_components/typewriter";

export default function Home() {
  return (
    <>
      <section className={styles.container1}>
        <div className={styles.leftSide}>
          <div className={styles.intro}>
            <p>Hi, my name is...</p>
            <h1>Stoyan Ivanov (Стоян Иванов)</h1>
            <h2>Upcoming Web Developer / Front-End Developer</h2>
          </div>
          <div className={styles.iconsSocial}>
            <SocialIcon
              href="https://github.com/stoyan005"
              icon={<GithubIcon size={40}></GithubIcon>}
            />

            <SocialIcon
              href="https://www.linkedin.com/in/stoyan-ivanov-198979298/"
              icon={<LinkedinIcon size={40}></LinkedinIcon>}
            />

            <SocialIcon href="#" icon={<MailIcon size={40}></MailIcon>} />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.uni}>
            <p>University Student at...</p>
            <h1>University of Westminster</h1>
            <h2>Computer Science Bachelor of Science (BSc Hons)</h2>
            <p>
              <Typewriter words={["HTML & CSS", "Javascript", "Python"]} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
