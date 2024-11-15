// script.js

document.querySelectorAll(".offer-box").forEach((box) => {
    box.addEventListener("click", () => {
      document.querySelectorAll(".offer-box").forEach((b) => b.classList.remove("active"));
      box.classList.add("active");
    });
  });
  