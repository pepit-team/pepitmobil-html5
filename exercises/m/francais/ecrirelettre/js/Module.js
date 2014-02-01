m.francais.ecrirelettre.Module = function (e) {

// public methods
    this.buildExercisePresentation = function (div) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });

// sm, md and lg devices
        var title_sm_md_lg = $('<div/>', {
            html: "<h1>Retrouver les lettres du mot<br>4, 5 et 6 lettres</h1>",
            class: 'visible-sm visible-md visible-lg'
        });
        title_sm_md_lg.appendTo(div);

// xs devices
        var title_xs = $('<div/>', {
            html: "<h3>Retrouver les lettres du mot<br>4, 5 et 6 lettres</h3>",
            class: 'visible-xs'
        });
        title_xs.appendTo(div);

        var image = $('<img/>', {
            style: 'width: 50%',
            src: 'exercises/m/francais/ecrirelettre/img/card_1.png'
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
            html: "<h1>Cliquer sur les lettres pour réécrire le mot<br>3 erreurs et on passe à la question suivante</h1>",
            class: 'visible-sm visible-md visible-lg'
        });
        title_sm_md_lg.appendTo(div);

// xs devices
        var title_xs = $('<div/>', {
            html: "<h3>Cliquer sur les lettres pour réécrire le mot<br>3 erreurs et on passe à la question suivante</h3>",
            class: 'visible-xs'
        });
        title_xs.appendTo(div);

        var image = $('<img/>', {
            style: 'width: 80%',
            src: 'exercises/m/francais/ecrirelettre/img/example.png'
        });

        image.appendTo(div);
    };

    this.buildQuestion = function (div, currentExercise, currentModule) {
        var n = currentModule - 1;

        if (currentExercise == 1) {
            view = new m.francais.ecrirelettre.View(this, div, 5, 0, 4, 0, 5);
        } else if (currentExercise == 2) {
            view = new m.francais.ecrirelettre.View(this, div, 5, 5, 9, 0, 5);
        } else if (currentExercise == 3) {
            view = new m.francais.ecrirelettre.View(this, div, 5, 10, 14, 0, 6);
        } else if (currentExercise == 4) {
            view = new m.francais.ecrirelettre.View(this, div, 5, 15, 19, 0, 6);
        }
        questionIndex = 1;
        currentScore = this.getQuestionScore(currentExercise, currentModule);
    };

    this.error = function () {
        if (currentScore > 0) {
            --currentScore;
        }
    };

    this.finishModule = function (currentExercise, currentModule) {
        return questionIndex == this.getQuestionNumber(currentExercise, currentModule);
    };

    this.getExerciseList = function () {
        return {
            title: ["Niveau 1", "Niveau 2", "Niveau 3", "Niveau 4"],
            subTitle: ["5 lettres", "5 lettres", "6 lettres", "6 lettres"]
        };
    };

    this.getGoodResponseMessage = function () {
        return 'Bonne réponse !';
    };

    this.getLevel = function () {
        return 'm';
    };

    this.getModuleList = function (currentExercise) {
        return {
            title: ["Module 1" ],
            subTitle: ["5 questions" ]
        };
    };

    this.getName = function () {
        return 'Ecrire les mots';
    };

    this.getNextQuestionButtonText = function () {
        return 'Suivante';
    };

    this.getQuestionNumber = function (currentExercise, currentModule) {
        return 5;
    };

    this.getQuestionScore = function (currentExercise, currentModule) {
        return 50;  // total = 50 * 4 exercises * 1 module * 5 questions = 1000 pts
    };

    this.getScore = function () {
        return currentScore;
    };

    this.getSubject = function () {
        return 'francais';
    };

    this.getTopic = function () {
        return 'ecrirelettre';
    };

    this.getWrongResponseMessage = function () {
        return 'Mauvaise réponse';
    };

    this.initScore = function () {
        return new Score([
            [-1],
            [-1],
            [-1],
            [-1]
        ]);
    };

    this.next = function () {
        engine.next();
    };

    this.nextQuestion = function (currentExercise, currentModule) {
        questionIndex++;
        if (questionIndex <= this.getQuestionNumber(currentExercise, currentModule)) {
            currentScore = this.getQuestionScore(currentExercise, currentModule);
            view.next();
        }
    };

// private methods
    var init = function (e) {
        engine = e;
    };

// private attributes
    var view;
    var engine;

    var questionIndex;
    var currentScore;

    init(e);
};