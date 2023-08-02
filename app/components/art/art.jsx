import styles from './art.module.css'
// import gif from '../../img/project-pics/gif.png'
function Artwork() {
    let gif = "https://placekitten.com/200/300"
    return (
        <div>
            <div>
                art work
                <div className={styles.imagecontaner}>
                    <div>
                        <img src={gif} style={{ width: "200px" }} />
                    </div>
                    <div>
                        <img src={gif} style={{ width: "200px", height: "300px"}} />
                    </div>
                    <div>
                        <img src={gif} style={{ width: "200px" }} />
                    </div>
                    <div>
                        <img src={gif} style={{ width: "200px" }} />
                    </div>
                    <div>
                        <img src={gif} style={{ width: "200px" }} />
                    </div>
                    <div>
                        <img src={gif} style={{ width: "200px" }} />
                    </div>
                    <div>
                        <img src={gif} style={{ width: "200px" }} />
                    </div>
                    <div>
                        <img src={gif} style={{ width: "200px" }} />
                    </div>

                </div>
            </div>
            {/* <div>
                view here
            </div> */}
        </div>
    )
}

export default Artwork;