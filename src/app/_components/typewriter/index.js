"use client";
import { useRef, useEffect, useState } from "react";
import styles from "../../page.module.css";

export function Typewriter({ words }) {
  const spanElement = useRef(null);

  useEffect(() => {
    if (spanElement.current == null) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let el = spanElement.current;

    function type() {
      const currentWord = words[wordIndex];
      el.textContent = currentWord.slice(0, charIndex);

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
      }
    }

    type();
  }, [spanElement]);

  return <span ref={spanElement} className={styles.languages}></span>;
}
