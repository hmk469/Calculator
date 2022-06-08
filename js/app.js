let keyPad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display")
let operators=["+","-","*","/","%"];

let filter = x => {
   let current = displayBox.innerText;
    let lastChar = current[current.length-1]
   if(current =="0" && x != "." ){
   
    clearLast()
   
   }
   if(current.length >= 10){
    return false;
}
   if (operators.includes(x) && operators.includes(lastChar)) {
   
        return false;
    
   }

   return true; 
}

let ShowInDisplay = (x) => {

    if(filter(x)){
        displayBox.innerText += x
    }
}

let calc= _=> {
   
    displayBox.innerText =  eval(displayBox.innerText)
}

let clearAll = _ => displayBox.innerText=" ";
let clearLast = _ => displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1);
