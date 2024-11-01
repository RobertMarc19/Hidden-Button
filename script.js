let randomButton = Math.floor(Math.random() * 3);
let buttonIndex;

document.querySelectorAll("button").forEach((button, buttonIndex) => {
  button.addEventListener("click", () => {
    if (buttonIndex == randomButton) {
      alert("Winner");
    } else {
      alert("Loser");
    }
  });
});
