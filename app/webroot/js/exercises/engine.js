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

var engine = function () {

// public methods
    this.init = function (m) {
        module = m;
        view = $('#exercise-view');

        buildExercisePage();
    };

    this.next = function() {
        if (module.finishModule(currentExercise, currentModule)) {
            buildModulePage();
        } else {
            module.nextQuestion();
        }
    };

// private methods
    var buildExerciseList = function (div) {
        var table = $('<table />', {
            style: 'text-align: center'
        });

        for (var index in module.getExerciseList().title) {
            var row = $('<tr />', { });
            var cell = $('<td />', { });
            var link = $('<a />', {
                href: '#',
                class: 'btn btn-primary btn-ms active',
                id: 'exercise_' + index,
                role: 'button',
                html: '<h2>' + module.getExerciseList().title[index] + '</h2>' +
                    '<h5>' + module.getExerciseList().subTitle[index] + '</h5>',
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
    };

    var buildPage = function () {
        var global_div = $('<div/>', {
            style: 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px'
        });
        var row_div = $('<div/>', {
            class: 'row'
        });

        global_div.appendTo(view);
        row_div.appendTo(global_div);
        return row_div;
    };

    var buildModuleList = function (div) {
        var table = $('<table />', {
            style: 'text-align: center'
        });

        for (var index in module.getModuleList(currentExercise).title) {
            var row = $('<tr />', { });
            var cell = $('<td />', { });
            var link = $('<a />', {
                href: '#',
                class: 'btn btn-primary btn-ms active',
                id: 'module_' + index,
                role: 'button',
                html: '<h2>' + module.getModuleList(currentExercise).title[index] + '</h2>' +
                    '<h5>' + module.getModuleList(currentExercise).subTitle[index] + '</h5>',
                click: function (e) {
                    var e = e || window.event;
                    var target = e.target || e.srcElement;

                    if (target.nodeName != 'A') {
                        target = target.parentNode;
                    }

                    currentModule = parseInt(target.id.substring(target.id.indexOf('_') + 1,
                        target.id.length)) + 1;

                    clearView();
                    module.buildQuestion(view, currentExercise, currentModule);
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
    };

    var clearView = function () {
        while (view[0].firstChild) {
            view[0].removeChild(view[0].firstChild);
        }
    };

// private attributes
    var module;
    var view;
    var currentExercise;
    var currentModule;
};