const btn_click = document.getElementById("Btn_modal");
const btn_active = document.getElementById("btn_active");
const btn_cancel = document.getElementById("btn_cancel");
const btn_cross = document.getElementById("deleted");

btn_click.addEventListener("click", () => {
  btn_active.classList.toggle("is-active");
});

btn_cross.addEventListener("click", () => {
  btn_active.classList.toggle("is-active");
});
btn_cancel.addEventListener("click", () => {
  btn_active.classList.toggle("is-active");
});

const btn_disc = document.getElementById("btn_disc");
const mdl_bck = document.getElementById("mdl_bck");
const mdl_disc = document.getElementById("modal-disc");

btn_disc.addEventListener("click", () => {
  mdl_disc.classList.toggle("is-active");
});
mdl_bck.addEventListener("click", () => {
  mdl_disc.classList.toggle("is-active");
});
