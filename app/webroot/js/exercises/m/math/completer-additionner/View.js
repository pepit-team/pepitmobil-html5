m.math.completeradditionner.View = function (mdl, u, div, number, max) {

// public methods
    this.error = function() {
        module.error();
    };

    this.init = function (mdl, u, view, number, max) {
        height = window.innerHeight;
        width = window.innerWidth;

        module = mdl;
        url = u;
        model = new m.math.completeradditionner.Model(number, max);
        init_div(view);
        controller = new m.math.completeradditionner.Controller(model, this);
    };

    this.next = function() {
        model.next();
        $('#img_operand_1').attr('src',
            url + 'img/exercises/m/math/completer-additionner/card_' + model.getFirstOperand() + '.png');
        $('#img_operand_2').attr('src',
            url + 'img/exercises/m/math/completer-additionner/card_' + model.getSecondOperand() + '.png');
        $('#img_result').attr('src',
            url + 'img/exercises/m/math/completer-additionner/card_0.png');
        this.update();
    };

    this.update = function () {
        for (var i = 1; i <= 12; ++i) {
            var button = $('#button_' + i);

            if (model.getSelectedNumber() == i) {
                button.attr('class', 'btn btn-warning btn-ms active');
            } else {
                button.attr('class', 'btn btn-primary btn-ms active');
            }
        }
        if (model.isOkFirstOperand()) {
            $('#number_1').html(model.getFirstOperand());
        } else {
            $('#number_1').html('?');
        }
        if (model.isOkSecondOperand()) {
            $('#number_2').html(model.getSecondOperand());
        } else {
            $('#number_2').html('?');
        }
        if (model.isOkResult()) {
            $('#result').html(model.getResult());
            $('#img_result').attr('src', url + 'img/exercises/m/math/completer-additionner/card_' +
                model.getResult() + '.png');
            module.next();
        } else {
            $('#result').html('?');
        }
    };

// private methods
    var build_button_for_response = function (name) {
        var button = $('<div/>', {
           class: 'col-md-2'
        });
        var link = $('<a/>', {
            href: '#',
            class: 'btn btn-ms active',
            id: 'button_' + name,
            role: 'button',
            html: '<div style="font-size: 80px; color: #006600; text-align: center; font-weight: bold;" id="' +
                name + '">?</div>'
        });

        link.appendTo(button);
        return button;
    };

    var build_button_with_number = function (i, top) {
        var button = $('<div/>', {
            class: 'col-md-2'
        });
        var table = $('<table/>', {
            style: 'text-align: center'
        });
        var first_row = $('<tr/>', { });
        var first_cell = $('<td/>', { });
        var link = $('<a/>', {
            href: '#',
            class: 'btn btn-primary btn-ms active',
            id: 'button_' + i,
            role: 'button',
            html: '<h1>' + i + '</h1>'
        });

        table.appendTo(button);
        first_cell.appendTo(first_row);
        link.appendTo(first_cell);

        var second_row = $('<tr/>', { });
        var second_cell = $('<td/>', { });
        var text_div = $('<div/>', {
            style: 'font-size: 20px; color: #ffffff;',
            html: numbers[i]
        });

        second_cell.appendTo(second_row);
        text_div.appendTo(second_cell);
        if (top) {
            second_row.appendTo(table);
            first_row.appendTo(table);
        } else {
            first_row.appendTo(table);
            second_row.appendTo(table);
        }
        return button;
    };

    var build_image = function (i, name) {
        return $('<img/>', {
            src: url + 'img/exercises/m/math/completer-additionner/card_' + i + '.png',
            height: height - 550 > 200 ? height - 550 : 200,
            id: 'img_' + name
        });
    };

    var build_line_with_numbers = function (min, max, top) {
        var line_div = $('<div/>', {
            style: 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px'
        });
        var row = $('<div/>', {
            class: 'row'
        });

        for (var i = min; i <= max; i++) {
            build_button_with_number(i, top).appendTo(row);
        }
        row.appendTo(line_div);
        return line_div;
    };

    var build_operator = function (op) {
        return $('<div/>', {
            style: 'font-size: 80px; color: #006600; text-align: center; font-weight: bold;',
            html: op
        });
    };

    var build_operation = function (x, y) {
        var global_div = $('<div/>', {
            style: 'background-color: #ffffff; padding: 10px; border-radius: 6px 6px 6px 6px'
        });
        var table = $('<table/>');
        var row_1 = $('<tr/>');
        var row_2 = $('<tr/>');
        var cell_1_1 = $('<td/>');
        var cell_1_2 = $('<td/>');
        var cell_1_3 = $('<td/>');
        var cell_1_4 = $('<td/>');
        var cell_1_5 = $('<td/>');
        var cell_2_1 = $('<td/>');
        var cell_2_2 = $('<td/>');
        var cell_2_3 = $('<td/>');
        var cell_2_4 = $('<td/>');
        var cell_2_5 = $('<td/>');

        table.appendTo(global_div);
        row_1.appendTo(table);
        cell_1_1.appendTo(row_1);
        cell_1_2.appendTo(row_1);
        cell_1_3.appendTo(row_1);
        cell_1_4.appendTo(row_1);
        cell_1_5.appendTo(row_1);
        build_image(x, 'operand_1').appendTo(cell_1_1);
        build_operator('+').appendTo(cell_1_2);
        build_image(y, 'operand_2').appendTo(cell_1_3);
        build_operator('=').appendTo(cell_1_4);
        build_image(0, 'result').appendTo(cell_1_5);

        row_2.appendTo(table);
        cell_2_1.appendTo(row_2);
        cell_2_2.appendTo(row_2);
        cell_2_3.appendTo(row_2);
        cell_2_4.appendTo(row_2);
        cell_2_5.appendTo(row_2);

        build_button_for_response('number_1').appendTo(cell_2_1);
        build_operator('').appendTo(cell_2_2);
        build_button_for_response('number_2').appendTo(cell_2_3);
        build_operator('').appendTo(cell_2_4);
        build_button_for_response('result').appendTo(cell_2_5);

        return global_div;
    };

    var build_spacing = function () {
        return $('<div/>', {
            style: 'padding: 10px;'
        });
    };

    var init_div = function (view) {
        view.css({
            'background-color': '#404060',
            'padding': '10px'
        });
        build_line_with_numbers(1, 6, false).appendTo(view);
        build_spacing().appendTo(view);
        build_operation(model.getFirstOperand(), model.getSecondOperand()).appendTo(view);
        build_spacing().appendTo(view);
        build_line_with_numbers(7, 12, true).appendTo(view);
    };

// private attributes
    var numbers = [ 'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq',
        'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze' ];
    var height;
    var width;
    var url;

    var module;
    var model;
    var controller;

    this.init(mdl, u, div, number, max);
};