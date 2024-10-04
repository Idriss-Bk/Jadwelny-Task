import styles from '../page.module.css';

export default function About() {
  return (
    <div className={styles.containerAbout}>
      <div className={styles.bioCard}>
        <h1>Biography</h1>
        <p>
          Hi, I&#39;m IDRISS BOUKDIR, a full-stack developer passionate about creating seamless digital experiences. Since starting my coding journey in 2020, I&#39;ve worked on various projects, from personal websites to complex web applications. I specialize in building responsive, user-friendly interfaces and scalable server-side systems. Always eager to connect and explore new opportunities in web development, feel free to check out my projects and reach out if you&#39;d like to collaborate.
        </p>
      </div>

      <div className={styles.skillsCard}>
        <h1>Skills</h1>
        <ul className={styles.list}>
          {['Javascript', 'Typescript', 'React.js', 'Next.js', 'Css', 'Bootstrap', 'Tailwind Css', 'Flutter', 'MySQL', 'MongoDB', 'Git', 'Github', 'WordPress'].map((skill, index) => (
            <li key={index} className={styles.listItem}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Experience</h1>
        <div className={styles.experienceCard}>
          <h3>Freelance Web Developer</h3>
          <p>Jul 2024 – Present</p>
          <ul>
            <li>Increased user engagement by 25% through custom Next.js and React.js apps</li>
            <li>Improved mobile compatibility with Tailwind CSS, boosting accessibility</li>
            <li>Managed Mongo DB backend, ensuring 99.9% uptime</li>
            <li>Delivered tailored web solutions with a 95% client satisfaction rate</li>
          </ul>
        </div>

        <div className={styles.experienceCard}>
          <h3>Intern - Junior Full-Stack Developer</h3>
          <p>Aug 2023 – May 2024</p>
          <p>Menara Technologies Bilgisaier, Marrakech, Morocco</p>
          <ul>
            <li>Contributed to 10+ websites, raising client satisfaction by 30%</li>
            <li>Enhanced mobile performance by 20% using SCSS and Tailwind CSS</li>
            <li>Developed dynamic UIs with React.js and Next.js</li>
            <li>Applied industry best practices and used Git for version control</li>
          </ul>
        </div>
      </div>

      <div>
        <h1>Education & Certifications</h1>
        <div className={styles.educationCard}>
          <h3>Bachelor&#39;s Degree</h3>
          <p>Computer Development - Oct 2021 / Jul 2024</p>
          <p>School ISGA, Fes, Morocco</p>
        </div>

        <div className={styles.educationCard}>
          <h3>Vocational School Diploma</h3>
          <p>Computer Development - Oct 2021 / Jul 2023</p>
          <p>School Racine, Marrakech, Morocco</p>
        </div>
      </div>
    </div>
  );
}
