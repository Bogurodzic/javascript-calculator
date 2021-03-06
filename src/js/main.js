window.onload = function(){
  let screen = {
    currentNumber: 0,
    secondNumber: 0,
    nextOperationFlag: false,
    dotFlag: false,
    dotNumber: 1,
    display: document.getElementById("display"),
    currentOperation: undefined,

    displayCurrentNumber: function(){
      this.displayNumber(this.currentNumber);
    },

    clear: function(){
      this.currentNumber = 0;
      this.display.innerText = "";
      this.changeDotFlag(false);
      this.dotNumber = 1;
    },

    updateCurrentNumber: function(num){
      num = Number(num);
      if(this.dotFlag === false ){
        this.normalUpdate(num);
      } else if (this.dotFlag === true){
        this.dotUpdate(num);
      }
      screen.displayCurrentNumber();
    },

    dotUpdate: function(num){
      let dotsAmount = this.dotNumber.toString().split("").length;
      this.currentNumber = this.currentNumber + (num / (10*this.dotNumber)) ;
      this.currentNumber = Number(this.currentNumber.toFixed(dotsAmount));
      this.dotNumber = this.dotNumber * 10;
    },

    normalUpdate: function(num){
      if(this.currentNumber !== 0){
        this.currentNumber = (this.currentNumber * 10) + num;
      } else if (this.currentNumber === 0) {
        this.currentNumber = num;
      }
    },

    displayNumber: function(num){
      this.display.innerText = num;
    },

    transferNumber: function(num){
      this.secondNumber = num;
      this.currentNumber = 0;
    },

    changeDotFlag: function(flag){
      this.dotFlag = flag;
    },

    resetNextOperationFlag: function(){
      this.nextOperationFlag = false;
    }

  }

  let calc = {
    add: function(){
      this.currentNumber = this.currentNumber + this.secondNumber;
    },

    sub: function(){
      this.currentNumber = this.secondNumber - this.currentNumber;
    },

    multiply: function(){
      this.currentNumber = this.currentNumber * this.secondNumber;
    },

    division: function(){
      this.currentNumber = this.secondNumber / this.currentNumber;
    },

    power: function(){
      this.currentNumber = Math.pow(this.secondNumber, this.currentNumber);
    },

    root: function(){
      this.currentNumber = Math.sqrt(this.currentNumber);
    },

    round: function(){
      this.currentNumber = Math.round(this.currentNumber);
    },

    percent: function(){
      this.currentNumber = this.currentNumber / 100;
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
      screen.updateCurrentNumber(data.innerHTML);
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
    screen.resetNextOperationFlag();
  });

  let dot = document.getElementById("dot");
  dot.addEventListener("click", function(){
    screen.changeDotFlag(true);
  });

  let logicalOparations = document.getElementsByClassName("operations");
  [].forEach.call(logicalOparations, function(data, index){
    data.addEventListener("click", function(){
      let dataAttr = this.getAttribute('data-type');
      let dataInstant = Boolean(this.getAttribute('data-instant'));
      if(dataInstant === true){
        let operation = calc[dataAttr];
        operation.call(screen);
        screen.displayCurrentNumber();
        screen.resetNextOperationFlag();
        screen.currentNumber = 0;
        screen.changeDotFlag(false);
      } else {
        if (screen.nextOperationFlag === true){
          screen.currentOperation();
          screen.displayCurrentNumber();
          screen.transferNumber(screen.currentNumber);
          screen.currentOperation = calc[dataAttr];
        } else if (screen.nextOperationFlag === false){
          screen.currentOperation = calc[dataAttr];
          screen.transferNumber(screen.currentNumber);
          screen.nextOperationFlag = true;
        }
      }
    });
  });


  let result = document.getElementById("result");
  result.addEventListener("click", function(){
    showResult();
  });

  function showResult(){
    screen.currentOperation();
    screen.displayCurrentNumber();
    screen.resetNextOperationFlag();
    screen.currentNumber = 0;
  }

}
