
import SkillBadge from "./SkillBadge";
import styles from "./DeveloperCard.module.css";

function DeveloperCard({ developer }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.avatar}
        src={developer.avatar}
        alt={`Portrait of ${developer.name}`}
      />

      <div className={styles.content}>
        <h2 className={styles.name}>{developer.name}</h2>
        <p className={styles.role}>{developer.role}</p>
        <p className={styles.bio}>{developer.bio}</p>

        <div className={styles.skills} aria-label="Technical skills">
          {developer.skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default DeveloperCard;
