import styles from "./socialIcons.module.css";

export function SocialIcon({ href, icon }) {
  return (
    <div className={styles.icons}>
      <a href={href}>
        <span>{icon}</span>
      </a>
    </div>
  );
}
