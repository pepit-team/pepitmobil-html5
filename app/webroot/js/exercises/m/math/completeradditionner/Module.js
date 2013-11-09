m.math.completeradditionner.Module = function () {

// public methods
    this.buildExercisePresentation = function (div) {

    };

    this.buildExplanationPresentation = function (div, selectedExercise) {
    };

    this.buildQuestion = function (div, selectedExercise, selectedModule, numQuestion) {
        if (numQuestion == 1) {
            if (selectedExercise == 1) {
                view = new m.math.completeradditionner.View(div, 5, 5);
            } else if (selectedExercise == 2) {
                view = new m.math.completeradditionner.View(div, 5, 6);
            } else if (selectedExercise == 3) {
                view = new m.math.completeradditionner.View(div, 5, 8);
            } else if (selectedExercise == 4) {
                view = new m.math.completeradditionner.View(div, 5, 10);
            } else if (selectedExercise == 5) {
                view = new m.math.completeradditionner.View(div, 5, 12);
            }
        } else {
            view.next();
        }
    };

    this.getExerciseList = function () {
        return ["Addition - niveau 1", "Addition - niveau 2", "Addition - niveau 3", "Addition - niveau 4",
            "Addition - niveau 5"];
    };

    this.getModuleList = function (selectedExercise) {
        return [ "Module 1", "Module 2", "Module 3", "Module 4", "Module 5"];
    };

    this.getQuestionCount = function (selectedExercise, selectedModule) {
        return 5;
    };

    this.startQuestionSequence = function () {

    };

    this.finishQuestionSequence = function () {

    };

    this.getNextQuestionButtonText = function () {
        return 'Suivante';
    };

    this.currentAnswerIsRight = function () {

    };

    this.showAnswerIsRight = function () {

    };

    this.showAnswerIsWrong = function () {

    };

    this.getPointsRightAnswer = function (selectedExercise) {

    };

// private attributes
    var view;
};