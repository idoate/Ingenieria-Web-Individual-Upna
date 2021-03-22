function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
var randomNumber = random(1, 10);
document.write("En ", randomNumber," segundos se abrira una nueva ventana de google")
setTimeout(function(){
    window.open("https://www.google.es");
}, randomNumber*1000);