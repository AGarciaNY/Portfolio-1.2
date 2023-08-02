import data from "./data";
import SkillFactoryBox from "./skill-factory";
import styles from './index.module.css'
function ProgramingSkills(){

    const skills = data?.map((category, i)=> { return <SkillFactoryBox key={`category${i}`} images={category.images} text={category.text} tools={category.tools} setbackgroundColor={category.setbackgroundColor}/>});
    return (
        <div className={styles["skills-holder"]}>
            {skills}
        </div>
    )
}
export default ProgramingSkills;