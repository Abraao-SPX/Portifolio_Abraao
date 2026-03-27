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
            "<h3>" + project.title + "</h3>" +
            "<p>" + project.description + "</p>" +
            "<small><strong>Stack:</strong> " + project.stack + "</small>" +
            '<div class="project-links">' +
            '<a href="' + project.demoUrl + '" target="_blank" rel="noreferrer">Demo</a>' +
            '<a href="' + project.repoUrl + '" target="_blank" rel="noreferrer">Codigo</a>' +
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
      if (data.profile.email) infoList.push("<li><strong>Email:</strong> " + data.profile.email + "</li>");
      if (data.profile.phone) infoList.push("<li><strong>Telefone:</strong> " + data.profile.phone + "</li>");
      if (data.profile.location) infoList.push("<li><strong>Localizacao:</strong> " + data.profile.location + "</li>");
      
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
          return '<li><a href="' + item.url + '" target="_blank" rel="noreferrer">' + item.label + "</a></li>";
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

    console.log("✓ Portfolio inicializado com sucesso!");
  }

  // Iniciar quando documento estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarPortfolio);
  } else {
    inicializarPortfolio();
  }
})();
