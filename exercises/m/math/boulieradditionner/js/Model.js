m.math.boulieradditionner.Model = function (mdl, max) {

// public methods
    this.check = function () {
        var total = parseInt(firstOperand[index] + secondOperand[index]);

        if (current_answer_selected == total && current_ball_on == total) {
            okResult = true;
            return true;
        }
        return false;
    };

    this.decrementCurrentBallOn = function () {
        if (current_ball_on > 1) {
            current_ball_on--;
        }
    };

    this.getFirstOperand = function () {
        return firstOperand[index];
    };

    this.getCurrentBallOn = function () {
        return current_ball_on;
    };

    this.getSecondOperand = function () {
        return secondOperand[index];
    };

    this.incrementCurrentBallOn = function () {
        if (current_ball_on < 12) {
            current_ball_on++;
        }
    };

    this.isOkResult = function () {
        return okResult;
    };

    this.next = function () {
        okResult = false;
        index++;
        current_ball_on = firstOperand[index];
        current_answer_selected = -1;
    };

    this.reset = function () {
        current_answer_selected = -1;
        current_ball_on = firstOperand[index];
    };

    this.setCurrentAnswerSelected = function (val) {
        current_answer_selected = val;
    };

// private methods
    var init = function () {

        for (var i = 0; i < mdl.getQuestionNumber(); i++) {

            firstOperand[i] = 0;
            secondOperand[i] = 0;

            while (parseInt(firstOperand[i] + secondOperand[i]) == 0 ||
                parseInt(firstOperand[i] + secondOperand[i]) > max) {
                firstOperand[i] = Math.floor(Math.random() * max) + 1;
                secondOperand[i] = Math.floor(Math.random() * max) + 1;
            }
        }

        index = 0;
        current_ball_on = firstOperand[index];
        current_answer_selected = -1;
    };

// private attributes

    var firstOperand = [];
    var secondOperand = [];

    var current_ball_on;
    var current_answer_selected;

    var okResult;

    var index;

    init();
};