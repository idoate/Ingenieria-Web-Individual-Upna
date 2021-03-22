var counter = [0,0,0];
var lastObject = ["Mostrar contenidos","Mostrar contenidos","Mostrar contenidos"];
label1.appendChild(label1text);
for (var i= 0 ; i<3 ; i++){
    lastObject[i] =label1;
}
function myFunction(index){
    var actualObject = document.getElementById(index).innerHTML;
    var newObject = lastObject[index];
    lastObject[index]=actualObject;
    document.getElementById(index).innerHTML = newObject;
}