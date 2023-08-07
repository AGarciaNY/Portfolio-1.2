'use client'
import { useEffect, useState } from 'react'
import styles from './activities.module.css'

function Activities() {
    let [currentIndex, setCurrentIndex] = useState(0)
    let [nextIndex, setNextIndex] = useState(1)

    const activitiesList = [
        "a Software Engineer",
        "Available for work",
        "a Team Player",
        "an Explorer"
    ].map((text, i) => {
        return <p key={"here" + i} className={currentIndex === i ? styles.disappear : nextIndex === i ? styles.moveup : styles.hide}>{text}</p>
    })

    const playAnimation = () => {
        setCurrentIndex(currentIndex + 1 === activitiesList.length ? 0 : currentIndex + 1)
        setNextIndex(nextIndex + 1 === activitiesList.length ? 0 : nextIndex + 1)
    }
    useEffect(() => {
        setTimeout(() => {
            playAnimation()
        }, 10000)
    }, [currentIndex])



    return (
        <div className={styles.main}>
            {activitiesList}
        </div>
    )
}

export default Activities;