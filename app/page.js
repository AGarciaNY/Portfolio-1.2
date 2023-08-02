import Image from 'next/image'
import styles from './page.module.css'

import LandingContent from "./components/landing/index_body";
import NavHere from "./components/nav/nav";

export default function Home() {
  return (
    <main className="test">
      <NavHere
        pageName="landing page"
        />
        <LandingContent/>
    </main>
  )
}
