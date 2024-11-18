function generateButtons() {
  let nrOfButtons = document.getElementById("introducedNumber").value;
  let container = document.getElementById("buttonsContainer");
  let randomButton = Math.floor(Math.random() * nrOfButtons);
  container.innerHTML = "";
  for (let i = 0; i < nrOfButtons; ++i) {
    let button = document.createElement("button");
    button.textContent = `Button ${i + 1}`;
    container.appendChild(button);
    button.addEventListener("click", () => {
      if (i == randomButton) {
        alert("Winner");
      } else {
        alert("Loser");
      }
    });
  }
}
