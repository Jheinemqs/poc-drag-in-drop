const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));

  // this = card
  this.classList.add("is-dragging");
}

function drag() {}

function dragend() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));

  // this = card
  this.classList.remove("is-dragging");
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {}

function dragover() {
  // this = dropzone
  this.classList.add("over");

  const cardArrastado = document.querySelector(".is-dragging");

  // this = dropzone
  this.appendChild(cardArrastado);
}

function dragleave() {
  // this = dropzone
  this.classList.remove("over");
}

function drop() {
  this.classList.remove("over");
}
