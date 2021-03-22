var label1 = document.createElement("label");
label1text = document.createTextNode("Introduce un personaje de El Señor de los Anillos");
label1.appendChild(label1text);
document.body.appendChild(label1);

brakeline = document.createElement("br");
document.body.appendChild(brakeline);

var input1 = document.createElement("input");
input1.setAttribute("id","input1");
input1.setAttribute("placeholder", "Gandalf, Frodo, Sam ...");
document.body.appendChild(input1);

var x = document.createElement("BUTTON");
var t = document.createTextNode("Comprobar nombres");
x.appendChild(t);
x.onclick = function() {comprobarNombre()};
document.body.appendChild(x);



function comprobarNombre() {
    var stringName = document.getElementById("input1").value;
    var stringUpperCase = (stringName.toUpperCase())
    var nameList = ["GANDALF", "FRODO", "SAM", "LEGOLAS","ARAGORN"];
    var isInArray = nameList.includes(stringUpperCase);
    if (!isInArray){
        alert("El nombre introducido no se corresponde con ningun personaje de la pelicula");
    }

}
