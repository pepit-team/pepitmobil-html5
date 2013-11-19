m.divers.formes.Module = function (e, u) {

// public methods
    this.buildExercisePresentation = function (div) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });

        var title = $('<div/>', {
            html: '<h1>Les formes<br>Les couleurs</h1><p>Reconnaître et colorier diverses formes</p>'
        });
        var canvas = $('<canvas/>', {
            id: 'canvas_element'
        });

        title.appendTo(div);
        canvas.appendTo(div);

        var width = window.innerWidth / 4;
        var height = width / 3;

        canvas.width = width;
        canvas.height = height;
        var context = canvas[0].getContext("2d");
        context.lineWidth = 1.;
        context.fillStyle = "#ffff00";
        context.beginPath();
        context.arc(width / 4, height / 2, height / 2 - 2, 0.0, 2 * Math.PI, false);
        context.fill();
        context.stroke();
        context.closePath();

        context.fillStyle = "#ff0000";
        context.beginPath();
        context.rect(width / 2, height / 2, width / 2 - 2, height / 2 - 2);
        context.fill();
        context.stroke();
        context.closePath();
    };

    this.buildExplanation = function (div, currentExercise) {
        div.css({
            'text-align': 'center',
            'font-size': '20px',
            'color': '#ffffff'
        });
        var title = $('<div/>', {
            html: '<h1>Les formes et les couleurs</h1><p>Cliquer sur les formes et les couleurs<br>pour les reconnaître</p>'
        });
        var image = $('<img/>', {
            style: 'width: 80%',
            src: url + 'img/exercises/m/divers/formes/example.png'
        });

        title.appendTo(div);
        image.appendTo(div);
    };

    this.buildQuestion = function (div, currentExercise, currentModule) {
        if (currentExercise == 1) {
            if (currentModule == 1) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les ronds en vert et les carrés en jaune',
                        'Colorier les carrés en bleu et les triangles en rouge'
                    ],
                    [[ { type: 'circle', number: 8, color: 'green' },
                        { type: 'square', number: 8, color: 'yellow' }
                    ], [ { type: 'square', number: 8, color: 'blue' },
                        { type: 'triangle', number: 8, color: 'red' }
                    ]]);
            } else if (currentModule == 2) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les ronds en jaune et les triangles en bleu',
                        'Colorier les ovales en rouge et les rectangles en jaune'
                    ],
                    [[ { type: 'circle', number: 8, color: 'yellow' },
                        { type: 'triangle', number: 8, color: 'blue' }
                    ], [ { type: 'oval', number: 8, color: 'red' },
                        { type: 'rectangle', number: 8, color: 'yellow' }
                    ]]);
            } else if (currentModule == 3) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les carrés en vert et les rectangles en bleu',
                        'Colorier les ronds en brun et les ovales en jaune'
                    ],
                    [[ { type: 'rectangle', number: 8, color: 'blue' },
                        { type: 'square', number: 8, color: 'green' }
                    ], [ { type: 'circle', number: 8, color: 'brun' },
                        { type: 'oval', number: 8, color: 'yellow' }
                    ]]);
            }
        } else if (currentExercise == 2) {
            if (currentModule == 1) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les ronds en orange, les carrés en vert et les triangles en gris',
                        'Colorier les rectangles en vert, les ovales en bleu et les losanges en jaune'
                    ],
                    [[ { type: 'circle', number: 6, color: 'orange' },
                        { type: 'square', number: 5, color: 'green' },
                        { type: 'triangle', number: 5, color: 'grey' }
                    ], [ { type: 'rectangle', number: 6, color: 'green' },
                        { type: 'oval', number: 5, color: 'blue' },
                        { type: 'diamond', number: 5, color: 'yellow' }
                    ]]);
            } else if (currentModule == 2) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les ovales en orange, les losanges en jaune et les rectangles en vert',
                        'Colorier les carrés en rouge, les ronds en vert et les triangles en rose'
                    ],
                    [[ { type: 'rectangle', number: 5, color: 'green' },
                        { type: 'oval', number: 6, color: 'orange' },
                        { type: 'diamond', number: 5, color: 'yellow' }
                    ], [ { type: 'circle', number: 5, color: 'green' },
                        { type: 'square', number: 6, color: 'red' },
                        { type: 'triangle', number: 5, color: 'pink' }
                    ]]);
            } else if (currentModule == 3) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les ovales en rouge, les ronds en jaune et les triangles en gris',
                        'Colorier les carrés en orange, les rectangles en vert et les losanges en jaune'
                    ],
                    [[ { type: 'circle', number: 5, color: 'yellow' },
                        { type: 'oval', number: 5, color: 'red' },
                        { type: 'triangle', number: 6, color: 'grey' }
                    ], [ { type: 'rectangle', number: 5, color: 'green' },
                        { type: 'square', number: 5, color: 'orange' },
                        { type: 'diamond', number: 6, color: 'yellow' }
                    ]]);
            }
        } else if (currentExercise == 3) {
            if (currentModule == 1) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les ovales en orange et les autres en vert',
                        'Colorier les carrés en rouge et les autres en jaune'
                    ],
                    [[ { type: 'rectangle', number: 4, color: 'green' },
                        { type: 'square', number: 4, color: 'green' },
                        { type: 'oval', number: 7, color: 'orange' },
                        { type: 'diamond', number: 4, color: 'green' }
                    ], [ { type: 'circle', number: 5, color: 'yellow' },
                        { type: 'rectangle', number: 4, color: 'yellow' },
                        { type: 'square', number: 4, color: 'red' },
                        { type: 'triangle', number: 5, color: 'yellow' }
                    ]]);
            } else if (currentModule == 2) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les carrés en vert, les triangles en rose et les autres en jaune',
                        'Colorier les rectangles en rouge, les ronds en gris et les autres en bleu'
                    ],
                    [[ { type: 'circle', number: 4, color: 'yellow' },
                        { type: 'square', number: 5, color: 'green' },
                        { type: 'rectangle', number: 5, color: 'yellow' },
                        { type: 'triangle', number: 4, color: 'pink' }
                    ], [ { type: 'rectangle', number: 6, color: 'red' },
                        { type: 'circle', number: 4, color: 'grey' },
                        { type: 'square', number: 4, color: 'blue' },
                        { type: 'diamond', number: 4, color: 'blue' }
                    ]]);
            } else if (currentModule == 3) {
                view = new m.divers.formes.View(this, url, div,
                    [
                        'Colorier les carrés en rouge, les rectangles en orange, les triangles en jaune et les losanges en vert',
                        'Colorier les ronds en gris, les ovales en vert, les triangles en rose et les losanges en bleu'
                    ],
                    [[ { type: 'square', number: 4, color: 'red' },
                        { type: 'rectangle', number: 4, color: 'orange' },
                        { type: 'triangle', number: 4, color: 'yellow' },
                        { type: 'diamond', number: 4, color: 'green' }
                    ], [ { type: 'circle', number: 4, color: 'grey' },
                        { type: 'oval', number: 4, color: 'green' },
                        { type: 'triangle', number: 4, color: 'pink' },
                        { type: 'diamond', number: 4, color: 'blue' }
                    ]]);
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
            title: ["Exercice 1", "Exercice 2", "Exercice 3"],
            subTitle: ["2 formes", "3 formes", "4 formes"]
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
            title: ["Module 1", "Module 2", "Module 3"],
            subTitle: ["2 questions", "2 questions", "2 questions"]
        };
    };

    this.getName = function() {
        return 'Les formes et les couleurs';
    };

    this.getNextQuestionButtonText = function () {
        return 'Suivante';
    };

    this.getQuestionNumber = function(currentExercise, currentModule) {
        return 2;
    };

    this.getQuestionScore = function(currentExercise, currentModule) {
        return 55.56;  // total = 55.56 * 3 exercises * 3 modules * 2 questions = 1000 pts
    };

    this.getScore = function() {
        return currentScore;
    };

    this.getSubject = function () {
        return 'divers';
    };

    this.getTopic = function () {
        return 'formes';
    };

    this.getWrongResponseMessage = function() {
        return 'Mauvaise réponse';
    };

    this.initScore = function() {
        return new Score([
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
          ]);
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