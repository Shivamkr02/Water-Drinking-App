const smallCupEl = document.querySelectorAll(".small-cup");
const litersEl = document.querySelector(".liters");
const percentageEl = document.querySelector("#percentage");
const remainedEl = document.querySelector("#remained");

smallCupEl.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highlightIndex(index);
    updateBigCup();
  });
});

function highlightIndex(index) {
  if (
    smallCupEl[index].classList.contains("full") &&
    !smallCupEl[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCupEl.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}

function updateBigCup() {
  const fullCupsEl = document.querySelectorAll(".small-cup.full");
  const totalCupsLength = smallCupEl.length;
  const fullCupsLength = fullCupsEl.length;
  console.log(totalCupsLength, fullCupsEl, fullCupsLength);
  if (fullCupsLength === 0) {
    percentageEl.style.visibility = "hidden";
    percentageEl.style.height = 0;
  } else {
    percentageEl.style.visibility = "visible";
    percentageEl.style.height = `${(fullCupsLength / totalCupsLength) * 280}px`;
    percentageEl.innerText = `${(fullCupsLength / totalCupsLength) * 100}%`;
  }

  if (fullCupsLength === totalCupsLength) {
    remainedEl.style.visibility = "hidden";
    remainedEl.style.height = 0;
  } else {
    remainedEl.style.visibility = "visible";
    litersEl.innerText = `${2 - (250 * fullCupsLength) / 1000}L`;
    if (litersEl.innerText == 0.25) {
      remainedEl.style.fontSize = `1.2rem`;
      litersEl.style.fontSize = `1.4rem`;
    }
  }
}

updateBigCup();