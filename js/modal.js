// modal.js
document.addEventListener("DOMContentLoaded", () => {
  const modal    = document.getElementById("fullscreen-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("close-modal");

  document.querySelectorAll(".fullscreen-trigger").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
