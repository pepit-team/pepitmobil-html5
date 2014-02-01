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

var Score = function (v) {

// public methods
    this.add = function(currentExercise, currentModule, v) {
        if (values[currentExercise][currentModule] == -1) {
            values[currentExercise][currentModule] = v;
        } else {
            values[currentExercise][currentModule] += v;
        }
    };

    this.clear = function(currentExercise, currentModule) {
        values[currentExercise][currentModule] = -1;
    };

    this.get = function(currentExercise, currentModule) {
        return values[currentExercise][currentModule];
    };

    this.isDone = function(currentExercise, currentModule) {
        return values[currentExercise][currentModule] != -1;
    };

    this.load = function(level, subject, topic) {
        var key = 'pepit:'+level+':'+subject+':'+topic;

        if (localStorage[key]) {
            values = JSON.parse(localStorage[key]);
        }
    };
    this.save = function(level, subject, topic) {
        localStorage['pepit:'+level+':'+subject+':'+topic] = JSON.stringify(values);
    };

// private methods
    var init = function (v) {
        values = v;
    };

// private attributes
    var values;

    init(v);
};