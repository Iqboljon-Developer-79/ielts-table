const addBtn = document.querySelector(".addBtn");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const addressInput = document.querySelector("#address");
const score = document.querySelector("#score");
const submit = document.querySelector(".submit");
const closeBtn = document.querySelector(".closeBtn");
const createModal = document.querySelector(".create");
const table = document.querySelector(".table-body");
const form = document.querySelector("form");
const clearAll = document.querySelector(".clearAll");
const data = JSON.parse(localStorage.getItem("datas")) || [];

console.log(addBtn);
addBtn.addEventListener("click", () => {
  console.log(1);
});

clearAll.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

if (data) {
  data.forEach((item, idx) => {
    const tr = document.createElement("tr");
    tr.classList.add("table");
    tr.innerHTML = `
        <td>${idx + 1}</td>
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.address}</td>
        <td>${item.score}</td>
    `;

    table.append(tr);
  });
}

addBtn.addEventListener("click", hideShowModal);
closeBtn.addEventListener("click", hideShowModal);

let counter = JSON.parse(localStorage.getItem("counter")) || 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tr = document.createElement("tr");
  tr.classList.add("table");
  tr.innerHTML = `
          <td>${(counter += 1)}</td>
          <td>${nameInput.value}</td>
          <td>${surnameInput.value}</td>
          <td>${addressInput.value}</td>
          <td>${score.value}</td>

  `;

  data.push({
    name: nameInput.value,
    surname: surnameInput.value,
    address: addressInput.value,
    score: score.value,
  });

  localStorage.setItem("datas", JSON.stringify(data));
  localStorage.setItem("counter", JSON.stringify(counter));
  table.append(tr);
  hideShowModal();
});

function hideShowModal() {
  createModal.classList.toggle("active");
}
