function addButtonToString( number){
    var paragraph = document.getElementById("upScreen");
    var text = document.createTextNode(number);
    paragraph.appendChild(text);
}
function operate(){
    var operateString = document.getElementById("upScreen").innerText;
    if(operateString.includes("max(")){
        max(operateString);
    }
    else{
        var solution = eval(operateString);
        document.getElementById("downScreen").innerHTML = solution;
    }
}
function resetCalculator(){
    while (document.getElementById("downScreen").firstChild) document.getElementById("downScreen").removeChild(document.getElementById("downScreen").firstChild);// funcion de https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
    while (document.getElementById("upScreen").firstChild) document.getElementById("upScreen").removeChild(document.getElementById("upScreen").firstChild);
}
function max( operateString){
    var prov1number = operateString.split('(');
    var prov2number = prov1number[1].split(')');
    numbers = prov2number[0];
    solution = Math.max(numbers[0],numbers[2]);
    document.getElementById("downScreen").innerHTML = solution ;
    
    
}