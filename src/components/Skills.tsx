import { siteConfig } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="habilidades" className="skills-section" aria-labelledby="skills-heading">
      <div className="container skills-layout">
        <div className="skills-intro">
          <p className="eyebrow">03 / FERRAMENTAS</p>
          <h2 id="skills-heading" className="section-heading">
            Meu repertório<br /><em>em construção.</em>
          </h2>
          <p className="skills-description">
            Tecnologias que fazem parte dos meus projetos e estudos.
            Cada problema é uma chance de aprender um pouco mais.
          </p>
        </div>

        <div className="skills-list">
          {siteConfig.skills.map((group, index) => (
            <div className="skills-row" key={group.category}>
              <span className="skills-number" aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{group.category}</h3>
                <ul className="skills-items" aria-label={group.category}>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
