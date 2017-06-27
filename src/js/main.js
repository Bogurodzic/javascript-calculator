window.onload = function(){
  let screen = {
    currentNumber: [],
    secondNumber: 0,
    dotFlag: false,
    display: document.getElementById("display"),

    displayCurrentNumber: function(){
      this.displayNumber(this.concatNumbers());
    },

    concatNumbers: function(){
      if (this.currentNumber.length !== 0){
        let screen = this.currentNumber.join("");
        return screen;
      } else {
        return "";
      }
    },

    clear: function(){
      this.currentNumber = [];
      this.displayCurrentNumber();
      this.changeDotFlag(false);
    },

    displayNumber: function(num){
      this.display.innerText = num;
    },

    addDot: function(){
      if (this.currentNumber.length !== 0 & this.dotFlag === false){
        this.currentNumber.push(".");
        this.displayCurrentNumber();
        this.changeDotFlag(true);
      }
    },

    changeDotFlag: function(flag){
      this.dotFlag = flag;
    },

    transferNumber: function(num){
      if(num.length > 0){
        this.secondNumber = num;
        this.currentNumber = [];
        console.log(this.secondNumber);
      }
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

  let del = document.getElementById("delete");
  del.addEventListener("click", function(){
    screen.clear();
  });

  let dot = document.getElementById("dot");
  dot.addEventListener("click", function(){
    screen.addDot();
  });

  let logicalOparations = document.getElementsByClassName("operations");
  [].forEach.call(logicalOparations, function(data, index){
    data.addEventListener("click", function(){
    screen.transferNumber(screen.currentNumber);
    });
  });
}
