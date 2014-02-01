m.divers.formes.View = function (mdl, div, i, s, sd) {

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

    this.init = function (mdl, view, i, s, sd) {
        module = mdl;
        model = new m.divers.formes.Model(i, s, sd);
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
            $('#cell_' + color_names[index] + "_md_lg").css({'border-width': '1px'});
        }
        for (var index in color_names) {
            $('#cell_' + color_names[index] + "_xs_sm").css({'border-width': '1px'});
        }
    };

    this.update = function () {
        draw_shapes($('#canvas_element_md_lg'));
        draw_shapes($('#canvas_element_xs_sm'));
        if (model.isOkResult()) {
            module.next();
        }
    };

// private methods
    var build_canvas = function (div, style) {
// md and lg devices
        if (style === "md_lg") {
            var canvas_div = $('<div />', {
                style: 'background-color: #99CC66; width: 75%; align: center',
                id: 'canvas_id_md_lg'
            });

            var text_md_lg = $('<div />', {
                class: 'visible-md visible-lg',
                style: 'background-color: #ffffff; padding: 10px; border-radius: 6px 6px 6px 6px; font-size: 24px',
                id: 'instructions',
                html: model.getInstructions() + ' '
            });
            $('<img />', {
                src: 'img/audio-icon.png',
                width: 50,
                height: 50
            }).click(function() {
                    var mySound = new buzz.sound('exercises/m/divers/formes/sounds/'+
                        model.getSound()+'.ogg');
                    mySound.play();
                }).appendTo(text_md_lg);
            text_md_lg.appendTo(canvas_div);

            var canvas = $('<canvas/>', {
                class: 'visible-md visible-lg',
                style: 'background-color: #ffffff; padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto;display: block',
                id: 'canvas_element_md_lg'
            });

            build_spacing().appendTo(canvas_div);
            canvas.appendTo(canvas_div);
            canvas_div.appendTo(div);

            var js_canvas_div = document.getElementById("canvas_id_md_lg");
            var js_canvas = document.getElementById("canvas_element_md_lg");

            js_canvas.width = js_canvas_div.clientWidth * 0.8;
            js_canvas.height = js_canvas_div.clientWidth * 0.8;

            draw_shapes(canvas);
        }

// xs and sm devices
        if (style === "xs_sm") {
            var canvas_div = $('<div />', {
                style: 'background-color: #99CC66; align: center',
                id: 'canvas_id_xs_sm'
            });
            var text_xs_sm = $('<div />', {
                class: 'visible-xs visible-sm',
                style: 'background-color: #ffffff; padding: 10px; border-radius: 6px 6px 6px 6px; font-size: 16px',
                id: 'instructions',
                html: model.getInstructions()
            });
            $('<img />', {
                src: 'img/audio-icon.png',
                width: 50,
                height: 50
            }).click(function() {
                    var mySound = new buzz.sound('exercises/m/divers/formes/sounds' +
                        model.getSound()+'.ogg');
                    mySound.play();
                }).appendTo(text_xs_sm);
            text_xs_sm.appendTo(canvas_div);

            var canvas = $('<canvas/>', {
                class: 'visible-xs visible-sm',
                style: 'background-color: #ffffff; padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto;display: block',
                id: 'canvas_element_xs_sm'
            });

            build_spacing().appendTo(canvas_div);
            canvas.appendTo(canvas_div);
            canvas_div.appendTo(div);

            var js_canvas_div = document.getElementById("canvas_id_xs_sm");
            var js_canvas = document.getElementById("canvas_element_xs_sm");

            js_canvas.width = js_canvas_div.clientWidth * 0.8;
            js_canvas.height = js_canvas_div.clientWidth * 0.8;

            draw_shapes(canvas);
        }
    };

    var build_color = function (div, vertical, style) {
        var table;
        var row;

        if (vertical) {
            table = $("<table />", {
                style: 'width: 50%; border-style: solid; border-width:1px; border-color: #000000'
            });
        } else {
            table = $("<table />", {
                style: 'width: 100%; border-style: solid; border-width:1px; border-color: #000000'
            });
            row = $("<tr />", {
                style: 'height: 50px'
            });
            row.appendTo(table);
        }
        for (var index in color_codes) {
            build_color_cell(table, row, color_codes[index], color_names[index], vertical, style);
        }
        table.appendTo(div);
    };

    var build_color_cell = function (table, row, color, color_name, vertical, style) {
        var line = $("<td />", {
            style: 'background: ' + color + '; border-style: solid; border-width:1px; border-color: #000000',
            id: 'cell_' + color_name + "_" + style
        });

        if (vertical) {
            row = $("<tr />", {
                style: 'height: 50px'
            });
            line.appendTo(row);
            row.appendTo(table);
        } else {
            line.appendTo(row);
        }
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
        view.addClass('row');

// md and lg devices
        var canvas_div_md_lg = $('<div/>', {
            class: 'col-md-9 visible-md visible-lg',
            style: 'background-color: #99CC66'
        });
        var color_div_md_lg = $('<div/>', {
            class: 'col-md-3 visible-md visible-lg'
        });

        canvas_div_md_lg.appendTo(view);
        color_div_md_lg.appendTo(view);
        build_canvas(canvas_div_md_lg, "md_lg");
        build_color(color_div_md_lg, true, "md_lg");

// xs and sm devices
        var global_div = $('<div/>', {
            class: 'col-xs-12 visible-xs visible-sm',
        });
        var canvas_div_xs_sm = $('<div/>', {
            style: 'background-color: #99CC66'
        });
        var color_div_xs_sm = $('<div/>', {
        });

        canvas_div_xs_sm.appendTo(global_div);
        build_spacing().appendTo(global_div);
        color_div_xs_sm.appendTo(global_div);
        global_div.appendTo(view);
        build_canvas(canvas_div_xs_sm, "xs_sm");
        build_color(color_div_xs_sm, false, "xs_sm");
    };

// private attributes
    var color_codes = ['#ffffff', '#ffff00', '#ff0000', '#00ff00', '#0000ff',
        '#663300', '#ffa500', '#808080', '#FF69B4'];
    var color_names = ['white', 'yellow', 'red', 'green', 'blue',
        'brun', 'orange', 'grey', 'pink'];

    var module;
    var model;
    var controller;

    this.init(mdl, div, i, s, sd);
};