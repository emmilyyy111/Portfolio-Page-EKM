export default function SkillsList ({skills, title}) {

    return (
        <div className="skills-list">
            <h2>{title}</h2>
            {skills.map(skill => (
                <div className="skill-details" key={skill.id}>
                <h2>{skill.title}</h2>
                </div>
            ))}
        </div>
    )
}