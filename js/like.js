
  var btnvar1 = document.getElementById('btnh1');

  function Toggle1(){
           if (btnvar1.style.color =="red") {
               btnvar1.style.color = "grey"
               window.localStorage.setItem("liked", false);

           }
           else{
               btnvar1.style.color = "red"
               window.localStorage.setItem("liked", true);

           }
           
  }


window.onload = function examplefunction(){
  if (window.localStorage.getItem("liked") == "true"){
    btnvar1.style.color = "red"
  }
  else{
    btnvar1.style.color = "grey"
  
  }
}