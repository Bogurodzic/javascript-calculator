window.onload = function(){
  let screen = {
    currentNumber: 0,
    secondNumber: 0,
    dotFlag: false,
    display: document.getElementById("display"),

    displayCurrentNumber: function(){
      this.displayNumber(this.currentNumber);
    },

    clear: function(){
      this.currentNumber = 0;
      this.display.innerText = "";
      //this.changeDotFlag(false);
    },

    updateCurrentNumber: function(num){
      num = Number(num);
      if(this.currentNumber !== 0){
        this.currentNumber = (this.currentNumber * 10) + num;
      } else if (this.currentNumber === 0) {
        this.currentNumber = num;
      }
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


  }

  let button = {

    onClick: function(but){
      but.classList.toggle("active-button");
      setTimeout(function(){ but.classList.toggle("active-button"); }, 100)
    }

  }

  //Events for displaying buttons number
  let numbers = document.getElementsByClassName("number");
  [].forEach.call(numbers, function(data, index){
    data.addEventListener("click", function(){
      screen.updateCurrentNumber(data.innerHTML);
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
    //screen.addDot();
  });

  let logicalOparations = document.getElementsByClassName("operations");
  [].forEach.call(logicalOparations, function(data, index){
    data.addEventListener("click", function(){
    //screen.transferNumber(screen.currentNumber);
    });
  });
}
