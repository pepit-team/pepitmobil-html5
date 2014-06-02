m.math.boulieradditionner.Module = function (e) {

// public methods
    this.buildExercisePresentation = function (div) {
        div.css({
            'text-align': 'center'
        });

        var title_xs_ms_md_lg = $('</div>', {
            html: "<h1>Complètez le Boulier et<br/>Entrez le résultat</h1>",
            class: 'visible_md visible_lg visible_xs visible_ms'
        });
        title_xs_ms_md_lg.appendTo(div);

    };

    this.buildExplanation = function (div, currentExercise) {
    };

    this.buildQuestion = function (div, currentExercise, currentModule) {
        view = new m.math.boulieradditionner.View(this, div);
        /*if(currentExercise == 1){
         view = new m.math.boulieradditionner.View(this, div,5);
         }
         else if(currentExercise == 2){
         view = new m.math.boulieradditionner.View(this,div,10);
         }*/

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
            title: [ 'Exercice 1'],
            subTitle: [ 'Jusqu\'à 5']
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
            subTitle: [ ]
        };
    };

    this.getName = function () {
        return "Boulier : additionner";
    };

    this.getNextQuestionButtonText = function () {
        return 'Suivante';
    };

    this.getQuestionNumber = function (currentExercise, currentModule) {
        return 5;
    };

    this.getQuestionScore = function (currentExercise, currentModule) {
        return 100;  // total = 1000 pts
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