m.math.completeradditionner.Model = function (number, max) {

// public attributes
    this.checkFirstOperand = function() {
        okFirstOperand = firstOperands[index] == selectedNumber;
        return okFirstOperand;
    };

    this.checkResult = function() {
        okResult = firstOperands[index] + secondOperands[index] == selectedNumber;
        return okResult;
    };

    this.checkSecondOperand = function() {
        okSecondOperand = secondOperands[index] == selectedNumber;
        return okSecondOperand;
    };

    this.getFirstOperand = function () {
        return firstOperands[index];
    };

    this.getResult = function () {
        return firstOperands[index] + secondOperands[index];
    };

    this.getSecondOperand = function () {
        return secondOperands[index];
    };

    this.getSelectedNumber = function() {
        return selectedNumber;
    };

    this.isOkFirstOperand = function() {
        return okFirstOperand;
    };

    this.isOkResult = function() {
        return okResult;
    };

    this.isOkSecondOperand = function() {
        return okSecondOperand;
    };

    this.next = function () {
        ++index;
        okFirstOperand = false;
        okSecondOperand = false;
        okResult = false;
        selectedNumber = 0;
    };

    this.setSelectedNumber = function(n) {
        selectedNumber = n;
    };

    this.unsetSelectedNumber = function() {
        selectedNumber = 0;
    };

// private methods
    var init = function (number, max) {
        var i = 0;

        do {
            firstOperands.push(Math.floor(Math.random() * max) + 1);
            secondOperands.push(Math.floor(Math.random() * max) + 1);
            if (firstOperands[i] + secondOperands[i] <= max) {
                ++i;
            } else {
                firstOperands.pop();
                secondOperands.pop();
            }
        } while (i < number);
        index = 0;
        okFirstOperand = false;
        okSecondOperand = false;
        okResult = false;
        selectedNumber = 0;
    };

// private attributes
    var firstOperands = [];
    var secondOperands = [];
    var index;
    var selectedNumber;
    var okFirstOperand;
    var okSecondOperand;
    var okResult;

    init(number, max);
};