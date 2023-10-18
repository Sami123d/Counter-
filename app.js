let number = 0 ;

function increase() {
   document.getElementById('realNumber').innerHTML= ++number;
  
}

function decrease() {
 
  if (number !== 0){
     document.getElementById('realNumber').innerHTML= --number;
  }
  
}

function reset() {
  
  number = 0;
  document.getElementById('realNumber').innerHTML = number;
  
}
//review 

