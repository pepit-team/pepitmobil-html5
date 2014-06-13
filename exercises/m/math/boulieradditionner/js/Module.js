m.math.boulieradditionner.Module = function (e) {

// public methods
    this.buildExercisePresentation = function (div) {

        div.css({
            'text-align': 'center',
            'color': 'white'
        });

        var title_xs_ms_md_lg = $('<div/>', {
            html: "<h1>Complètez le Boulier<br/>et choisir le résultat</h1>",
            class: 'visible_md visible_lg visible_xs visible_sm'
        });

        var illustration = $('<img/>', {
            src: 'exercises/m/math/boulieradditionner/img/illustration.png',
            style: 'width:80%'
        });

        title_xs_ms_md_lg.appendTo(div);
        illustration.appendTo(div);
    };

    this.buildExplanation = function (div, currentExercise) {

        div.css({
            'text-align': 'center',
            'color': 'white'
        });

        var title_Exercise_1 = $('<div/>', {
            html: "<h1>Faire l\'opération,<br/>complèter le boulier<br/>et cliquer sur le bon résultat.</h1>"
        });

        var img_Exercise = $('<img>', {
            src: 'exercises/m/math/boulieradditionner/img/explanation_exercice1.jpg',
            style: 'width:80%'
        });

        title_Exercise_1.appendTo(div);
        img_Exercise.appendTo(div);
    };

    this.buildQuestion = function (div, currentExercise, currentModule) {
        if (currentExercise == 1) {
            view = new m.math.boulieradditionner.View(this, div, 5);
        }
        else if (currentExercise == 2) {
            view = new m.math.boulieradditionner.View(this, div, 9);
        }
        else if (currentExercise == 3) {
            view = new m.math.boulieradditionner.View(this, div, 12);
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
            title: [ 'Exercice 1', 'Exercice 2', 'Exercice 3' ],
            subTitle: [ 'Jusqu\'à 5', 'Jusqu\'à 9', 'Jusqu\'à 12' ]
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
            title: [ 'Module 1'],
            subTitle: [ '' ]
        };
    };

    this.getName = function () {
        return "Boulier : additionner";
    };

    this.getNextQuestionButtonText = function () {
        return 'Suivante';
    };

    this.getQuestionIndex = function () {
        return questionIndex;
    };

    this.getQuestionNumber = function (currentExercise, currentModule) {
        return 5;
    };

    this.getQuestionScore = function (currentExercise, currentModule) {
        return 66;  // 3 Exercices 1 Module
    };

    this.getScore = function () {
        return currentScore;
    };

    this.getSubject = function () {
        return 'maths';
    };

    this.getTopic = function () {
        return 'boulieradditionner';
    };

    this.getWrongResponseMessage = function () {
        return 'Mauvaise réponse';
    };

    this.initScore = function () {
        // un exercice à un module
        return new Score([
            [ -1 ],
            [ -1 ],
            [ -1 ]
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