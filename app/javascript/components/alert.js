const alert = () => {
  let alertSoon = document.querySelector(".alertSoon");

  alertSoon.addEventListener("click", (e) => {
    e.preventDefault();
    window.alert(
      "Le projet est en cours 🏗. Le lien vers le site arrive bientôt 🤞"
    );
  });

  let alertCurious = document.querySelector(".alertCurious");

  alertCurious.addEventListener("click", (e) => {
    e.preventDefault();
    window.alert("Moi aussi je suis un curieux 😉");
  });
};

export { alert };
