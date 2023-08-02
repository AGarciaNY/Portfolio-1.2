'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css';

function Page(props){
    // currentPage={currentPage} setCurrentPage
    let [zIndex, setZIndex] = useState(props.currentPage === props.pagenum ? 3: props.currentPage+1 === props.pagenum? 2:0 )

    const [pageStyle, setPageStyle] = useState({zIndex:zIndex})
    const [wasClicked, setWasClicked] = useState(false)
    const playAnimation = () =>{
        setWasClicked( true)
        if(pageStyle){
            props.setCurrentPage(props.currentPage+1)
            setZIndex(-1)
            setPageStyle({transform: "rotateY(180deg) translateX(-250px)", zIndex: 0})
        }
    }
    useEffect(()=>{
        setZIndex(props.currentPage === props.pagenum ? 3 :0 )
        setPageStyle(props.currentPage === props.pagenum || props.currentPage > props.pagenum? {transform: "rotateY(180deg) translateX(-250px)", zIndex: 0}:{zIndex:zIndex})
    },[props.currentPage])

    return(
        <div className={styles.page} style={pageStyle}>
            <h1>{props.text}</h1>
            <button onClick={()=> playAnimation()} className={styles.next}>Next</button>
        </div>
    )
}
export default Page;