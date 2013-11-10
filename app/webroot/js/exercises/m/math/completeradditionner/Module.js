m.math.completeradditionner.Module = function (e) {

// public methods
    this.buildExercisePresentation = function (div) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });
        div.html('<h1>Aligner<br>Compter</h1>');
    };

    this.buildExplanation = function (div, selectedExercise) {
    };

    this.buildQuestion = function (div, selectedExercise, selectedModule) {
        if (selectedExercise == 1) {
            view = new m.math.completeradditionner.View(this, div, 5, 5);
        } else if (selectedExercise == 2) {
            view = new m.math.completeradditionner.View(this, div, 5, 6);
        } else if (selectedExercise == 3) {
            view = new m.math.completeradditionner.View(this, div, 5, 8);
        } else if (selectedExercise == 4) {
            view = new m.math.completeradditionner.View(this, div, 5, 10);
        } else if (selectedExercise == 5) {
            view = new m.math.completeradditionner.View(this, div, 5, 12);
        }
        questionIndex = 1;
    };

    this.getExerciseList = function () {
        return {
            title: ["Niveau 1" , "Niveau 2", "Niveau 3", "Niveau 4", "Niveau 5"],
            subTitle: ["jusqu'à 5", "jusqu'à 6", "jusqu'à 8", "jusqu'à 10", "jusqu'à 12"]
        };
    };

    this.getModuleList = function (selectedExercise) {
        return {
            title: ["Module 1" , "Module 2", "Module 3", "Module 4", "Module 5"],
            subTitle: ["5 questions", "5 questions", "5 questions", "5 questions", "5 questions"]
        };
    };

    this.finishModule = function (selectedExercise, selectedModule) {
        return questionIndex > 5;
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

    this.next = function() {
        engine.next();
    };

    this.nextQuestion = function() {
        questionIndex++;
        if (questionIndex <= 5) {
            view.next();
        }
    };

// private methods
    var init = function(e) {
        engine = e;
    };

// private attributes
    var view;
    var questionIndex;
    var engine;

    init(e);
};