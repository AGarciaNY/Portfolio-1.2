"use client"
import { useEffect, useState } from 'react';
import styles from './index.module.css'
import Page from './page/page';

function WorkBook() {
    const [currentPage, setCurrentPage] = useState(1)
    const [nextPage, setNextPage] = useState(2)
    const [bookPo, setBookPo] = useState("translateX(0px)")

    useEffect(() => {
        if(currentPage === 5){
            setBookPo("translateX(500px)")
        }else if(currentPage > 1){
            setBookPo("translateX(250px)")
        }else{
            setBookPo("translateX(0px)")
        }
    }, [currentPage])

    return (
        <div className={styles["book-holder"]} style={{ transform: bookPo }}>
            <div style={{ position: "absolute", top: "-40px" }}>
                <div>page num = {currentPage}</div>
                <div>next page num = {nextPage}</div>
            </div>
            <div className={styles.book}>
                <Page pagenum={1} text="1" currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} setNextPage={setNextPage} />
                <Page pagenum={2} text="2" currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} setNextPage={setNextPage} />
                <Page pagenum={3} text="3" currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} setNextPage={setNextPage} />
                <Page pagenum={4} text="4" currentPage={currentPage} setCurrentPage={setCurrentPage} nextPage={nextPage} setNextPage={setNextPage} />
            </div>
        </div>
    )
}
export default WorkBook;