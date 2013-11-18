m.francais.lelales.Module = function (e, u) {

// public methods
    this.buildExercisePresentation = function (div) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });
        div.html('<h1>Déterminants<br>Le, la, les</h1>');
    };

    this.buildExplanation = function (div, currentExercise) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });
        div.html('<h1>Déterminants : le, la, les</h1>');
    };

    this.buildQuestion = function (div, currentExercise, currentModule) {
        var n = currentModule - 1;

        if (currentExercise == 1) {
            if (!view) {
                view = new m.francais.lelales.View(this, url, div, 25, 0, 24,
                    n * this.getQuestionNumber(currentExercise, n));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
        } else if (currentExercise == 2) {
            if (!view) {
                view = new m.francais.lelales.View(this, url, div, 25, 25, 49,
                    n * this.getQuestionNumber(currentExercise, currentModule));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
        } else if (currentExercise == 3) {
            if (!view) {
                view = new m.francais.lelales.View(this, url, div, 25, 50, 74,
                    n * this.getQuestionNumber(currentExercise, currentModule));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
        } else if (currentExercise == 4) {
            if (!view) {
                view = new m.francais.lelales.View(this, url, div, 25, 75, 99,
                    n * this.getQuestionNumber(currentExercise, currentModule));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
        } else if (currentExercise == 5) {
            if (!view) {
                view = new m.francais.lelales.View(this, url, div, 25, 100, 124,
                    n * this.getQuestionNumber(currentExercise, currentModule));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
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
            title: ["Exercice 1", "Exercice 2", "Exercice 3", "Exercice 4", "Exercice 5",
                "Exercice 6", "Exercice 7", "Exercice 8", "Exercice 9"],
            subTitle: [ "Les animaux", "-", "-", "-", "-", "-", "-", "-", "-" ]
        };
    };

    this.getLevel = function () {
        return 'm';
    };

    this.getModuleList = function (currentExercise) {
        return {
            title: ["Module 1" , "Module 2", "Module 3", "Module 4", "Module 5"],
            subTitle: ["5 questions", "5 questions", "5 questions", "5 questions", "5 questions"]
        };
    };

    this.getName = function() {
        return 'Déterminants : le, la, les';
    };

    this.getNextQuestionButtonText = function () {
        return '';
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

    this.getSubject = function () {
        return 'francais';
    };

    this.getTopic = function () {
        return 'lelales';
    };

    this.initScore = function() {
        return new Score([[-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1],
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
        view = undefined;
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