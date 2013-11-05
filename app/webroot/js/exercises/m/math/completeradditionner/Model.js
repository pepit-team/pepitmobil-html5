m.math.completeradditionner.Model = function (number, max) {

// public attributes
    this.firstOperand = function () {
        return firstOperands[index];
    };

    this.next = function () {
        ++index;
    };

    this.secondOperand = function () {
        return secondOperands[index];
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
    };

// private attributes
    var firstOperands = [];
    var secondOperands = [];
    var index;

    init(number, max);
};