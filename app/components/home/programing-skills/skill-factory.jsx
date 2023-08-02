import styles from './skill-factory.module.css'
function SkillFactoryBox({ images, text, tools, setbackgroundColor }) {
    const skillImages = images.map((url, i) => {
        return (
            <img key={`icon-image${i}`} className={styles.icons} src={url} />
        )
    })
    const quotesList = text.map((string, i) => {
        return (
            <li key={`text${i}`}>{string}</li>
        )
    })
    const toolsList = tools.map((url, i) => {
        return (
            <img key={`icon-image-tool${i}`} className={styles.icons} src={url} />
        )
    })

    return (
        <div className={styles.main} style={{ backgroundColor: setbackgroundColor }}>
            <div className={styles['image-holder']}>
                {skillImages}
            </div>
            <ul>
                {quotesList}
            </ul>
            <div>
                {toolsList}
            </div>
        </div>
    )
}

export default SkillFactoryBox;