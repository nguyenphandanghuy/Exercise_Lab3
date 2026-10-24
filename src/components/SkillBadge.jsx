
import styles from "./SkillBadge.module.css";

function SkillBadge({ skill }) {
  return <span className={styles.badge}>{skill}</span>;
}

export default SkillBadge;
