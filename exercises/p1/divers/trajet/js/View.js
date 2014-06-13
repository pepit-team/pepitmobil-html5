p1.divers.trajet.Arrow = function () {

// public methods
    this.draw = function(context, length, length2) {
        this.drawWithCoordinates(context, origin.x, origin.y, length, length2);
    };

    this.drawWithCoordinates = function (context, x, y, length, length2) {
        var pt1 = { x: x, y: y };
        var pt2;
        var l = length2 * 0.3;
        var l2 = length2 * 0.1;

        context.lineWidth = 1.;
        context.strokeStyle = "#000000";
        context.fillStyle = "#ff0000";
        context.beginPath();
        switch (direction) {
            case p1.divers.trajet.Direction.NORTH:
                pt2 = { x: x, y: y - length + l };

                context.moveTo(x + l2, y - length + l);
                context.lineTo(x, y - length);
                context.lineTo(x - l2, y - length + l);
                context.lineTo(x + l2, y - length + l);
                break;
            case p1.divers.trajet.Direction.EAST:
                pt2 = { x: x + length - l, y: y };

                context.moveTo(x + length - l, y + l2);
                context.lineTo(x + length, y);
                context.lineTo(x + length - l, y - l2);
                context.lineTo(x + length - l, y + l2);

                break;
            case p1.divers.trajet.Direction.SOUTH:
                pt2 = { x: x, y: y + length - l };

                context.moveTo(x - l2, y + length - l);
                context.lineTo(x, y + length);
                context.lineTo(x + l2, y + length - l);
                context.lineTo(x - l2, y + length - l);
                break;
            case p1.divers.trajet.Direction.WEST:
                pt2 = { x: x - length + l, y: y };

                context.moveTo(x - length + l, y - l2);
                context.lineTo(x - length, y);
                context.lineTo(x - length + l, y + l2);
                context.lineTo(x - length + l, y - l2);
                break;
            case p1.divers.trajet.Direction.UNDEFINED:
/*                context.strokeStyle = "#ff0000";
                context.textAlign = "middle";
                context.textBaseline = "middle";
                context.font = length + "pt New roman";
                context.strokeText("?", x, y + length); */
                context.lineWidth = 3.;
                context.beginPath();
                context.moveTo(x, y);
                context.lineTo(x + length, y + length2);
                context.stroke();
                context.closePath();
                context.beginPath();
                context.lineTo(x + length, y);
                context.lineTo(x, y + length2);
                context.stroke();
                context.closePath();
                break;
        }

        if (direction != p1.divers.trajet.Direction.UNDEFINED) {
            context.fill();
            context.stroke();
            context.closePath();
            context.lineWidth = 3.;
            context.strokeStyle = "#ff0000";
            context.beginPath();
            context.moveTo(pt1.x, pt1.y),
            context.lineTo(pt2.x, pt2.y);
            context.stroke();
            context.closePath();
        }
    };

    this.getDirection = function() {
        return direction;
    };

    this.init = function (o, d) {
        origin = o;
        direction = d;
    };

    this.init = function (segment, pts_x, pts_y) {
        origin = {
            x: pts_x[segment.getOrigin().x],
            y: pts_y[segment.getOrigin().y]
        };
        direction = segment.getDirection();
    };

    this.init2 = function (d, x, y) {
        origin = { x: x, y: y };
        direction = d;
    };

// private attributes
    var origin;
    var direction;
};

p1.divers.trajet.View = function (mdl, div, n, m, min, max) {

// public methods
    this.error = function () {
        module.error();
    };

    this.getMaxSize = function() {
        return maxSize;
    };

    this.init = function (mdl, view, n, m, min, max) {
        ncolumn = n;
        nline = m;
        minSize = min;
        maxSize = max;
        module = mdl;
        model = new p1.divers.trajet.Model(ncolumn, nline, minSize, maxSize);
        init_div(view);
        controller = new p1.divers.trajet.Controller(model, this);
    };

    this.next = function () {
        model.next();
        draw_grid($('#grid_canvas_element'));
        draw_path($('#path_canvas_element'));
    };

    this.ok = function() {
        module.next();
    };

    this.update = function () {
        draw_path($('#path_canvas_element'));
    };

// private attributes
    var build_canvas = function (div) {
        var canvas_div = $('<div />', {
            style: 'background-color: #252538; width: 95%; padding-left: 0; padding-right: 0;' +
                'margin-left: auto; margin-right: auto;display: block',
            id: 'grid_canvas_id'
        });

        var canvas = $('<canvas/>', {
            style: 'padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto;' +
                'display: block',
            id: 'grid_canvas_element'
        });
        canvas.appendTo(canvas_div);
        canvas_div.appendTo(div);

        var js_canvas_div = document.getElementById("grid_canvas_id");
        var js_canvas = document.getElementById("grid_canvas_element");

        js_canvas.width = js_canvas_div.clientWidth * 0.9;
        js_canvas.height = window.innerHeight * 0.6;
        draw_grid(canvas);
    };

    var build_grid = function (view) {
        var canvas_div = $('<div />', {
            class: 'row'
        });

        canvas_div.appendTo(view);
        build_canvas(canvas_div);
    };

    var build_path = function (view) {
        var canvas_div = $('<div />', {
            style: 'background-color: #252538; width: 95%; padding-left: 0; padding-right: 0;' +
                'margin-left: auto; margin-right: auto;display: block',
            id: 'path_canvas_id'
        });

        var canvas = $('<canvas/>', {
            style: 'padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto;' +
                'display: block',
            id: 'path_canvas_element'
        });
        canvas.appendTo(canvas_div);
        canvas_div.appendTo(div);

        var js_canvas_div = document.getElementById("path_canvas_id");
        var js_canvas = document.getElementById("path_canvas_element");

        js_canvas.width = js_canvas_div.clientWidth * 0.9;
        js_canvas.height = window.innerHeight * 0.6 / nline;
        draw_path(canvas);
    };

    var build_spacing = function () {
        return $('<div/>', {
            style: 'padding: 10px;'
        });
    };

    var compute_grid_dimensions = function(canvas_width, canvas_height) {
        pts_x = [ ];
        pts_y = [ ];
        margin_x = 10;
        margin_y = 10;
        width = canvas_width - (margin_x * 2);
        height = canvas_height - (margin_y * 2);
        space_x = width / (ncolumn - 1);
        space_y = height / (nline - 1);
        width = space_x * (ncolumn - 1);
        height = space_y * (nline - 1);

        for (var i = 0; i < ncolumn; i++) {
            if (i == 0) {
                pts_x[i] = 0 + margin_x;
            } else {
                pts_x[i] = 0 + margin_x + (space_x * i);
            }
        }
        for (var i = 0; i < nline; i++) {
            if (i == 0) {
                pts_y[i] = 0 + margin_y;
            } else {
                pts_y[i] = 0 + margin_y + (space_y * i);
            }
        }
    };

    var compute_path_dimensions = function(canvas_width, canvas_height) {
        pts_x = [];
        pts_y = [];
        margin_x = 5;
        margin_y = 5;
        width = canvas_width;
        height = canvas_height;
        space_x = (width - 2 * margin_x) / maxSize;
        space_y = height;
        for (var i = 0; i <= maxSize; i++) {
            if (i == 0) {
                pts_x[i] = 0 + margin_x;
            }  else {
                pts_x[i] = 0 + margin_x + (space_x * i);
            }
        }
        pts_y[0] = margin_y;
        pts_y[1] = height - margin_y;
    };

    var draw_current_path = function(context) {
        for (var i = 0; i < model.size(); ++i) {
            var r = model.getResponse(i);
            var a = new p1.divers.trajet.Arrow();

            if (r == p1.divers.trajet.Direction.UNDEFINED) {
                a.init2(r, pts_x[i], margin_y);
                a.draw(context, space_x, space_y - 2 * margin_y);
            } else if (r == p1.divers.trajet.Direction.NORTH) {
                a.init2(r, pts_x[i] + space_x / 2, space_y);
                a.draw(context, space_y - margin_y, space_x < space_y ? space_x : space_y);
            } else if (r == p1.divers.trajet.Direction.EAST) {
                a.init2(r, pts_x[i] + margin_x, space_y / 2);
                a.draw(context, space_x - margin_x, space_x < space_y ? space_x : space_y);
            } else if (r == p1.divers.trajet.Direction.SOUTH) {
                a.init2(r, pts_x[i] + (space_x / 2), margin_y * 2);
                a.draw(context, space_y - margin_y, space_x < space_y ? space_x : space_y);
            } else if (r == p1.divers.trajet.Direction.WEST) {
                a.init2(r, pts_x[i] + (space_x - margin_x), space_y / 2);
                a.draw(context, space_x - margin_x, space_x < space_y ? space_x : space_y);
            }
        }
    };

    var draw_grid_and_path = function(context) {
        for (var i = 0; i < model.size(); ++i) {
            var s = model.get(i);
            var a = new p1.divers.trajet.Arrow();

            a.init(s, pts_x, pts_y);
            if (a.getDirection() == p1.divers.trajet.Direction.NORTH
                || a.getDirection() == p1.divers.trajet.Direction.SOUTH)
                a.draw(context, space_y, space_x < space_y ? space_x : space_y);
            else
                a.draw(context, space_x, space_x < space_y ? space_x : space_y);
        }

        context.lineWidth = 2;

        context.beginPath();
        context.strokeStyle = "#FF0000";
        context.arc(pts_x[model.start().x], pts_y[model.start().y], 7, 0.0, 2 * Math.PI, false);
        context.stroke();
        context.closePath();

        context.beginPath();
        context.strokeStyle = "#00FF00";
        context.arc(pts_x[model.end().x], pts_y[model.end().y], 7, 0.0, 2 * Math.PI, false);
        context.stroke();
        context.closePath();
    };

    var draw_grid = function (canvas) {
        var context = canvas[0].getContext("2d");
        var canvas_width = canvas[0].width;
        var canvas_height = canvas[0].height;

        context.lineWidth = 1.;
        context.strokeStyle = "#000000";
        context.fillStyle = "#ffffff";
        context.rect(0, 0, canvas_width, canvas_height);
        context.fill();
        context.stroke();
        compute_grid_dimensions(canvas_width, canvas_height);

        context.strokeStyle = "#C0C0C0";
        context.lineWidth = 1;
        for (var i = 0; i < pts_x.length; ++i) {
            context.moveTo(pts_x[i], margin_y);
            context.lineTo(pts_x[i], height + margin_y);
        }
        for (var i = 0; i < pts_y.length; ++i) {
            context.moveTo(margin_x, pts_y[i]);
            context.lineTo(width + margin_x, pts_y[i]);
        }
        context.stroke();

        draw_grid_and_path(context);
    };

    var draw_path = function (canvas) {
        var context = canvas[0].getContext("2d");
        var canvas_width = canvas[0].width;
        var canvas_height = canvas[0].height;

        compute_path_dimensions(canvas_width, canvas_height);

        context.lineWidth = 1.;
        context.strokeStyle = "#000000";
        context.fillStyle = "#ffffff";
        context.rect(0, 0, canvas_width, canvas_height);
        context.fill();
        context.stroke();

        draw_tab(context);
	    draw_current_path(context);
    };

    var draw_tab = function(context) {
        context.strokeStyle = "#C0C0C0";
        context.lineWidth = 2;
        for (var i = 0; i < pts_x.length; ++i) {
            context.moveTo(pts_x[i], margin_y);
            context.lineTo(pts_x[i], height - margin_y);
        }

        for (var i = 0; i < pts_y.length; ++i) {
            context.moveTo(margin_x, pts_y[i]);
            context.lineTo(width - margin_x, pts_y[i]);
        }
        context.stroke();
    };

    var init_div = function (view) {
        build_path(view);
        build_spacing().appendTo(view);
        build_grid(view);
    };

// private attributes
    var module;
    var model;
    var controller;

    var ncolumn;
    var nline;
    var minSize;
    var maxSize;

    var pts_x;
    var pts_y;
    var margin_x;
    var margin_y;
    var width;
    var height;
    var space_x;
    var space_y;

    this.init(mdl, div, n, m, min, max);
};