window.onload = function(){
  let screen = {
    currentNumber: [],
    display: document.getElementById("display"),

    displayCurrentNumber: function(){
      this.displayNumber(this.concatNumbers());
    },

    concatNumbers: function(){
      let screen = Number(this.currentNumber.join(""));
        return screen;
    },

    displayNumber: function(num){
      this.display.innerText = num;
    }
  }

  //Events for displaying buttons number
  let numbers = document.getElementsByClassName("number");
  [].forEach.call(numbers, function(data, index){
    data.addEventListener("click", function(){
      screen.currentNumber.push(Number(this.innerText));
      screen.displayCurrentNumber();
    });
  });
}
