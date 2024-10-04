import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <p className={styles.description}>
        This application is a simple React/Next.js project designed to
        demonstrate foundational web development skills. It includes a welcoming
        Home Page with a brief introduction and an About Page that provides
        information about the developer. The app utilizes server-side rendering
        (SSR) to fetch and display data dynamically, ensuring fast and efficient
        content delivery. The styling is implemented using CSS modules (or
        styled-components), offering a modular and maintainable approach to
        design. This project highlights the use of modern web development
        practices and techniques
      </p>
    </div>
  );
}
