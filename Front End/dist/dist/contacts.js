// Centralização das informações de contato
// Atualize apenas este objeto para refletir os dados oficiais
const CONTACTS = {
  fullName: "Matheus",
  email: "matheus.dev11@outlook.com",
  linkedin: "https://www.linkedin.com/in/matheus-silva-0b177b333",
  github: "https://github.com/Matheusssilva333"
};

function applyContacts() {
  // Nome completo
  document.querySelectorAll('[data-contact="fullName"], #fullName').forEach(el => {
    if (CONTACTS.fullName) el.textContent = CONTACTS.fullName;
  });

  // Email (mailto)
  document.querySelectorAll('[data-contact="email"]').forEach(el => {
    if (CONTACTS.email && el.getAttribute('data-unlinked') !== 'true') {
      const mail = `mailto:${CONTACTS.email}`;
      el.setAttribute('href', mail);
    }
  });

  // LinkedIn
  document.querySelectorAll('[data-contact="linkedin"]').forEach(el => {
    if (CONTACTS.linkedin && el.getAttribute('data-unlinked') !== 'true') {
      el.setAttribute('href', CONTACTS.linkedin);
    }
  });

  // GitHub
  document.querySelectorAll('[data-contact="github"]').forEach(el => {
    if (CONTACTS.github && el.getAttribute('data-unlinked') !== 'true') {
      el.setAttribute('href', CONTACTS.github);
    }
  });

  // Suporte opcional a botões "Unlink"
  document.querySelectorAll('[data-unlink]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-unlink'); // valores: email | linkedin | github
      const anchor = document.querySelector(`[data-contact="${target}"]`);
      if (anchor) {
        anchor.removeAttribute('href');
        anchor.setAttribute('data-unlinked', 'true');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', applyContacts);