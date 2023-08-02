"use client"
import { useEffect, useState } from 'react';
import styles from './index.module.css'
import Page from './page/page';

function WorkBook(){
    const [currentPage , setCurrentPage] = useState(1)
    const [bookOpen, setBookOpen] = useState(false)
    const [openBockStyle, setOpenBockStyle] = useState()
    useEffect(()=>{
    },[currentPage])
    return (
        <div className={styles["book-holder"]} style={openBockStyle}>
            <div className={styles.book}>
                <Page pagenum={1} text="1" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                <Page pagenum={2} text="2" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                <Page pagenum={3} text="3" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                <Page pagenum={4} text="4" currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
}
export default WorkBook;