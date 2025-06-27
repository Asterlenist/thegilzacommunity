document.addEventListener("DOMContentLoaded", () => {
  const downloadButtons = document.querySelectorAll(".btn.download");
  downloadButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("⚠️ Не забудьте: отредактируйте скрипт под себя перед установкой!");
    });
  });
});
