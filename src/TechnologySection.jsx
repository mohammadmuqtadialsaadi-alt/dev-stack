import technologies from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";

function TechnologySection() {
  return (
    <section>
      <h2>
        Explore the <span>Technologies</span>
      </h2>

      <div>
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.id}
            tech={tech}
          />
        ))}
      </div>
    </section>
  );
}

export default TechnologySection;