document.addEventListener("DOMContentLoaded", () => {
  const slogan = document.getElementById("slogan");
  const lang = navigator.language || navigator.userLanguage;

  if (lang.startsWith("es")) {
    slogan.textContent = "El vídeo que impulsa tu negocio";
  } else if (lang.startsWith("en")) {
    slogan.textContent = "The video that boosts your business";
  } else {
    slogan.textContent = "La vidéo qui propulse votre entreprise";
  }
});
