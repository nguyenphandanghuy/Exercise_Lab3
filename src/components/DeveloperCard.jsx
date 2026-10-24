
import { Fragment } from "react";
import SkillBadge from "./SkillBadge";
import styles from "./DeveloperCard.module.css";

function DeveloperCard({
  developer = {
    name: "Developer",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240",
    bio: "",
    skills: [],
    metrics: {},
  },
}) {
  const {
    name,
    role,
    avatar,
    bio,
    skills = [],
    metrics = {},
  } = developer;

  return (
    <article
      className={styles.card}
      aria-labelledby="dev-heading"
    >
      <header className={styles.content}>
        <img
          className={styles.avatar}
          src={avatar}
          alt={`Portrait of ${name}`}
          width="120"
          height="120"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src =
              "https://placehold.co/120x120?text=Developer";
          }}
        />

        <h2 id="dev-heading" className={styles.name}>
          {name}
        </h2>
        <p className={styles.role}>{role}</p>
        <p className={styles.bio}>{bio}</p>
      </header>

      <dl className={styles.metrics}>
        {Object.entries(metrics).map(([key, value]) => (
          <Fragment key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>

      <ul className={styles.skills} aria-label="Technical skills">
        {skills.map((skill) => (
          <li key={typeof skill === "string" ? skill : skill.id}>
            <SkillBadge
              skill={typeof skill === "string" ? skill : skill.name}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default DeveloperCard;
