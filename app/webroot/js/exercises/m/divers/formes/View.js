m.divers.formes.View = function (mdl, u, div, i, s) {

// public methods
    this.error = function () {
        module.error();
    };

    this.getColorNameNumber = function () {
        return color_names.length;
    };

    this.getColorName = function (i) {
        return color_names[i];
    };

    this.init = function (mdl, u, view, i, s) {
        module = mdl;
        url = u;
        model = new m.divers.formes.Model(i, s);
        init_div(view);
        controller = new m.divers.formes.Controller(model, this);
    };

    this.next = function () {
        model.next();
        this.update();
        $('#instructions').html(model.getInstructions());
        this.unselect_color_cells();
    };

    this.unselect_color_cells = function () {
        for (var index in color_names) {
            $('#cell_' + color_names[index]).css({'border-width': '1px'});
        }
    };

    this.update = function () {
        draw_shapes($('#canvas_element'));
        if (model.isOkResult()) {
            module.next();
        }
    };

// private methods
    var build_canvas = function (div) {
        var canvas_div = $('<div />', {
            style: 'background-color: #99CC66; width: 75%; align: center',
            id: 'canvas_id'
        });

        var text = $('<div />', {
            style: 'background-color: #ffffff; padding: 10px; border-radius: 6px 6px 6px 6px; font-size: 24px',
            id: 'instructions',
            html: model.getInstructions()
        });
        var canvas = $('<canvas/>', {
            style: 'background-color: #ffffff; padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto;display: block',
            id: 'canvas_element'
        });

        text.appendTo(canvas_div);
        build_spacing().appendTo(canvas_div);
        canvas.appendTo(canvas_div);
        canvas_div.appendTo(div);

        var js_canvas_div = document.getElementById("canvas_id");
        var js_canvas = document.getElementById("canvas_element");

        js_canvas.width = js_canvas_div.clientWidth * 0.8;
        js_canvas.height = js_canvas_div.clientWidth * 0.8;

        draw_shapes(canvas);
    };

    var build_color = function (div) {
        var table = $("<table />", {
            style: 'width: 50%; border-style: solid; border-width:1px; border-color: #000000'
        });

        for (var index in color_codes) {
            build_color_cell(table, color_codes[index], color_names[index]);
        }
        table.appendTo(div);
    };

    var build_color_cell = function (table, color, color_name) {
        var row = $("<tr />", {
            style: 'height: 50px'
        });
        var line = $("<td />", {
            style: 'background: ' + color + '; border-style: solid; border-width:1px; border-color: #000000',
            id: 'cell_' + color_name
        });
        line.appendTo(row);
        row.appendTo(table);
    };

    var build_spacing = function () {
        return $('<div/>', {
            style: 'padding: 10px;'
        });
    };

    var drawEllipse = function (context, centerX, centerY, width, height) {
        context.moveTo(centerX, centerY - height / 2);
        context.bezierCurveTo(
            centerX + width / 2, centerY - height / 2,
            centerX + width / 2, centerY + height / 2,
            centerX, centerY + height / 2);
        context.bezierCurveTo(
            centerX - width / 2, centerY + height / 2,
            centerX - width / 2, centerY - height / 2,
            centerX, centerY - height / 2);
    };

    var draw_shapes = function (canvas) {
        var width = canvas.width();
        var height = canvas.height();
        var context = canvas[0].getContext("2d");

        context.lineWidth = 1.;
        context.strokeStyle = "#000000";
        context.fillStyle = "#ffffff";
        context.rect(0, 0, width, height);
        context.fill();
        context.stroke();

        var shapes = model.getShapes();

        for (var i = 0; i < shapes.length; ++i) {
            var shape = shapes[i];
            var color = model.getResult(i);

            if (color === '') {
                context.fillStyle = "#ffffff";
            } else {
                context.fillStyle = get_color(color);
            }
            context.beginPath();
            if (shape.type === 'circle') {
                context.arc(shape.x * width, shape.y * height, shape.radius * width, 0, 2 * Math.PI, false);
            }
            if (shape.type === 'diamond') {
                context.moveTo(shape.x * width, shape.y * height);
                context.lineTo((shape.x + shape.width / 2) * width,
                    (shape.y + shape.height / 2) * height);
                context.lineTo(shape.x * width,
                    (shape.y + shape.height) * height);
                context.lineTo((shape.x - shape.width / 2) * width,
                    (shape.y + shape.height / 2) * height);
                context.lineTo(shape.x * width, shape.y * height);
            }
            if (shape.type === 'oval') {
                drawEllipse(context, shape.x * width, shape.y * height,
                    shape.radius1 * width, shape.radius2 * width);
            }
            if (shape.type === 'square') {
                context.rect(shape.x * width, shape.y * height, shape.length * width, shape.length * height);
            }
            if (shape.type === 'rectangle') {
                context.rect(shape.x * width, shape.y * height, shape.width * width, shape.height * height);
            }
            if (shape.type === 'triangle') {
                context.moveTo(shape.x * width, (shape.y - shape.height) * height);
                context.lineTo((shape.x + shape.height / 2) * width, shape.y * height);
                context.lineTo((shape.x - shape.height / 2) * width, shape.y * height);
                context.lineTo(shape.x * width, (shape.y - shape.height) * height);
            }
            context.stroke();
            context.fill();
            context.closePath();
        }
    };

    var get_color = function (color) {
        var found = false;
        var i = 0;

        while (!found && i < color_names.length) {
            if (color_names[i] === color) {
                found = true;
            } else {
                ++i;
            }
        }
        if (found) {
            return color_codes[i];
        } else {
            return undefined;
        }
    };

    var init_div = function (view) {
        view.css({
            'background-color': '#99CC66',
            'padding': '10px',
            'border-radius': '6px 6px 6px 6px'
        });

        var canvas_div = $('<div/>', {
            class: 'col-md-9',
            style: 'background-color: #99CC66'
        });
        var color_div = $('<div/>', {
            class: 'col-md-3'
        });

        canvas_div.appendTo(view);
        color_div.appendTo(view);

        build_canvas(canvas_div);
        build_color(color_div);
    };

// private attributes
    var color_codes = ['#ffffff', '#ffff00', '#ff0000', '#00ff00', '#0000ff',
        '#663300', '#ffa500', '#808080', '#FF69B4'];
    var color_names = ['white', 'yellow', 'red', 'green', 'blue',
        'brun', 'orange', 'grey', 'pink'];
    var url;

    var module;
    var model;
    var controller;

    this.init(mdl, u, div, i, s);
};