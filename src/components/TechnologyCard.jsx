function TechnologyCard({ tech }) {
  return (
    <div className="tech-card">
      <img src={tech.icon} alt={tech.name} />

      <h3>{tech.name}</h3>

      <p>{tech.description}</p>

      <span>{tech.category}</span>

      <span>{tech.difficulty}</span>

      <p>⭐ {tech.rating}</p>

      <button>Add to Stack</button>
    </div>
  );
}

export default TechnologyCard;