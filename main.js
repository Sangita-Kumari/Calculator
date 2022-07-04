let buttons = document.querySelectorAll('button');
let inputs = document.getElementById('screen');
let screenShow = "";
for(let item of buttons){
    item.addEventListener('click' , e =>{
      let buttonInput = e.target.innerText;
       
      if(buttonInput == 'C'){
        screenShow = screenShow.substring(0,screenShow.length - 1);
        inputs.value = screenShow;
      }
      else if (buttonInput == '='){
        inputs.value = eval(inputs.value);
      }
      else if(buttonInput == 'X'){
        inputs.value = "";
        screenShow = "";
      }
      else{
      screenShow += buttonInput;
      inputs.value = screenShow;
      }
    });

}