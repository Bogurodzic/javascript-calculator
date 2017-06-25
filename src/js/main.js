window.onload = function(){

  //Events for displaying buttons number
  let numbers = document.getElementsByClassName("number");
  [].forEach.call(numbers, function(data, index){
    data.addEventListener("click", function(){
      console.log(Number(this.innerText));
    });
  });
}
