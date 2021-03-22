function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
var randomNumber = random(1, 10);
var userNumber = prompt("Por favor introduce un numero");
var success = (userNumber == randomNumber);
while(!success){
    userNumber = prompt("no has acertado , vuelve a introducir el numero");
    success = userNumber == randomNumber ;
}
document.write("Enhoarbuena has acertado! el numero era el "+randomNumber);
