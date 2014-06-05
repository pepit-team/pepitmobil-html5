m.math.boulieradditionner.Model = function () {

// public methods
    this.check = function () {
        var total = parseInt(firstOperand + secondOperand);

        if(current_answer_selected == total && current_ball_on == total){
            okResult = true;
            return true;
        }
        return false;
    };

    this.decrementCurrentBallOn = function () {
        if (current_ball_on > 1) {
            current_ball_on--;
        }
    }

    this.getFirstOperand = function () {
        return firstOperand;
    };

    this.getCurrentBallOn = function () {
        return current_ball_on;
    };

    this.getSecondOperand = function () {
        return secondOperand;
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
    };

    this.reset = function () {
        current_answer_selected = -1;
        $('.answer').css("opacity","1");
    };

    this.setCurrentAnswerSelected = function(val) {
        current_answer_selected = val;
    }


// private methods
    var init = function () {
        var max = 5;

        firstOperand = 0;
        secondOperand = 0;

        while(parseInt(firstOperand+secondOperand) == 0 || parseInt(firstOperand + secondOperand) > max ){
            firstOperand = Math.floor(Math.random() * max) + 1;
            secondOperand = Math.floor(Math.random() * max) + 1;
        }

        current_ball_on = firstOperand;
        current_answer_selected = -1;
    };

// private attributes
    var firstOperand;
    var secondOperand;

    var current_ball_on;
    var current_answer_selected;

    var okResult;

    init();
};