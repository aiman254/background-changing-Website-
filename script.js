let picker = document.getElementById("picker");
let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.onclick = () => document.body.style.backgroundColor = box.dataset.color;
});

picker.oninput = () => document.body.style.backgroundColor = picker.value;