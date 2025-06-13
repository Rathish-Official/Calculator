
let inputt=document.querySelector("input");

function addvalue(val){
    inputt.value+=val;
}

function clearr(){
    inputt.value=""
}

function deleteVal(){
    
    inputt.value= inputt.value.slice(0,inputt.value.length-1)
}

function evall(){
    inputt.value=eval(inputt.value)
}