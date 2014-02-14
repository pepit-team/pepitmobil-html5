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

var Engine = function (r) {

// public methods
    this.init = function (m) {

        if ($.support.fullscreen) {
            $('#content').fullScreen();
        }

        module = m;
        score = new module.initScore();
        score.load(module.getLevel(), module.getSubject(), module.getTopic());
        view = $('#exercise-view');

        buildExercisePage();
    };

    this.next = function () {
        score.add(currentExercise - 1, currentModule - 1, module.getScore());
        score.save(module.getLevel(), module.getSubject(), module.getTopic());
        if (module.finishModule(currentExercise, currentModule)) {
            bootstrap_alert.info("Module fini", "", this);
            buildModulePage();
        } else {
            bootstrap_alert.info(module.getGoodResponseMessage(), module.getNextQuestionButtonText(), this);
        }
    };

    this.next2 = function () {
        module.nextQuestion(currentExercise, currentModule);
    };

// private methods
    var back = function () {
        if (currentExercise == -1) {
            new Menu().buildSubMenu(module.getLevel(), -1);
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

    var buildExerciseButton = function (div, index, style) {
        var cell = $('<td />', { });
        var score = buildBadgeWithScore(index, -1);

// md and lg devices
        if (style === "md_lg") {
            var div_md_lg = $('<div style="visible-md visible-lg" />', { });
            var text = '<div style="font-size: 30px; text-align: center">' +
                module.getExerciseList().title[index] + '</div>';

            if (module.getExerciseList().subTitle.length > 0) {
                text += '<div style="font-size: 15px; text-align: center">' +
                    module.getExerciseList().subTitle[index] + '</div>';
            }
            text += score;

            var link = $('<a />', {
                href: '#',
                class: 'btn btn-primary btn-md active',
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
            link.appendTo(div_md_lg);
            div_md_lg.appendTo(cell);
        }

// sm devices
        if (style === "sm") {
            var div_sm = $('<div style="visible-sm" />', { });
            var text = '<div style="font-size: 20px; text-align: center">' +
                module.getExerciseList().title[index] + '</div>';

            if (module.getExerciseList().subTitle.length > 0) {
                text += '<div style="font-size: 10px; text-align: center">' +
                    module.getExerciseList().subTitle[index] + '</div>';
            }
            text += score;

            var link = $('<a />', {
                href: '#',
                class: 'btn btn-primary btn-sm active',
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
            link.appendTo(div_sm);
            div_sm.appendTo(cell);
        }

// xs devices
        if (style === "xs") {
            var div_xs = $('<div style="visible-xd" />', { });
            var text = '<div style="font-size: 16px; text-align: center">' +
                module.getExerciseList().title[index] + '</div>';

            if (module.getExerciseList().subTitle.length > 0) {
                text += '<div style="font-size: 10px; text-align: center">' +
                    module.getExerciseList().subTitle[index] + '</div>';
            }
            text += score;

            var link = $('<a />', {
                href: '#',
                class: 'btn btn-primary btn-xs active',
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
            link.appendTo(div_xs);
            div_xs.appendTo(cell);
        }
        cell.appendTo(div);
    };

    var buildExerciseList = function (div, style) {
// sm, md and lg devices
        var table = $('<table />', {
            style: 'text-align: center',
            class: 'visible-sm visible-md visible-lg'
        });
        var n = Math.ceil(module.getExerciseList().title.length / 3);
        var index = 0;

        while (index < module.getExerciseList().title.length) {
            var row = $('<tr />', { });
            var i = 0;

            while (i < n && index < module.getExerciseList().title.length) {
                buildExerciseButton(row, index, style);
                ++index;
                ++i;
            }
            row.appendTo(table);
        }
        table.appendTo(div);

// xs devices
        var table = $('<table />', {
            style: 'text-align: center',
            class: 'visible-xs'
        });
        var index = 0;

        while (index < module.getExerciseList().title.length) {
            var row = $('<tr />', { });
            var i = 0;

            while (i < 3 && index < module.getExerciseList().title.length) {
                buildExerciseButton(row, index, style);
                ++index;
                ++i;
            }
            row.appendTo(table);
        }
        buildSpacing().appendTo(div);
        table.appendTo(div);
    };

    var buildExercisePage = function () {
        clearView();

        var page_div = buildPage();

// md and lg devices
        var page_div_md_lg = $('<div/>', {
            class: 'row'
        });
        var presentation_div_md_lg = $('<div/>', {
            class: 'col-md-6 visible-md visible-lg'
        });
        var exercise_div_md_lg = $('<div/>', {
            class: 'col-md-6 visible-md visible-lg'
        });

        presentation_div_md_lg.appendTo(page_div_md_lg);
        exercise_div_md_lg.appendTo(page_div_md_lg);
        page_div_md_lg.appendTo(page_div);
        module.buildExercisePresentation(presentation_div_md_lg);
        buildExerciseList(exercise_div_md_lg, "md_lg");

// sm devices
        var page_div_sm = $('<div/>', {
            class: 'row'
        });
        var presentation_div_sm = $('<div/>', {
            class: 'col-sm-6 visible-sm'
        });
        var exercise_div_sm = $('<div/>', {
            class: 'col-sm-6 visible-sm'
        });

        presentation_div_sm.appendTo(page_div_sm);
        exercise_div_sm.appendTo(page_div_sm);
        page_div_sm.appendTo(page_div);
        module.buildExercisePresentation(presentation_div_sm);
        buildExerciseList(exercise_div_sm, "sm");

// xs devices
        var page_div_xs = $('<div/>', {
        });
        var presentation_div_xs = $('<div/>', {
            class: 'visible-xs'
        });
        var exercise_div_xs = $('<div/>', {
            class: 'visible-xs'
        });

        presentation_div_xs.appendTo(page_div_xs);
        exercise_div_xs.appendTo(page_div_xs);
        page_div_xs.appendTo(page_div);
        module.buildExercisePresentation(presentation_div_xs);
        buildExerciseList(exercise_div_xs, "xs");

        currentExercise = -1;
        currentModule = -1;
    };

    var buildModuleButton = function (div, index, style) {
        var cell = $('<td />', { });
        var score = buildBadgeWithScore(currentExercise - 1, index);

// md and lg devices
        if (style === "md_lg") {
            var div_md_lg = $('<div style="visible-md visible-lg" />', { });
            var text_md_lg = '<div style="font-size: 30px; text-align: center">' +
                module.getModuleList(currentExercise).title[index] + '</div>';

            if (module.getModuleList(currentExercise).subTitle.length > 0) {
                text_md_lg += '<div style="font-size: 15px; text-align: center">' +
                    module.getModuleList(currentExercise).subTitle[index] + '</div>';
            }
            text_md_lg += score;
            var link_md_lg = $('<a />', {
                class: 'btn btn-primary btn-md active',
                html: text_md_lg,
                href: '#',
                id: 'module_' + index,
                role: 'button',
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
            link_md_lg.appendTo(div_md_lg);
            div_md_lg.appendTo(cell);
        }

// sm devices
        if (style === "sm") {
            var div_sm = $('<div style="visible-sm" />', { });
            var text_sm = '<div style="font-size: 20px; text-align: center">' +
                module.getModuleList(currentExercise).title[index] + '</div>';

            if (module.getModuleList(currentExercise).subTitle.length > 0) {
                text_sm += '<div style="font-size: 10px; text-align: center">' +
                    module.getModuleList(currentExercise).subTitle[index] + '</div>';
            }
            text_sm += score;

            var link_sm = $('<a />', {
                class: 'btn btn-primary btn-sm active',
                html: text_sm,
                href: '#',
                id: 'module_' + index,
                role: 'button',
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
            link_sm.appendTo(div_sm);
            div_sm.appendTo(cell);
        }

// xs devices
        if (style === "xs") {
            var div_xs = $('<div style="visible-xs" />', { });
            var text_xs = '<div style="font-size: 16px; text-align: center">' +
                module.getModuleList(currentExercise).title[index] + '</div>';

            if (module.getModuleList(currentExercise).subTitle.length > 0) {
                text_xs += '<div style="font-size: 10px; text-align: center">' +
                    module.getModuleList(currentExercise).subTitle[index] + '</div>';
            }
            text_xs += score;

            var link_xs = $('<a />', {
                class: 'btn btn-primary btn-xs active',
                html: text_xs,
                href: '#',
                id: 'module_' + index,
                role: 'button',
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
            link_xs.appendTo(div_xs);
            div_xs.appendTo(cell);
        }
        cell.appendTo(div);
    };

    var buildModuleList = function (div, style) {
// sm, md and lg devices
        var table = $('<table />', {
            style: 'text-align: center',
            class: 'visible-sm visible-md visible-lg'
        });
        var n = Math.ceil(module.getModuleList(currentExercise).title.length / 3);
        var index = 0;

        while (index < module.getModuleList(currentExercise).title.length) {
            var row = $('<tr />', { });
            var i = 0;

            while (i < n && index < module.getModuleList(currentExercise).title.length) {
                buildModuleButton(row, index, style);
                ++index;
                ++i;
            }
            row.appendTo(table);
        }
        table.appendTo(div);

// xs devices
        var table = $('<table />', {
            style: 'text-align: center',
            class: 'visible-xs'
        });
        var index = 0;

        while (index < module.getModuleList(currentExercise).title.length) {
            var row = $('<tr />', { });
            var i = 0;

            while (i < 3 && index < module.getModuleList(currentExercise).title.length) {
                buildModuleButton(row, index, style);
                ++index;
                ++i;
            }
            row.appendTo(table);
        }
        buildSpacing().appendTo(div);
        table.appendTo(div);
    };

    var buildModulePage = function () {
        clearView();

        var page_div = buildPage();

// md and lg devices
        var page_div_md_lg = $('<div/>', {
            class: 'row'
        });
        var explanation_div_md_lg = $('<div/>', {
            class: 'col-md-6 visible-md visible-lg'
        });
        var module_div_md_lg = $('<div/>', {
            class: 'col-md-6 visible-md visible-lg'
        });

        module.buildExplanation(explanation_div_md_lg, currentExercise);
        buildModuleList(module_div_md_lg, "md_lg");
        explanation_div_md_lg.appendTo(page_div_md_lg);
        module_div_md_lg.appendTo(page_div_md_lg);
        page_div_md_lg.appendTo(page_div);

// sm devices
        var page_div_sm = $('<div/>', {
            class: 'row'
        });
        var explanation_div_sm = $('<div/>', {
            class: 'col-sm-6 visible-sm'
        });
        var module_div_sm = $('<div/>', {
            class: 'col-sm-6 visible-sm'
        });

        module.buildExplanation(explanation_div_sm, currentExercise);
        buildModuleList(module_div_sm, "sm");
        explanation_div_sm.appendTo(page_div_sm);
        module_div_sm.appendTo(page_div_sm);
        page_div_sm.appendTo(page_div);

// xs devices
        var page_div_xs = $('<div/>', {
        });
        var explanation_div_xs = $('<div/>', {
            class: 'visible-xs'
        });
        var module_div_xs = $('<div/>', {
            class: 'visible-xs'
        });

        module.buildExplanation(explanation_div_xs, currentExercise);
        buildModuleList(module_div_xs, "xs");
        explanation_div_xs.appendTo(page_div_xs);
        module_div_xs.appendTo(page_div_xs);
        page_div_xs.appendTo(page_div);

        currentModule = -1;
    };

    var buildPage = function () {
        var global_div = $('<div/>', {
            style: 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px'
        });
        var title_div = $('<div/>', {
            style: 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px; ' +
                'color: #ffffff',
            class: 'row'
        });

        buildSpacing().appendTo(view);
        buildTitle(title_div);
        title_div.appendTo(view);
        buildSpacing().appendTo(view);
        global_div.appendTo(view);
        return global_div;
    };

    var buildQuestionPage = function () {
        clearView();

        var page_div = buildPage();

        score.clear(currentExercise - 1, currentModule - 1);
        module.buildQuestion(page_div, currentExercise, currentModule);
    };

    var buildSpacing = function () {
        return $('<div/>', {
            style: 'padding: 5px;'
        });
    };

    var buildTitle = function (title_div) {
// md and lg device
        $('<img/>', {
            class: 'col-md-1 visible-md visible-lg',
            src: 'img/logo.png'
        }).appendTo(title_div);
        $('<div/>', {
            class: 'col-md-9 visible-md visible-lg',
            style: 'font-size: 40px; text-align: center',
            html: module.getName()
        }).appendTo(title_div);

// sm device
        $('<img/>', {
            class: 'col-sm-1 visible-sm',
            src: 'img/logo.png'
        }).appendTo(title_div);
        $('<div/>', {
            class: 'col-sm-9 visible-sm',
            style: 'font-size: 30px; text-align: center',
            html: module.getName()
        }).appendTo(title_div);

// xs device
        $('<img/>', {
            class: 'col-xs-2 visible-xs',
            src: 'img/logo.png'
        }).appendTo(title_div);
        $('<div/>', {
            class: 'col-xs-8 visible-xs',
            style: 'font-size: 20px; text-align: center',
            html: module.getName()
        }).appendTo(title_div);
    };

    var clearView = function () {
        while (view[0].firstChild) {
            view[0].removeChild(view[0].firstChild);
        }
    };

// private attributes
    var root = r;
    var module;
    var view;

    var score;

    var currentExercise;
    var currentModule;
};