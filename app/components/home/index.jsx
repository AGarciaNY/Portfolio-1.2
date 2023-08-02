import styles from './index.module.css'
import ProgramingSkills from "./programing-skills";
import WorkBook from './work-book';
function HomeBody(){
    return(
        <div>
            <h1 className={styles.header}>Programing Skills</h1>
            <ProgramingSkills/>
            <WorkBook/>
        </div>
    )
}

export default HomeBody;