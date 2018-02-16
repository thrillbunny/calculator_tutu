/*clear*/
/*document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("display").value = "";
},true);*/
function clearscreen(){
    document.getElementById("display").value="";
}
/*取值计算*/
function gets(value){
    document.getElementById("display").value+=value;
}
/*按下=号，清屏，输出结果*/
function calculates(){
    var result=0;
    result=document.getElementById("display").value;
    document.getElementById("display").value="";
    document.getElementById("display").value=eval(result);
}