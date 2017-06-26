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

  let button = {

    onClick: function(but){
      but.classList.toggle("active-button");
      setTimeout(function(){ but.classList.toggle("active-button"); }, 100)
    },
  }

  //Events for displaying buttons number
  let numbers = document.getElementsByClassName("number");
  [].forEach.call(numbers, function(data, index){
    data.addEventListener("click", function(){
      screen.currentNumber.push(Number(this.innerText));
      screen.displayCurrentNumber();
    });
  });

  let buttons = document.getElementsByClassName("button");
  [].forEach.call(buttons, function(data, index){
    data.addEventListener("click", function(){
      button.onClick(this);
    });
  });
}
