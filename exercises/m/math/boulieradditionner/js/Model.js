m.math.boulieradditionner.Model = function () {

// public methods
    this.check = function() {
        okResult = true;
        return true;
    };

    this.getFirstOperand = function(){
        return firstOperand;
    }

    this.getSecondOperand = function(){
        return secondOperand;
    }

    this.isOkResult = function() {
        return okResult;
    };

    this.next = function() {
        okResult = false;
    };

    this.reset = function() {
    };

// private methods
    var init = function(){
        var max = 6;
        firstOperand = Math.floor(Math.random() * max) + 1;
        secondOperand = Math.floor(Math.random() *max) + 1;
    };

// private attributes
    var firstOperand;
    var secondOperand;

    var okResult;

    init();
};