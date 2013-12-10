m.divers.formes.Model = function (i, s, sd) {

// public attributes
    this.checkColor = function (x, y) {
        var r = searchShape(x, y);

        if (r) {
            if (selectedColor == r.shape.color) {
                var i = 0;
                var stop = false;

                result[r.index] = r.shape.color;
                while (!stop && i < result.length) {
                    if (result[i] === '') {
                        stop = true;
                    } else {
                        ++i;
                    }
                    okResult = !stop;
                }
                return true;
            } else {
                return false;
            }
        }
        return false;
    };

    this.getInstructions = function () {
        return instructions[index];
    };

    this.getResult = function (i) {
        return result[i];
    };

    this.getShapes = function () {
        return shapes[index];
    };

    this.getSound = function () {
        return sounds[index];
    };

    this.isOkResult = function() {
        return okResult;
    };

    this.next = function () {
        ++index;
        okResult = false;
        initResult();
    };

    this.setColor = function(color) {
        selectedColor = color;
    };

// private methods
    var generateShapes = function () {
        for (var i = 0; i < shapeNumbers.length; ++i) {
            shapes.push([]);
            for (var j = 0; j < shapeNumbers[i].length; ++j) {
                for (var k = 0; k < shapeNumbers[i][j].number; ++k) {
                    var shape;

                    do {
                        shape = generateShape(shapeNumbers[i][j].type,
                            shapeNumbers[i][j].color);
                    } while (!valid_shape(shape, shapes[i]));
                    shapes[i].push(shape);
                }
            }
        }
    };

    var generateShape = function (type, color) {
        var x = Math.random();
        var y = Math.random();

        if (type === 'circle') {
            return {
                type: 'circle',
                x: x,
                y: y,
                color: color,
                center_x: x,
                center_y: y,
                radius: Math.random() * (0.075 - 0.05) + 0.05
            };
        }
        if (type === 'diamond') {
            var width = Math.random() * (0.15 - 0.1) + 0.1;
            var height = Math.random() * (0.15 - 0.1) + 0.1;

            return {
                type: 'diamond',
                x: x,
                y: y,
                width: width,
                height: height,
                color: color,
                center_x: x,
                center_y: y + height / 2,
                radius: (width > height) ? width / 2 : height / 2
            };
        }
        if (type === 'oval') {
            var radius = Math.random() * (0.2 - 0.1) + 0.1;

            return {
                type: 'oval',
                x: x,
                y: y,
                radius1: radius,
                radius2: radius * (Math.random() * (0.6 - 0.4) + 0.4),
                color: color,
                center_x: x,
                center_y: y,
                radius: radius / 2
            };
        }
        if (type === 'rectangle') {
            var width = Math.random() * (0.15 - 0.1) + 0.1;
            var height = width * (Math.random() * (0.6 - 0.4) + 0.4);

            return {
                type: 'rectangle',
                x: x,
                y: y,
                width: width,
                height: height,
                color: color,
                center_x: x + width / 2,
                center_y: y + height / 2,
                radius: (width / 2 ) * Math.sqrt(2)
            };
        }
        if (type === 'square') {
            var length = Math.random() * (0.15 - 0.1) + 0.1;

            return {
                type: 'square',
                x: x,
                y: y,
                length: length,
                color: color,
                center_x: x + length / 2,
                center_y: y + length / 2,
                radius: (length / 2 ) * Math.sqrt(2)
            };
        }
        if (type === 'triangle') {
            var height = Math.random() * (0.15 - 0.1) + 0.1;

            return {
                type: 'triangle',
                x: x,
                y: y,
                height: height,
                color: color,
                center_x: x,
                center_y: y - height / 2,
                radius: (height / 2) * Math.sqrt(2)
            };
        }
    };

    var init = function () {
        index = 0;
        generateShapes();
        selectedColor = '';
        okResult = false;
        initResult();
    };

    var initResult = function() {
        result = [];
        var list = shapes[index];

        for (var i = 0; i < list.length; ++i) {
            result.push('');
        }
    };

    var searchShape = function (x, y) {
        var list = shapes[index];
        var found = false;
        var i = 0;

        while (!found && i < list.length) {
            var dx = Math.abs(list[i].center_x - x);
            var dy = Math.abs(list[i].center_y - y);
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < list[i].radius) {
                found = true;
            } else {
                ++i;
            }
        }
        if (found) {
            return {
                index: i,
                shape: list[i]
            };
        } else {
            return undefined;
        }
    };

    var valid_shape = function (shape, list) {
        if (shape.center_x - shape.radius < 0.01) {
            return false;
        }
        if (shape.center_x + shape.radius > 0.99) {
            return false;
        }
        if (shape.center_y - shape.radius < 0.01) {
            return false;
        }
        if (shape.center_y + shape.radius > 0.99) {
            return false;
        }

        var ok = true;
        var i = 0;

        while (ok && i < list.length) {
            var dx = Math.abs(list[i].center_x - shape.center_x);
            var dy = Math.abs(list[i].center_y - shape.center_y);
            var radius = list[i].radius + shape.radius;

            if (Math.sqrt(dx * dx + dy * dy) < radius) {
                ok = false;
            } else {
                ++i;
            }
        }
        return ok;
    };

// private attributes
    var instructions = i;
    var shapeNumbers = s;
    var sounds = sd;

    var shapes = [];
    var result;
    var okResult;
    var index;
    var selectedColor;

    init();
};