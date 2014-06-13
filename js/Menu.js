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
 * @package       js
 * @license       http://www.gnu.org/licenses/ GPLv3 License
 */

var Menu = function () {

// public methods
    this.buildMainMenu = function () {
        var content = $("#content");
        var container = $('<div/>', {
            class: 'container',
            id: 'container'
        });

        content.empty();
        container.appendTo(content);
        container.append(
            $('<ol/>', { class: 'breadcrumb' }).append(
                $('<li/>', { class: 'active' }).append('Accueil')));

        $.getJSON('data/exercises.json', function (exercises) {

            for (var level_index = 0; level_index < exercises['levels'].length; level_index++) {
                titles[level_index] = exercises['levels'][level_index]['label'];
                subTitles[level_index] = exercises['levels'][level_index]['subLabel'];
                names[level_index] = exercises['levels'][level_index]['name'];
            }

            buildMainMenu(container, 3, 4, 'visible-md visible-lg', 'col-md-3', 'btn-md');
            buildMainMenu(container, 4, 3, 'visible-sm', 'col-sm-4', 'btn-sm');
            buildMainMenu(container, 6, 2, 'visible-xs', 'col-xs-6', 'btn-xs');
        });
    };

    this.buildSubMenu = function (level, levelIndex) {
        var container = $("#container");

        container.empty();
        $.getJSON('data/exercises.json', function (exercises) {
            if (levelIndex == -1) {
                var found = false;
                var i = 0;

                while (!found) {
                    if (exercises['levels'][i]['name'] == level) {
                        found = true;
                    } else {
                        ++i;
                    }
                }
                levelIndex = i;
            }
            container.append(
                $('<ol/>', { class: 'breadcrumb'}).append(
                        $('<li/>').append(
                            $('<a/>', { href: '#', onclick: 'new Menu().buildMainMenu();'}).append('Accueil'))).append(
                        $('<li/>', { class: 'active' }).append(exercises['levels'][levelIndex]['label']))
            );
            buildSubMenu(container, level, levelIndex, exercises);
        });
    };

    this.launchExercise = function (level, levelIndex, subject, subjectIndex, topic, topicIndex) {
        var container = $("#container");

        container.empty();
        $.getJSON('data/exercises.json', function (exercises) {
            container.append(
                $('<ol/>', { class: 'breadcrumb'}).append(
                        $('<li/>').append(
                            $('<a/>', { href: '#', onclick: 'new Menu().buildMainMenu();'}).append('Accueil'))).append(
                        $('<li/>').append(
                            $('<a/>', { href: '#', onclick: 'new Menu().buildSubMenu(\'' + level + '\',' + levelIndex + ');'}).append(exercises['levels'][levelIndex]['label']))).append(
                        $('<li/>').append(
                            $('<a/>', { href: '#', onclick: 'new Menu().buildSubMenu(\'' + level + '\',' + levelIndex + ');'}).append(exercises['levels'][levelIndex]['subjects'][subjectIndex]['label']))).append(
                        $('<li/>', { class: 'active' }).append(exercises['levels'][levelIndex]['subjects'][subjectIndex]['topics'][topicIndex]['label']))
            );
            launchExercise(container, level, levelIndex, subject, subjectIndex, topic, topicIndex, exercises);
        });
    };

// private methods
    var buildMainMenu = function (container, iMax, jMax, visible, col, button) {
        var k = 0;

        for (var i = 1; i <= iMax; i++) {
            var row = $('<div/>', {
                class: 'row ' + visible,
                style: 'padding: 10px'
            });
            for (var j = 1; j <= jMax; j++) {
                var element = $('<div/>', {
                    class: col + ' ' + visible
                });

                element.html('<a class="btn btn-' + colors[k % 4] +
                    ' ' + button + ' active ' + visible + '" role="button" onclick="new Menu().buildSubMenu(\'' +
                    names[k] + '\', ' + k + ');"">' + titles[k] +
                    '<br><i style="font-size: 12px">' + subTitles[k] + '</i></a>');
                element.appendTo(row);
                k++;
            }
            row.appendTo(container);
        }
    };

    var buildSubMenu = function (container, level, levelIndex, exercises) {
        var panelGroup = $('<div/>', {
            class: 'panel-group',
            id: 'accordion'
        });

        for (var subject_index = 0; subject_index < exercises['levels'][levelIndex]['subjects'].length;
             subject_index++) {
            var subject = exercises["levels"][levelIndex]["subjects"][subject_index];
            var panel = $('<div/>', {
                class: 'panel panel-default'
            });
            var panelHeading = $('<div/>', {
                class: 'panel-heading'
            });

            panelHeading.html('<h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse' +
                (subject_index + 1) + '">' + subject["label"] + '<br></a></h4>');

            var collapseDiv = $('<div/>', {
                id: 'collapse' + (subject_index + 1),
                class: 'panel-collapse collapse' + (subject_index == 0 ? ' in' : '')
            });

            var panelBody = $('<div/>', {
                class: 'panel-body'
            });
            var list = '';

            for (var exercise_index = 0; exercise_index < subject["topics"].length; exercise_index++) {
                var exercise = subject["topics"][exercise_index];

                list += '<li class="list-group-item">';
                if (exercise["version"] > 0) {
                    list += '<a href="#" onclick="new Menu().launchExercise(' +
                        '\'' + level + '\',' + levelIndex + ',\'' + subject["name"] + '\',' + subject_index + ',\'' + exercise["name"] + '\',' + exercise_index + ');">' + exercise['label'] + '</a>';
                    list += '<span class="glyphicon glyphicon-check" style="float: right"></span>';
                } else {
                    list += exercise['label'];
                    list += '<span class="glyphicon glyphicon-import" style="float: right"></span>';
                }
                list += '</li>';
            }
            list += '<ul class="list-group"></ul>';
            panelBody.html(list);
            panelBody.appendTo(collapseDiv);
            panelHeading.appendTo(panel);
            collapseDiv.appendTo(panel);
            panel.appendTo(panelGroup);
        }

        panelGroup.appendTo(container);
    };

    var launchExercise = function (container, level, levelIndex, subject, subjectIndex, topic, topicIndex, exercises) {
        loadModule(container, level, subject, topic,
            exercises["levels"][levelIndex]["subjects"][subjectIndex]["topics"][topicIndex]["depends"]);

        $('<div/>', {
            class: 'container',
            id: 'exercise-view',
            style: 'width: 95%'
        }).appendTo(container);
        $('<div/>', {
            id: 'alert_placeholder',
            style: 'position:absolute; top:50%; left:50%;'
        }).appendTo(container);

        var e = new Engine('exercises/' + level + '/exercise-' + level);
        var ModuleClass = stringToFunction(level + '.' + subject + '.' + topic + '.Module');
        var module = new ModuleClass(e);

        e.init(module);
    };

    var loadModule = function (container, level, subject, topic, depends) {
        loadScript(container, 'exercises/' + level + '/', 'Level.js');
        loadScript(container, 'exercises/' + level + '/' + subject + '/', 'Subject.js');
        for (var dependIndex = 0; dependIndex < depends.length; ++dependIndex) {
            loadTopic(container, 'exercises/' + level + '/' + subject + '/' + depends[dependIndex] + '/js/');
        }
        loadTopic(container, 'exercises/' + level + '/' + subject + '/' + topic + '/js/');
    };

    var loadScript = function (container, path, file) {
        var response = jQuery.ajax({
            url: path + file,
            type: 'HEAD',
            async: false
        }).status;

        if (response == "200") {
            var script = $('<script/>');

            script.attr('type', 'text/javascript');
            script.attr('src', path + file);
            script.appendTo(container);
        } else {
            console.log(path + file + ': not found');
        }
    };

    var loadTopic = function (container, path) {
        loadScript(container, path, 'Topic.js');
        loadScript(container, path, 'Model.js');
        loadScript(container, path, 'Module.js');
        loadScript(container, path, 'Controller.js');
        loadScript(container, path, 'View.js');
    };

    var stringToFunction = function (str) {
        var arr = str.split(".");
        var fn = (window || this);

        for (var i = 0, len = arr.length; i < len; i++) {
            fn = fn[arr[i]];
        }
        if (typeof fn !== "function") {
            throw new Error("function not found");
        }
        return  fn;
    };

    var titles = [];
    var subTitles = [];
    var names = [];
    var colors = ['primary', 'success', 'warning', 'info'];
};