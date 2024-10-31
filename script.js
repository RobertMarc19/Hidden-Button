let randomNumber = Math.floor(Math.random() * 3);
let buttons = ["0", "1", "2"];
let buttonsIndex = 0;

function randomWinner() {
    if (buttonsIndex < 3) {
        if (buttons[buttonsIndex] == randomNumber) {
            alert("Winner");
        } else {
            alert("Loser");
        }
    } else {
        alert("Game over! Please reload the page to play again");
    }
    ++buttonsIndex;
}


//Creez 3 butoane
//Generez un numar random in intervalul 0-2 inclusiv
//In functie de numarul generat trebuie sa declar butonul castigator (ex. nr generat 2, al doilea buton este castigator)
//Trebuie sa creez o functie care afiseaza un mesaj in momentul in care utilizatorul da click pe buton -> Castigator, daca butonul apasat de catre user este castigator sau pierzator pentru celelalte doua butoane