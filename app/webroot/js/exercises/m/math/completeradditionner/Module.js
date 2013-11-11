m.math.completeradditionner.Module = function (e, u) {

// public methods
    this.buildExercisePresentation = function (div) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });
        div.html('<h1>Compléter<br>Additionner</h1>');
    };

    this.buildExplanation = function (div, currentExercise) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });
        div.html('<h1>Compléter et additionner</h1>');
    };

    this.buildQuestion = function (div, currentExercise, currentModule) {
        if (currentExercise == 1) {
            view = new m.math.completeradditionner.View(this, url, div, 5, 5);
        } else if (currentExercise == 2) {
            view = new m.math.completeradditionner.View(this, url, div, 5, 6);
        } else if (currentExercise == 3) {
            view = new m.math.completeradditionner.View(this, url, div, 5, 8);
        } else if (currentExercise == 4) {
            view = new m.math.completeradditionner.View(this, url, div, 5, 10);
        } else if (currentExercise == 5) {
            view = new m.math.completeradditionner.View(this, url, div, 5, 12);
        }
        questionIndex = 1;
        currentScore = this.getQuestionScore(currentExercise, currentModule);
    };

    this.error = function() {
        if (currentScore > 0) {
            --currentScore;
        }
    };

    this.finishModule = function (currentExercise, currentModule) {
        return questionIndex == this.getQuestionNumber(currentExercise, currentModule);
    };

    this.finishQuestionSequence = function () {
    };

    this.getExerciseList = function () {
        return {
            title: ["Niveau 1" , "Niveau 2", "Niveau 3", "Niveau 4", "Niveau 5"],
            subTitle: ["jusqu'à 5", "jusqu'à 6", "jusqu'à 8", "jusqu'à 10", "jusqu'à 12"]
        };
    };

    this.getModuleList = function (currentExercise) {
        return {
            title: ["Module 1" , "Module 2", "Module 3", "Module 4", "Module 5"],
            subTitle: ["5 questions", "5 questions", "5 questions", "5 questions", "5 questions"]
        };
    };

    this.getName = function() {
        return 'Complèter et additionner';
    };

    this.getNextQuestionButtonText = function () {
        return 'Suivante';
    };

    this.getQuestionNumber = function(currentExercise, currentModule) {
        return 5;
    };

    this.getQuestionScore = function(currentExercise, currentModule) {
        return 8;  // total = 8 * 5 exercises * 5 modules * 5 questions = 1000 pts
    };

    this.getScore = function() {
        return currentScore;
    };

    this.initScore = function() {
        return new Score([[-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1]]);
    };

    this.next = function() {
        engine.next();
    };

    this.nextQuestion = function(currentExercise, currentModule) {
        questionIndex++;
        if (questionIndex <= this.getQuestionNumber(currentExercise, currentModule)) {
            currentScore = this.getQuestionScore(currentExercise, currentModule);
            view.next();
        }
    };

    this.showAnswerIsRight = function () {

    };

    this.showAnswerIsWrong = function () {

    };

    this.startQuestionSequence = function () {

    };

    this.currentAnswerIsRight = function () {

    };

// private methods
    var init = function(e, u) {
        engine = e;
        url = u;
    };

// private attributes
    var view;
    var engine;
    var url;

    var questionIndex;
    var currentScore;

    init(e, u);
};