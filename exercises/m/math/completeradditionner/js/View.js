m.math.completeradditionner.View = function (mdl, div, number, max) {

// public methods
    this.error = function () {
        module.error();
    };

    this.init = function (mdl, view, number, max) {
        height = window.innerHeight;
        width = window.innerWidth;

        module = mdl;
        model = new m.math.completeradditionner.Model(number, max);
        init_div(view);
        controller = new m.math.completeradditionner.Controller(model, this);
    };

    this.next = function () {
        model.next();

// md and lg devices
        $('#img_operand_1_md_lg').attr('src',
            'exercises/m/math/completeradditionner/img/card_' + model.getFirstOperand() + '.png');
        $('#img_operand_2_md_lg').attr('src',
            'exercises/m/math/completeradditionner/img/card_' + model.getSecondOperand() + '.png');
        $('#img_result_md_lg').attr('src',
            'exercises/m/math/completeradditionner/img/card_0.png');

// xs and sm devices
        $('#img_operand_1_xs_sm').attr('src',
            'exercises/m/math/completeradditionner/img/card_' + model.getFirstOperand() + '.png');
        $('#img_operand_2_xs_sm').attr('src',
            'exercises/m/math/completeradditionner/img/card_' + model.getSecondOperand() + '.png');
        $('#img_result_xs_sm').attr('src',
            'exercises/m/math/completeradditionner/img/card_0.png');
        this.update();
    };

    this.update = function () {
        for (var i = 1; i <= 12; ++i) {
            var button = $('#button_' + i + '_md_lg');

            if (model.getSelectedNumber() == i) {
                button.attr('class', 'btn btn-warning btn-ms active');
            } else {
                button.attr('class', 'btn btn-primary btn-ms active');
            }
        }
        for (var i = 1; i <= 12; ++i) {
            var button = $('#button_' + i + '_xs_sm');

            if (model.getSelectedNumber() == i) {
                button.attr('class', 'btn btn-warning btn-xs active');
            } else {
                button.attr('class', 'btn btn-primary btn-xs active');
            }
        }
        if (model.isOkFirstOperand()) {
            $('#number_1_md_lg').html(model.getFirstOperand());
            $('#number_1_xs_sm').html(model.getFirstOperand());
        } else {
            $('#number_1_md_lg').html('?');
            $('#number_1_xs_sm').html('?');
        }
        if (model.isOkSecondOperand()) {
            $('#number_2_md_lg').html(model.getSecondOperand());
            $('#number_2_xs_sm').html(model.getSecondOperand());
        } else {
            $('#number_2_md_lg').html('?');
            $('#number_2_xs_sm').html('?');
        }
        if (model.isOkResult()) {
            $('#result_md_lg').html(model.getResult());
            $('#result_xs_sm').html(model.getResult());
            $('#img_result_md_lg').attr('src', 'exercises/m/math/completeradditionner/img/card_' +
                model.getResult() + '.png');
            $('#img_result_xs_sm').attr('src', 'exercises/m/math/completeradditionner/img/card_' +
                model.getResult() + '.png');
            module.next();
        } else {
            $('#result_md_lg').html('?');
            $('#result_xs_sm').html('?');
        }
    };

// private methods
    var build_button_for_response = function (name, style) {
        var button;
        var link;

        if (style === 'md_lg') {
            button = $('<div/>', {
                class: 'col-md-2'
            });
            link = $('<a/>', {
                href: '#',
                class: 'btn btn-ms active',
                id: 'button_' + name + '_' + style,
                role: 'button',
                html: '<div style="font-size: 80px; color: #006600; text-align: center; font-weight: bold;" id="' +
                    name + '_' + style + '">?</div>'
            });
        } else if (style === 'xs_sm') {
            button = $('<div/>', {
                class: 'col-xs-2'
            });
            link = $('<a/>', {
                href: '#',
                class: 'btn btn-xs active',
                id: 'button_' + name + '_' + style,
                role: 'button',
                html: '<div style="font-size: 30px; color: #006600; text-align: center; font-weight: bold;" id="' +
                    name + '_' + style + '">?</div>'
            });
        }
        link.appendTo(button);
        return button;
    };

    var build_button_with_number = function (i, top, style) {
        var button;

        if (style === 'md_lg') {
            button = $('<div/>', {
                class: 'col-md-2'
            });
        } else if (style === 'xs_sm') {
            button = $('<div/>', {
                class: 'col-xs-2'
            });
        }
        var table = $('<table/>', {
            style: 'text-align: center'
        });
        var first_row = $('<tr/>', { });
        var first_cell = $('<td/>', { });
        var link = $('<a/>', {
            href: '#',
            id: 'button_' + i + '_' + style,
            role: 'button'
        });

        if (style === 'md_lg') {
            link.addClass('btn btn-primary btn-md active');
            link.html('<h1>' + i + '</h1>');
        } else if (style === 'xs_sm') {
            link.addClass('btn btn-primary btn-xs active');
            link.html('<h3>' + i + '</h3>');
        }

        table.appendTo(button);
        first_cell.appendTo(first_row);
        link.appendTo(first_cell);

        var second_row = $('<tr/>', { });
        var second_cell = $('<td/>', { });
        var text_div;

        if (style === 'md_lg') {
            text_div = $('<div/>', {
                style: 'font-size: 20px; color: #ffffff;',
                html: numbers[i]
            });
        } else if (style === 'xs_sm') {
            text_div = $('<div/>', {
                style: 'font-size: 14px; color: #ffffff;',
                html: numbers[i]
            });
        }

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

    var build_image = function (i, name, style) {
        if (style === 'md_lg') {
            return $('<img/>', {
                src: 'exercises/m/math/completeradditionner/img/card_' + i + '.png',
                height: height - 550 > 200 ? height - 550 : 200,
                id: 'img_' + name + '_' + style
            });
        } else if (style === 'xs_sm') {
            return $('<img/>', {
                src: 'exercises/m/math/completeradditionner/img/card_' + i + '.png',
                height: height - 550 > 110 ? height - 550 : 110,
                id: 'img_' + name + '_' + style
            });
        }
    };

    var build_line_with_numbers = function (view, min, max, top) {
// md and lg devices
        var line_div_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px'
        });
        var row_md_lg = $('<div/>', {
            class: 'row'
        });

        for (var i = min; i <= max; i++) {
            build_button_with_number(i, top, 'md_lg').appendTo(row_md_lg);
        }
        row_md_lg.appendTo(line_div_md_lg);
        line_div_md_lg.appendTo(view);

// xs and ms devices
        var line_div_xs_ms = $('<div/>', {
            class: 'visible-xs visible-sm',
            style: 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px'
        });
        var row_xs_ms = $('<div/>', {
            class: 'row'
        });

        for (var i = min; i <= max; i++) {
            build_button_with_number(i, top, 'xs_sm').appendTo(row_xs_ms);
        }
        row_xs_ms.appendTo(line_div_xs_ms);
        line_div_xs_ms.appendTo(view);
    };

    var build_operator = function (op, style) {
        if (style === 'md_lg') {
            return $('<div/>', {
                style: 'font-size: 80px; color: #006600; text-align: center; font-weight: bold;',
                html: op
            });
        } else if (style === 'xs_sm') {
            return $('<div/>', {
                style: 'font-size: 40px; color: #006600; text-align: center; font-weight: bold;',
                html: op
            });
        }
    };

    var build_operation = function (view, x, y) {
// md and lg devices
        var global_div_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'background-color: #ffffff; padding: 10px; border-radius: 6px 6px 6px 6px'
        });

        build_operation_line(global_div_md_lg, x, y, 'md_lg');
        global_div_md_lg.appendTo(view);

// xs and ms devices
        var global_div_xs_sm = $('<div/>', {
            class: 'visible-xs visible-sm',
            style: 'background-color: #ffffff; padding: 10px; border-radius: 6px 6px 6px 6px'
        });

        build_operation_line(global_div_xs_sm, x, y, 'xs_sm');
        global_div_xs_sm.appendTo(view);

    };

    var build_operation_line = function (div, x, y, style) {
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

        table.appendTo(div);
        row_1.appendTo(table);
        cell_1_1.appendTo(row_1);
        cell_1_2.appendTo(row_1);
        cell_1_3.appendTo(row_1);
        cell_1_4.appendTo(row_1);
        cell_1_5.appendTo(row_1);
        build_image(x, 'operand_1', style).appendTo(cell_1_1);
        build_operator('+', style).appendTo(cell_1_2);
        build_image(y, 'operand_2', style).appendTo(cell_1_3);
        build_operator('=', style).appendTo(cell_1_4);
        build_image(0, 'result', style).appendTo(cell_1_5);

        row_2.appendTo(table);
        cell_2_1.appendTo(row_2);
        cell_2_2.appendTo(row_2);
        cell_2_3.appendTo(row_2);
        cell_2_4.appendTo(row_2);
        cell_2_5.appendTo(row_2);

        build_button_for_response('number_1', style).appendTo(cell_2_1);
        build_operator('', style).appendTo(cell_2_2);
        build_button_for_response('number_2', style).appendTo(cell_2_3);
        build_operator('', style).appendTo(cell_2_4);
        build_button_for_response('result', style).appendTo(cell_2_5);
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
        build_line_with_numbers(view, 1, 6, false);
        build_spacing().appendTo(view);
        build_operation(view, model.getFirstOperand(), model.getSecondOperand());
        build_spacing().appendTo(view);
        build_line_with_numbers(view, 7, 12, true);
    };

// private attributes
    var numbers = [ 'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq',
        'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze' ];
    var height;
    var width;

    var module;
    var model;
    var controller;

    this.init(mdl, div, number, max);
};