import styles from '../src/app/page.module.css';

export default function Footer() {
  return (
    <div>
         <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Idriss Boukdir. All rights reserved.</p>
       
      </div>
    </footer>
    </div>
  )
}

 