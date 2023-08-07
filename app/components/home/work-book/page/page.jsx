'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css';

function Page(props) {
    // main page
    const [mainZIndex, setMainZIndex] = useState(props.currentPage === props.pagenum ? 3 : props.pagenum === props.nextPage ? 2 : 0)
    const [degrees, setDegrees] = useState("rotateY(0deg)")

    const TurnPage = () => {
        //set next main pages
        props.setCurrentPage(props.currentPage + 1)
        props.setNextPage(props.nextPage + 1)

        //Animetion
        setDegrees("rotateY(180deg")

    }

    useEffect(() => {
        setMainZIndex(props.currentPage === props.pagenum ? 3 : props.pagenum === props.nextPage ? 2 : 0)
    }, [props.currentPage])



    const backAnimation = () => {
        // ser back page
        props.setCurrentPage(props.currentPage - 1)
        props.setNextPage(props.nextPage - 1)

        // animation
        setDegrees("rotateY(0deg")

    }

    return (
        <div className={styles.page} style={{ transform: degrees, zIndex: mainZIndex }}>
            <div className={styles.sideone} >

                <button onClick={() => { TurnPage() }} className={styles.next}>Next</button>
            </div>

            <div className={styles.sidetwo}>

                <button onClick={() => backAnimation()} className={styles.next}>back</button>
            </div>

        </div>
    )
}
export default Page;