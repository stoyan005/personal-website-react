"use client";
import styles from "./headerStyles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const header = useRef(null);
  const logo = useRef(null);

  useEffect(() => {
    if (!pathname) return;
    if (header.current == null) return;
    if (logo.current == null) return;

    header.current.classList.remove(styles.header);
    logo.current.classList.remove(styles.logoHeader);

    setTimeout(() => {
      header.current.classList.add(styles.header);
      logo.current.classList.add(styles.logoHeader);
    }, 1);
  }, [pathname, header, logo]);

  return (
    <header ref={header} className={styles.header}>
      <div ref={logo} className={styles.logoHeader}>
        Stoyan Ivanov.
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="home">Home</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
