import "./about.css";

export default function About() {
  return (
    <section id="sobre" className="about-section" aria-labelledby="about-heading">
      <div className="container">
        <p className="eyebrow about-eyebrow">02 / UM POUCO SOBRE MIM</p>

        <div className="about-layout">
          <div className="about-title-column">
            <h2 id="about-heading" className="about-heading">
              Curiosidade como<br />
              <em>ponto de partida.</em>
            </h2>
            <span className="about-asterisk" aria-hidden="true">✳</span>
          </div>

          <div className="about-copy">
            <p className="about-intro">Gosto de entender o que acontece por trás da tela.</p>
            <p>
              Sou Abraão, estudante universitário e desenvolvedor de software.
              Meu foco está no back-end com Java e Spring Boot, mas também
              exploro o desenvolvimento mobile com Flutter.
            </p>
            <p>
              Segurança é outro assunto que me prende a atenção. Estudar
              Ethical Hacking me ajuda a olhar para os sistemas por outro
              ângulo e a pensar com mais cuidado no que construo.
            </p>
            <p>
              Aprendo colocando a mão no código: criando projetos, testando
              ideias e voltando para melhorar o que já fiz.
            </p>
            <div className="about-note">
              <span aria-hidden="true" />
              EM FORMAÇÃO. SEMPRE EM CONSTRUÇÃO.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
