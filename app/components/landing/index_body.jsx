import Link from 'next/link';
import styles from './index_body.module.css'
import ContactButton from '../contact/contact';

function LandingContent() {
    const buttonStyle={    
        backgroundColor: "#2BECA9",
        color: "#7C73C0",
        position: "absolute",
        left: "20%",
        bottom: "10%;",
        fontSize: "25px",
        padding: "10px 35px",
        border: "0",
        fontWeight: "600",
        borderRadius: "20px",
    }
    return (
        <div className={styles.main}>
            {/* <div className={styles["blur-one"]}></div>
            <div className={styles["blur-two"]}></div> */}
            <div>
                <div className={styles.header}>
                    <p>HI I’m <b className={styles.boldtext}>Aldair Garcia Angon</b></p>
                    <p>a <b className={styles.boldtext}>Software Engineering</b></p>
                </div>

                <h3 className={styles.subheader}>Currently looking for employment</h3>
                <img className={styles.profilepic} src="https://placekitten.com/400/300" />
            </div>
            <ContactButton buttonStyle={buttonStyle} className={styles.contactme} />
            <Link href="/home" className={styles.home}>lets get started</Link>

        </div>
    )
}

export default LandingContent;