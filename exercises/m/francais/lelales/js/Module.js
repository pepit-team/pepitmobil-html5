m.francais.lelales.Module = function (e) {

// public methods
    this.buildExercisePresentation = function (div) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });

// sm, md and lg devices
        var title_sm_md_lg = $('<div/>', {
            html: "<h1>Retrouver le déterminant<br>correspondant à l'image</h1>",
            class: 'visible-sm visible-md visible-lg'
        });
        title_sm_md_lg.appendTo(div);

// xs devices
        var title_xs = $('<div/>', {
            html: "<h3>Retrouver le déterminant<br>correspondant à l'image</h3>",
            class: 'visible-xs'
        });
        title_xs.appendTo(div);

        var image = $('<img/>', {
            style: 'width: 50%',
            src: 'exercises/m/francais/lelales/img/card_1.png'
        });

        image.appendTo(div);
    };

    this.buildExplanation = function (div, currentExercise) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });
// sm, md and lg devices
        var title_sm_md_lg = $('<div/>', {
            html: "<h1>Retrouver le déterminant<br>correspondant à l'image</h1>",
            class: 'visible-sm visible-md visible-lg'
        });
        title_sm_md_lg.appendTo(div);

// xs devices
        var title_xs = $('<div/>', {
            html: "<h3>Retrouver le déterminant<br>correspondant à l'image</h3>",
            class: 'visible-xs'
        });
        title_xs.appendTo(div);

        var image = $('<img/>', {
            style: 'width: 80%',
            src: 'exercises/m/francais/lelales/img/example.png'
        });

        image.appendTo(div);
    };

    this.buildQuestion = function (div, currentExercise, currentModule) {
        var n = currentModule - 1;

        if (currentExercise == 1) {
            if (!view) {
                view = new m.francais.lelales.View(this, div, 25, 0, 24,
                    n * this.getQuestionNumber(currentExercise, n));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
        } else if (currentExercise == 2) {
            if (!view) {
                view = new m.francais.lelales.View(this, div, 25, 25, 49,
                    n * this.getQuestionNumber(currentExercise, currentModule));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
        } else if (currentExercise == 3) {
            if (!view) {
                view = new m.francais.lelales.View(this, div, 25, 50, 74,
                    n * this.getQuestionNumber(currentExercise, currentModule));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
        } else if (currentExercise == 4) {
            if (!view) {
                view = new m.francais.lelales.View(this, div, 25, 75, 99,
                    n * this.getQuestionNumber(currentExercise, currentModule));
            } else {
                view.restart(div, n * this.getQuestionNumber(currentExercise, currentModule));
            }
        } else if (currentExercise == 5) {
            if (!view) {
                view = new m.francais.lelales.View(this, div, 25, 100, 124,
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

    this.getExerciseList = function () {
        return {
            title: ["Exercice 1", "Exercice 2", "Exercice 3", "Exercice 4", "Exercice 5",
                "Exercice 6", "Exercice 7", "Exercice 8", "Exercice 9"],
            subTitle: [ "Les animaux", "-", "-", "-", "-", "-", "-", "-", "-" ]
        };
    };

    this.getGoodResponseMessage = function() {
        return 'Bonne réponse !';
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

    this.getWrongResponseMessage = function() {
        return 'Mauvaise réponse';
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

// private methods
    var init = function(e) {
        view = undefined;
        engine = e;
    };

// private attributes
    var view;
    var engine;

    var questionIndex;
    var currentScore;

    init(e);
};