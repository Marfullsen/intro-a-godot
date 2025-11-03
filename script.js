document.addEventListener("DOMContentLoaded", function () {
  const collapsibles = document.querySelectorAll(
    ".collapsible, .nav-collapsible"
  );

  collapsibles.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

function copyCode(btn) {
  const code = btn.nextElementSibling.textContent;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      btn.querySelector("svg").style.opacity = "0.6";
      btn.lastChild.textContent = "¡Copiado!";
      setTimeout(() => {
        btn.querySelector("svg").style.opacity = "1";
        btn.lastChild.textContent = "Copiar";
      }, 1500);
    })
    .catch((err) => console.error("Copy failed", err));
}
