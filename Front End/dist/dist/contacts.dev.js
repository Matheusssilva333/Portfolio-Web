"use strict";

// Centralização das informações de contato
// Atualize apenas este objeto para refletir os dados oficiais
var CONTACTS = {
  fullName: "Matheus",
  email: "matheus.dev11@outlook.com",
  linkedin: "https://www.linkedin.com/in/matheus-silva-0b177b333",
  github: "https://github.com/Matheusssilva333"
};

function applyContacts() {
  // Nome completo
  document.querySelectorAll('[data-contact="fullName"], #fullName').forEach(function (el) {
    if (CONTACTS.fullName) el.textContent = CONTACTS.fullName;
  }); // Email (mailto)

  document.querySelectorAll('[data-contact="email"]').forEach(function (el) {
    if (CONTACTS.email && el.getAttribute('data-unlinked') !== 'true') {
      var mail = "mailto:".concat(CONTACTS.email);
      el.setAttribute('href', mail);
    }
  }); // LinkedIn

  document.querySelectorAll('[data-contact="linkedin"]').forEach(function (el) {
    if (CONTACTS.linkedin && el.getAttribute('data-unlinked') !== 'true') {
      el.setAttribute('href', CONTACTS.linkedin);
    }
  }); // GitHub

  document.querySelectorAll('[data-contact="github"]').forEach(function (el) {
    if (CONTACTS.github && el.getAttribute('data-unlinked') !== 'true') {
      el.setAttribute('href', CONTACTS.github);
    }
  }); // Suporte opcional a botões "Unlink"

  document.querySelectorAll('[data-unlink]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-unlink'); // valores: email | linkedin | github

      var anchor = document.querySelector("[data-contact=\"".concat(target, "\"]"));

      if (anchor) {
        anchor.removeAttribute('href');
        anchor.setAttribute('data-unlinked', 'true');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', applyContacts);
//# sourceMappingURL=contacts.dev.js.map
