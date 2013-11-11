/**
 *  This file is part of PepitMobil project.
 *
 *  PepitMobil is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This Web application is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with PepitMobil.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @copyright     Copyright (c) PepitMobil
 * @link          http://pepit.be
 * @package       app.webroot.js.exercises
 * @license       http://www.gnu.org/licenses/ GPLv3 License
 */

var engine = function (u) {

// public methods
    this.init = function (m) {
        module = m;
        score = new module.initScore();
        view = $('#exercise-view');

        buildExercisePage();
    };

    this.next = function () {
        bootstrap_alert.info(this, 'Bonne réponse !', module.getNextQuestionButtonText());
    };

    this.next2 = function () {
        score.add(currentExercise - 1, currentModule - 1, module.getScore());
        if (module.finishModule(currentExercise, currentModule)) {
            buildModulePage();
        } else {
            module.nextQuestion(currentExercise, currentModule);
        }
    };

// private methods
    var back = function () {
        if (currentExercise == -1) {
            window.location.replace(url);
        } else {
            if (currentModule == -1) {
                buildExercisePage();
            } else {
                buildModulePage();
            }
        }
    };

    var buildBadgeWithScore = function (exerciseIndex, moduleIndex) {
        var badge = '<span class="badge pull-right">';
        var max;

        if (moduleIndex != -1) {
            var s = score.get(exerciseIndex, moduleIndex);

            if (s == -1) {
                badge += 'à faire';
            } else {
                max = module.getQuestionScore(exerciseIndex, moduleIndex) *
                    module.getQuestionNumber(exerciseIndex, moduleIndex);
                badge += s + '/' + max;
            }
        } else {
            var sum = -1;

            max = 0;
            for (var index in module.getModuleList(exerciseIndex).title) {
                var s = score.get(exerciseIndex, index);

                max += module.getQuestionScore(exerciseIndex, index) *
                    module.getQuestionNumber(exerciseIndex, index);
                if (s > 0) {
                    if (sum == -1) {
                        sum = s;
                    } else {
                        sum += s;
                    }
                }
            }
            if (sum == -1) {
                badge += 'à faire';
            } else {
                badge += sum + '/' + max;
            }
        }
        badge += '</span>';
        return badge;
    };

    var buildExerciseList = function (div) {
        var table = $('<table />', {
            style: 'text-align: center'
        });

        for (var index in module.getExerciseList().title) {
            var row = $('<tr />', { });
            var cell = $('<td />', { });
            var text = '<h2>' + module.getExerciseList().title[index] + '</h2>' +
                '<h5>' + module.getExerciseList().subTitle[index] +
                '</h5>' + buildBadgeWithScore(index, -1);
            var link = $('<a />', {
                href: '#',
                class: 'btn btn-primary btn-ms active',
                id: 'exercise_' + index,
                role: 'button',
                html: text,
                click: function (e) {
                    var e = e || window.event;
                    var target = e.target || e.srcElement;

                    if (target.nodeName != 'A') {
                        target = target.parentNode;
                    }
                    currentExercise = parseInt(target.id.substring(target.id.indexOf('_') + 1, target.id.length)) + 1;
                    buildModulePage();
                }
            });
            link.appendTo(cell);
            cell.appendTo(row);
            row.appendTo(table);
        }
        table.appendTo(div);
    };

    var buildExercisePage = function () {
        clearView();

        var page_div = buildPage();
        var presentation_div = $('<div/>', {
            class: 'col-md-6'
        });
        var exercise_div = $('<div/>', {
            class: 'col-md-6'
        });

        module.buildExercisePresentation(presentation_div);
        buildExerciseList(exercise_div);

        presentation_div.appendTo(page_div);
        exercise_div.appendTo(page_div);
        currentExercise = -1;
        currentModule = -1;
    };

    var buildModuleList = function (div) {
        var table = $('<table />', {
            style: 'text-align: center'
        });

        for (var index in module.getModuleList(currentExercise).title) {
            var row = $('<tr />', { });
            var cell = $('<td />', { });
            var text = '<h2>' + module.getModuleList(currentExercise).title[index] + '</h2>' +
                '<h5>' + module.getModuleList(currentExercise).subTitle[index] +
                '</h5>' + buildBadgeWithScore(currentExercise - 1, index);
            var link = $('<a />', {
                href: '#',
                class: 'btn btn-primary btn-ms active',
                id: 'module_' + index,
                role: 'button',
                html: text,
                click: function (e) {
                    var e = e || window.event;
                    var target = e.target || e.srcElement;

                    if (target.nodeName != 'A') {
                        target = target.parentNode;
                    }

                    currentModule = parseInt(target.id.substring(target.id.indexOf('_') + 1,
                        target.id.length)) + 1;


                    buildQuestionPage();
                }
            });
            link.appendTo(cell);
            cell.appendTo(row);
            row.appendTo(table);
        }
        table.appendTo(div);
    };

    var buildModulePage = function () {
        clearView();

        var page_div = buildPage();
        var explanation_div = $('<div/>', {
            class: 'col-md-6'
        });
        var module_div = $('<div/>', {
            class: 'col-md-6'
        });

        module.buildExplanation(explanation_div, currentExercise);
        buildModuleList(module_div);

        explanation_div.appendTo(page_div);
        module_div.appendTo(page_div);
        currentModule = -1;
    };

    var buildPage = function () {
        var global_div = $('<div/>', {
            style: 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px'
        });
        var title_div = $('<div/>', {
            style: 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px; ' +
                'color: #ffffff; font-size: 20px; text-align: center',
            class: 'row'
        });
        var title = $('<div/>', {
            class: 'col-md-10',
            html: module.getName()
        });
        var nav = $('<a/>', {
            href: '#',
            class: 'col-md_2 btn btn-primary btn-ms active',
            role: 'button',
            html: 'Retour',
            click: function (e) {
                var e = e || window.event;
                var target = e.target || e.srcElement;

                back();
            }
        });
        var spacing_div = $('<div/>', {
            style: 'padding: 5px;'
        });
        var row_div = $('<div/>', {
            class: 'row'
        });

        nav.appendTo(title_div);
        title.appendTo(title_div);
        title_div.appendTo(view);
        spacing_div.appendTo(view);
        row_div.appendTo(global_div);
        global_div.appendTo(view);
        return row_div;
    };

    var buildQuestionPage = function () {
        clearView();

        var page_div = buildPage();

        module.buildQuestion(page_div, currentExercise, currentModule);
    };

    var clearView = function () {
        while (view[0].firstChild) {
            view[0].removeChild(view[0].firstChild);
        }
    };

// private attributes
    var url = u;
    var module;
    var view;

    var score;

    var currentExercise;
    var currentModule;
};