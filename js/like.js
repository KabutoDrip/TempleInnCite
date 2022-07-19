
  var btnvar1 = document.getElementById('btnh1');
  var btnvar2 = document.getElementById('btnh2');
  var btnvar3 = document.getElementById('btnh3');
  var btnvar4 = document.getElementById('btnh4');

  function Toggle(x){
    if (x == 1){
      if (btnvar1.style.color =="red") {
          btnvar1.style.color = "grey"
          window.localStorage.setItem("liked1", false);
      }
      else{
          btnvar1.style.color = "red"
          window.localStorage.setItem("liked1", true)
      }   
    }
    else if (x == 2){
      if (btnvar2.style.color =="red") {
          btnvar2.style.color = "grey"
          window.localStorage.setItem("liked2", false);
      }
      else{
          btnvar2.style.color = "red"
          window.localStorage.setItem("liked2", true)
      }   
    }
    else if (x == 3){
      if (btnvar3.style.color =="red") {
          btnvar3.style.color = "grey"
          window.localStorage.setItem("liked3", false);
      }
      else{
          btnvar3.style.color = "red"
          window.localStorage.setItem("liked3", true)
      }   
    }
    else if (x == 4){
      if (btnvar4.style.color =="red") {
          btnvar4.style.color = "grey"
          window.localStorage.setItem("liked4", false);
      }
      else{
          btnvar4.style.color = "red"
          window.localStorage.setItem("liked4", true)
      }   
    }
  }


window.onload = function examplefunction(){
  if (window.localStorage.getItem("liked1") == "true"){
    btnvar1.style.color = "red"
  }
  else{
    btnvar1.style.color = "grey"
  
  }
  if (window.localStorage.getItem("liked2") == "true"){
    btnvar2.style.color = "red"
  }
  else{
    btnvar2.style.color = "grey"
  
  }
  if (window.localStorage.getItem("liked3") == "true"){
    btnvar3.style.color = "red"
  }
  else{
    btnvar3.style.color = "grey"
  
  }
  if (window.localStorage.getItem("liked4") == "true"){
    btnvar4.style.color = "red"
  }
  else{
    btnvar4.style.color = "grey"
  
  }
}