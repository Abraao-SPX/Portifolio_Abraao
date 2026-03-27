(function () {
  // Aguardar um pouco para garantir que placeholders.js foi carregado
  function inicializarPortfolio() {
    const data = window.portfolioData;

    if (!data || !data.profile) {
      console.error("⚠️ portfolioData não encontrado. Tentando novamente...");
      setTimeout(inicializarPortfolio, 100);
      return;
    }

    console.log("✓ Dados carregados:", data.profile.fullName);

    const byId = (id) => document.getElementById(id);
    const setText = (id, value) => {
      const element = byId(id);
      if (element) {
        element.textContent = value;
        console.log(`✓ ${id}: ${value}`);
      } else {
        console.warn(`⚠️ Elemento ${id} não encontrado`);
      }
    };

    // Renderiza os dados editaveis centralizados em placeholders.js.
    setText("brandInitials", data.profile.initials);
    setText("heroTag", data.profile.role);
    setText("heroTitle", data.profile.fullName);
    setText("heroDescription", data.profile.summary);
    setText("quickCity", data.profile.city);
    setText("quickExperience", data.profile.experience);
    setText("quickSpecialty", data.profile.specialty);
    setText("quickAvailability", data.profile.availability);
    setText("aboutText", data.profile.about);
    setText("contactPitch", data.profile.contactPitch);

    document.title = "Portfolio | " + data.profile.fullName;
    setText("footerName", data.profile.fullName);
    setText("year", String(new Date().getFullYear()));

    // Renderizar links sociais
    const socialList = byId("heroSocialLinks");
    if (socialList) {
      socialList.innerHTML = data.socialLinks
        .map((item) => '<li><a href="' + item.url + '" target="_blank" rel="noreferrer">' + item.label + "</a></li>")
        .join("");
      console.log("✓ Links sociais renderizados:", data.socialLinks.length);
    }

    // Renderizar projetos
    const projectsGrid = byId("projectsGrid");
    if (projectsGrid) {
      projectsGrid.innerHTML = data.projects
        .map(
          (project) =>
            '<article class="project-card reveal">' +
            "<h3>" + (project.title || "") + "</h3>" +
            (project.description ? "<p>" + project.description + "</p>" : "<p>Descrição curta do projeto em andamento ou finalizado...</p>") +
            (project.stack ? '<div class="project-stack" style="font-size: 0.8rem; color: var(--primary); margin-bottom: 1rem;">' + project.stack + '</div>' : '') +
            '<div class="project-links">' +
            (project.demoUrl !== "#" ? '<a href="' + project.demoUrl + '" target="_blank" rel="noreferrer">Demo</a>' : "") +
            (project.repoUrl !== "#" ? '<a href="' + project.repoUrl + '" target="_blank" rel="noreferrer">Código</a>' : "") +
            "</div>" +
            "</article>"
        )
        .join("");
      console.log("✓ Projetos renderizados:", data.projects.length);
    }

    // Renderizar habilidades
    const skillsGrid = byId("skillsGrid");
    if (skillsGrid) {
      skillsGrid.innerHTML = data.skills
        .map((skill) => '<div class="skill-card reveal">' + skill + "</div>")
        .join("");
      console.log("✓ Habilidades renderizadas:", data.skills.length);
    }

    // Renderizar contato
    const contactList = byId("contactList");
    if (contactList) {
      const infoList = [];
      if (data.profile.email) infoList.push(
        '<li class="contact-item">' +
        '<div class="contact-icon-wrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>' +
        '<div class="contact-details"><strong>Email</strong> <span>' + data.profile.email + '</span></div>' +
        '</li>'
      );
      if (data.profile.phone) infoList.push(
        '<li class="contact-item">' +
        '<div class="contact-icon-wrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>' +
        '<div class="contact-details"><strong>Telefone</strong> <span>' + data.profile.phone + '</span></div>' +
        '</li>'
      );
      if (data.profile.location) infoList.push(
        '<li class="contact-item">' +
        '<div class="contact-icon-wrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>' +
        '<div class="contact-details"><strong>Localização</strong> <span>' + data.profile.location + '</span></div>' +
        '</li>'
      );
      
      contactList.innerHTML = infoList.join("");
      console.log("✓ Informações de contato renderizadas");
    }

    // Renderizar links rápidos de contato
    const contactSocialLinks = byId("contactSocialLinks");
    if (contactSocialLinks && Array.isArray(data.socialLinks)) {
      const quickLinks = data.socialLinks.filter(function (item) {
        const label = (item.label || "").toLowerCase();
        return label.includes("github") || label.includes("linkedin");
      });

      const linksToRender = quickLinks.length > 0 ? quickLinks : data.socialLinks;
      contactSocialLinks.innerHTML = linksToRender
        .map(function (item) {
          return '<a href="' + item.url + '" target="_blank" rel="noreferrer">' + item.label + "</a>";
        })
        .join("");
      console.log("✓ Links de contato rápidos renderizados");
    }

    // Menu mobile
    const menuToggle = byId("menuToggle");
    const mainNav = byId("mainNav");

    if (menuToggle && mainNav) {
      menuToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          mainNav.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    if (window.portfolioAnimations && typeof window.portfolioAnimations.refresh === "function") {
      window.portfolioAnimations.refresh();
    }

    console.log("✓ Portfolio inicializado com sucesso!");
  }

  // Iniciar quando documento estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarPortfolio);
  } else {
    inicializarPortfolio();
  }
})();
