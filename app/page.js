import Image from 'next/image'
import styles from './page.module.css'
'client'
import LandingContent from "./components/landing/index_body";
import NavHere from "./components/nav/nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavHere
        pageName="landing page"
        />
        <LandingContent/>
    </main>
  )
}
