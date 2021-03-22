function corregirFormulario(){
    function corregirPregunta(answer,inputid,succesCounter){
        var response = document.getElementById(inputid).value;
        response = response.trim();
        response = response.toUpperCase();
        var succesfull = response.localeCompare(answer);
        if (succesfull == 0){
            succesCounter++;
            document.getElementById(inputid).style.webkitTextFillColor = "black";
            return succesCounter;
        }
        else{
            document.getElementById(inputid).style.webkitTextFillColor = "red";
            return succesCounter;
        }
        
        
    }
    var succesCounter = 0;
    inputid = new Array("input1","input2","select3","input4");
    answer = new Array("AMAZONAS","1945","VALUE2","GUITARRA");
    for (var i = 0;i<inputid.length;i++){
        succesCounter = corregirPregunta(answer[i] ,inputid[i],succesCounter);
    }
    function corregirCheckbox(checkboxId,checkboxFailCounter,answerChecked,labelId){  
        var responseChecked = document.getElementById(checkboxId).checked;
        if (answerChecked != responseChecked ){
            checkboxFailCounter++;
            if (responseChecked){
                document.getElementById(labelId).style.color= "red";
            }
            return checkboxFailCounter;
        }
        else{
            document.getElementById(labelId).style.color = "black";
            return checkboxFailCounter;
        }
    }
    
    var checkboxFailCounter = 0;
    var labelId= new Array("color1Label","color2Label","color3Label","color4Label","color5Label","color6Label");
    var checkboxId = new Array("color1Input","color2Input","color3Input","color4Input","color5Input","color6Input");
    var checkboxAnswer = new Array(true,false,true,true,false,false);
    for (var i = 0;i<checkboxId.length;i++){
        checkboxFailCounter = corregirCheckbox(checkboxId[i] ,checkboxFailCounter,checkboxAnswer[i],labelId[i]);
    }
    if (checkboxFailCounter == 0){
        succesCounter ++;
    }
    var porcentajeAciertos = succesCounter/5*100;
    document.getElementById("psol1").innerHTML = succesCounter;
    document.getElementById("psol2").innerHTML = porcentajeAciertos;
    
 
}