document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  const successModal = document.getElementById("successModal");
  const errorModal = document.getElementById("errorModal");
  const successClose = document.getElementById("successClose");
  const errorClose = document.getElementById("errorClose");

  const SERVICE_ID = "service_5agekaf";
  const TEMPLATE_ID = "template_55onqp4";
  const PUBLIC_KEY = "gh4AS-5OvV4L6dVtG";

  if (window.emailjs) {
    emailjs.init({
      publicKey: PUBLIC_KEY,
    });
    console.log("EmailJS inicializado com sucesso!");
  } else {
    console.error("EmailJS SDK não foi carregado.");
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      if (!name || !email || !message) {
        if (formNote) {
          formNote.textContent = "Preencha todos os campos.";
        }
        openModal(errorModal);
        return;
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (formNote) {
          formNote.textContent = "Por favor, insira um email válido.";
        }
        openModal(errorModal);
        return;
      }

      if (formNote) {
        formNote.textContent = "Enviando mensagem...";
      }

      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          name: name,
          from_name: name,
          email: email,
          from_email: email,
          reply_to: email,
          message: message
        });

        form.reset();

        if (formNote) {
          formNote.textContent = "";
        }

        openModal(successModal);
      } catch (error) {
        console.error("Erro detalhado ao enviar email:", error);
        
        const errorDesc = document.querySelector("#errorModal p");
        if (errorDesc) {
           errorDesc.textContent = "Erro do EmailJS: " + (error.text || error.message || JSON.stringify(error));
        }

        if (formNote) {
          formNote.textContent = "Não foi possível enviar sua mensagem.";
        }

        openModal(errorModal);
      }
    });
  }

  if (successClose) {
    successClose.addEventListener("click", function () {
      closeModal(successModal);
    });
  }

  if (errorClose) {
    errorClose.addEventListener("click", function () {
      closeModal(errorModal);
    });
  }

  [successModal, errorModal].forEach(function (modal) {
    if (!modal) return;
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal(successModal);
      closeModal(errorModal);
    }
  });
});
