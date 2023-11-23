const header = document.querySelector("header h3"),
  btnPrevNext = document.querySelectorAll(".icons i"),
  days = document.querySelector(".day_number");

const allMonths = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "May",
  "Juin",
  "juillet",
  "Aout",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const updateCalender = () => {
  let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let firstDayOfMonth = new Date(currentYear, currentMonth).getDay();
  let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let lastDayOfMonth = new Date(
    currentYear,
    currentMonth,
    lastDateOfLastMonth
  ).getDay();

  let tagEl = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    tagEl += `<span class="inactive">${lastDateOfLastMonth - i + 1}</span>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    tagEl += `<span class="${isToday}">${i}</span>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    tagEl += `<span class="inactive">${i - lastDayOfMonth + 1}</span>`;
  }

  days.innerHTML = tagEl;

  header.innerText = `${allMonths[currentMonth]} ${currentYear}`;
};

updateCalender();

btnPrevNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.id === "right" ? currentMonth++ : currentMonth--;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentMonth = date.getMonth();
      currentYear = date.getFullYear();
    } else {
      date = new Date();
    }

    updateCalender();
  });
});
