export default function Experience() {
  return (
    <section id="experiencia" className="journey-section" aria-labelledby="journey-heading">
      <div className="container">
        <div className="journey-topline">
          <h2 id="journey-heading" className="eyebrow">DE ONDE VENHO, PARA ONDE VOU</h2>
          <span className="journey-line" aria-hidden="true" />
        </div>
        <div className="journey-grid">
          <article className="journey-item">
            <p className="journey-label">01 / AGORA</p>
            <h3>Aprendendo na prática.</h3>
            <p>
              Entre a universidade e os projetos pessoais, venho construindo
              minha base em APIs, bancos de dados e arquitetura de software.
              É onde a teoria encontra os problemas de verdade.
            </p>
          </article>
          <article className="journey-item">
            <p className="journey-label">02 / PRÓXIMO PASSO</p>
            <h3>A primeira oportunidade.</h3>
            <p>
              Quero contribuir com uma equipe, aprender com quem já está no
              caminho e levar meus conhecimentos para novos desafios.
              Estou aberto a conversar.
            </p>
            <a className="journey-link" href="#contato">
              Vamos nos conhecer <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
