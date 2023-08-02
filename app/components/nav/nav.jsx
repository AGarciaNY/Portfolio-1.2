import styles from './nav.module.css'
import Activities from './activities/activities';
import Link from 'next/link';
import ContactButton from '../contact/contact';


function Nav(props) {
    return (
        <nav className={styles.nav}>
            <div className={styles.tittle}>
                <p>Aldair is</p>
                <Activities />
            </div>
            <div>

                {props.pageName !== "landing page" ?
                    (<div className={styles["navigation-list"]}>
                        <Link href="/home">Home</Link>
                        <Link href="/art">Art</Link>
                        <Link href="/Journey">Journey</Link>
                        <ContactButton />
                    </div>)
                    :
                    (
                        <p></p>
                    )
                }

            </div>
        </nav>
    )
}
export default Nav;