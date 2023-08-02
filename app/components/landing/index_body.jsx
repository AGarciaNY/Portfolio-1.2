import Link from 'next/link';
import styles from './index_body.module.css'
import ContactButton from '../contact/contact';

function LandingContent() {
    return (
        <div className={styles.main}>
            <div className={styles["blur-one"]}></div>
            <div className={styles["blur-two"]}></div>
            <div>
                <h1 style={{fontSize:"50px"}}>I am Full stack Web developer </h1>
                <h3 style={{fontSize:"30px"}}>Currently looking for employment</h3>
                <h2 className={styles.name}>Aldair Garcia Angon</h2>
                <img className={styles.profilepic} src="https://placekitten.com/400/300" />
            </div>
            <div>
                <ContactButton className={styles["contact-me"]}/>
                <Link href="/home" className={styles.home}>lets get started</Link>
            </div>
            
        </div>
    )
}

export default LandingContent;