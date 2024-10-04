import Link from "next/link"
import styles from "../src/app/page.module.css";

export default function Navbar() {
  return (
    <navbar className={styles.navbar}>
    <Link href="/" className={styles.logo}>My App</Link>
    <div className={styles.links}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/data">Blog</Link>
    </div>
  </navbar>
  )
}
