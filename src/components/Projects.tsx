import { ArrowUpRight, Check, Database, Ellipsis, Layers3, LockKeyhole, Plus } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import "./projects.css";

const boardColumns = [
  { title: "A fazer", tasks: [{ title: "Modelar os dados", label: "DATABASE" }, { title: "Documentar a API", label: "DOCS" }] },
  { title: "Em andamento", tasks: [{ title: "Criar endpoints", label: "BACK-END" }] },
  { title: "Concluído", tasks: [{ title: "Estruturar o projeto", label: "SETUP" }, { title: "Definir o fluxo", label: "WORKFLOW" }] },
];

function KanbanPreview() {
  return (
    <div className="project-preview project-preview--kanban">
      <div className="kanban-art" aria-hidden="true">
        <div className="kanban-sidebar">
          <span className="kanban-brand">k.</span>
          <Layers3 size={15} />
          <span className="kanban-sidebar-line" />
          <span className="kanban-sidebar-line" />
          <span className="kanban-sidebar-avatar">A</span>
        </div>
        <div className="kanban-workspace">
          <div className="kanban-breadcrumb">Workspace <span>/</span> Meu projeto <Ellipsis size={16} /></div>
          <div className="kanban-heading"><strong>Uma coisa de cada vez.</strong><span><Plus size={11} /> Nova tarefa</span></div>
          <div className="kanban-view"><Layers3 size={10} /> Quadro <span /> Lista</div>
          <div className="kanban-columns">
            {boardColumns.map((column, index) => (
              <div className="kanban-column" key={column.title}>
                <div className="kanban-column-heading"><i className={`kanban-status kanban-status--${index}`} />{column.title}<Plus size={10} /></div>
                {column.tasks.map((task, taskIndex) => (
                  <div className={`kanban-task ${index === 1 ? "kanban-task--active" : ""}`} key={task.title}>
                    <span className="kanban-task-label">{task.label}</span>
                    <strong>{task.title}</strong>
                    <div className="kanban-task-footer"><span>{index === 2 ? <Check size={10} /> : <span className="kanban-task-line" />}</span><span className="kanban-person">{taskIndex === 0 ? "AP" : "A"}</span></div>
                  </div>
                ))}
                <div className="kanban-add"><Plus size={10} /> Adicionar tarefa</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="project-preview-caption">Visualização conceitual</span>
    </div>
  );
}

function EventsPreview() {
  return (
    <div className="project-preview project-preview--events">
      <div className="event-art" aria-hidden="true">
        <div className="event-topline"><span className="event-signal" /> TRANSACTION FLOW <span>EVENT-DRIVEN</span></div>
        <div className="event-map">
          <svg className="event-connectors" viewBox="0 0 500 210" fill="none" preserveAspectRatio="none">
            <path d="M90 105H210M290 105H343Q355 105 355 93V56Q355 44 367 44H412M355 105V154Q355 166 367 166H412" stroke="#667165" strokeWidth="1" />
            <path className="event-flow" d="M90 105H210M290 105H343Q355 105 355 93V56Q355 44 367 44H412M355 105V154Q355 166 367 166H412" stroke="#d7e6bc" strokeWidth="2" strokeDasharray="5 55" />
            <circle cx="355" cy="105" r="3" fill="#d7e6bc" />
          </svg>
          <div className="event-node event-node--producer"><span className="event-node-icon">↗</span><strong>Producer</strong><small>transactions</small></div>
          <div className="event-node event-node--kafka"><span className="kafka-symbol"><i /><i /><i /><i /></span><strong>Apache Kafka</strong><small>event bus</small></div>
          <div className="event-node event-node--redis"><Database size={20} /><strong>Redis</strong><small>cache</small></div>
          <div className="event-node event-node--mongo"><Database size={20} /><strong>MongoDB</strong><small>persistence</small></div>
        </div>
        <div className="event-bottomline"><span>publish</span><i>→</i><span>consume</span><i>→</i><span>persist</span><span className="event-bottomline-label">CQRS</span></div>
      </div>
      <span className="project-preview-caption">Visualização conceitual</span>
    </div>
  );
}

export default function Projects() {
  const featuredProjects = siteConfig.projects.slice(0, 2);
  const identityProject = siteConfig.projects[2];

  return (
    <section id="projetos" className="projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <div className="projects-section-header">
          <div><p className="eyebrow">01 / Projetos selecionados</p><h2 id="projects-heading" className="section-heading">Código em prática<span>.</span></h2></div>
          <p>Da organização de tarefas ao fluxo de eventos. Um pouco do que venho construindo.</p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <a className="project-preview-link" href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositório de ${project.title} no GitHub (abre em nova aba)`}>
                {index === 0 ? <KanbanPreview /> : <EventsPreview />}
                <span className="project-preview-open" aria-hidden="true"><ArrowUpRight size={21} /></span>
              </a>
              <div className="project-card-meta"><span>{project.id} / {index === 0 ? "APIs & organização" : "Eventos & arquitetura"}</span><span>PROJETO PESSOAL</span></div>
              <div className="project-card-title"><h3>{index === 0 ? "Kanban Task Manager" : project.title}</h3><a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label={`Código de ${project.title} no GitHub (abre em nova aba)`}><ArrowUpRight size={25} /></a></div>
              <p className="project-card-description">{project.description}</p>
              <ul className="project-tech-list" aria-label="Tecnologias utilizadas">{project.techs.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            </article>
          ))}
        </div>

        {identityProject && (
          <article className="project-identity">
            <div className="project-identity-mark" aria-hidden="true"><LockKeyhole size={30} strokeWidth={1.4} /><span>AUTH / 03</span></div>
            <div className="project-identity-content"><span className="project-identity-category">{identityProject.category}</span><h3>{identityProject.title}</h3><p>{identityProject.description}</p></div>
            <div className="project-identity-aside"><span className="project-identity-note">Autenticação. Autorização. Controle.</span><ul className="project-tech-list" aria-label="Tecnologias utilizadas">{identityProject.techs.map((tech) => <li key={tech}>{tech}</li>)}</ul></div>
          </article>
        )}

        <div className="projects-bottom"><span>Mais código, experimentos e aprendizado.</span><a href={siteConfig.personal.socials.github} target="_blank" rel="noopener noreferrer">Explorar meu GitHub <ArrowUpRight size={17} /></a></div>
      </div>
    </section>
  );
}
