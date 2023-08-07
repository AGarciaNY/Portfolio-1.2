'use client'
import { useState } from "react";
import styles from "./contact.module.css"

function ContactButton(props) {
    const [seeConttact, setSeeConttact] = useState("none")
    const [opacity, setOpacity] = useState(0)
    // useEffect(()=>{},[seeConttact])
    const apearInformation = ()=>{
        setOpacity(1)
        // console.log(styles["contact-holder"])
    }
    return (
        <div>
            <button onClick={() => (apearInformation() , setSeeConttact("flex"))} style={props.buttonStyle}> Contact</button>

            <div className={styles["contact-holder"]} style={{ transition:" 5s ease-in-out", display: seeConttact, opacity: opacity}}>
                <div className={styles["background"]}></div>
                <div className={styles["contact-data"]}>
                    <button className={styles.x} onClick={() => setSeeConttact("none")}>x</button>
                    <h1 className={styles.header}>Contact Information</h1>

                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.items}>
                                <td style={{ width: "110px" }}>
                                    <img style={{ borderRadius: "10px" }} src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" />
                                </td>
                                <td>
                                    <p>Aldair Garcia Angon</p>
                                </td>
                            </tr>
                            <tr className={styles.items}>
                                <td>
                                    <img style={{ backgroundColor: "white", borderRadius: "40px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" />
                                </td>
                                <td>
                                    <p>AGarciaNY</p>
                                </td>
                            </tr>
                            <tr className={styles.items}>
                                <td>
                                    <img style={{ backgroundColor: "white", borderRadius: "10px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png" />
                                </td>
                                <td>
                                    <p>aldairgarcia360@gmail.com</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ContactButton;