export function lightDark() {
  const modeBtn = document.getElementById("mode");
  const css = document.getElementById("Sheet");
  const header = document.getElementsByTagName("header")[0];
  let isLightMode = true;

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    isLightMode = storedTheme === "light";
    applyTheme(isLightMode);
  }

  modeBtn.addEventListener("click", () => {
    isLightMode = !isLightMode;
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
    applyTheme(isLightMode);
  });

  function applyTheme(isLightMode) {
    css.href = isLightMode ? "style/css1light.css" : "style/css 1.css";
    header.classList = isLightMode ? "bg-light" : "bg-black";

    const cardDivs = document.querySelectorAll(".movie-card");
    cardDivs.forEach((cardDiv) => {
      cardDiv.classList.toggle("bg-light", isLightMode);
      cardDiv.classList.toggle("bg-dark", !isLightMode);
    });

    const cardBodies = document.querySelectorAll(".card-body");
    cardBodies.forEach((cardBody) => {
      cardBody.classList.toggle("bg-light", isLightMode);
      cardBody.classList.toggle("text-black", isLightMode);
      cardBody.classList.toggle("bg-dark", !isLightMode);
      cardBody.classList.toggle("text-light", !isLightMode);
    });

    const cardDescs = document.querySelectorAll(".card-desc");
    cardDescs.forEach((cardDesc) => {
      cardDesc.classList.toggle("text-black", isLightMode);
      cardDesc.classList.toggle("text-light", !isLightMode);
    });
  }
}
