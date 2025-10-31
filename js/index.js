(function () {
  const btn = document.getElementById("menuBtn");
  const aside = document.getElementById("sidebar");
  const main = document.getElementById("main");
  const body = document.body;
  if (!btn || !aside || !main) return;

  btn.addEventListener("click", function () {
    aside.classList.toggle("flex!");
    main.classList.toggle("lg:ml-56");
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
  });
  if (
    aside.classList.contains("flex!") &&
    main.classList.contains("lg:ml-56")
  ) {
    body.addEventListener("click", function (event) {
      aside.classList.remove("flex!");
      main.classList.remove("lg:ml-56");
    });
  }
})();
