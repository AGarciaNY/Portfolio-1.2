import styles from './skill-factory.module.css'
function SkillFactoryBox({images, text, tools, setbackgroundColor}){
    const skillImages = images.map((url,i)=>{
        return (
            <img key={`icon-image${i}`} className={styles.icons} src={url}/>
        )
    })
    const quotesList = text.map((string,i)=>{
        return (
            <li key={`text${i}`}>{string}</li>
        )
    })
    return(
        <div className={styles.main} style={{backgroundColor: setbackgroundColor}}>
            <div className={styles['image-holder']}>
                {skillImages}
            </div>
            <ul>
                {quotesList}
            </ul>
        </div>
    )
}

export default SkillFactoryBox;