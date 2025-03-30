import React from 'react';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
