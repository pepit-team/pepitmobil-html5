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
            url + 'img/exercises/m/math/completeradditionner/card_' + model.getFirstOperand() + '.png');
        $('#img_operand_2').attr('src',
            url + 'img/exercises/m/math/completeradditionner/card_' + model.getSecondOperand() + '.png');
        $('#img_result').attr('src',
            url + 'img/exercises/m/math/completeradditionner/card_0.png');
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
            $('#img_result').attr('src', url + 'img/exercises/m/math/completeradditionner/card_' +
                model.getResult() + '.png');
            module.next();
        } else {
            $('#result').html('?');
        }
    };

// private methods
    var build_button_for_response = function (name) {
        var button = document.createElement('div');
        var link = document.createElement('a');

        button.className = 'col-md-2';
        button.appendChild(link);

        setAttributes(link, {
            href: '#',
            class: 'btn btn-ms active',
            id: 'button_' + name,
            role: 'button'
        });
        link.innerHTML = '<div style="font-size: 80px; color: #006600; text-align: center; font-weight: bold;" id="' +
            name + '">?</div>';

        return button;
    };

    var build_button_with_number = function (i, top) {
        var button = document.createElement('div');
        var table = document.createElement('table');
        var first_row = document.createElement('tr');
        var first_cell = document.createElement('td');
        var link = document.createElement('a');

        button.className = 'col-md-2';
        button.appendChild(table);
        table.style = 'text-align: center';
        first_row.appendChild(first_cell);

        setAttributes(link, {
            href: '#',
            class: 'btn btn-primary btn-ms active',
            id: 'button_' + i,
            role: 'button'
        });
        link.innerHTML = '<h1>' + i + '</h1>';

        first_cell.appendChild(link);

        var second_row = document.createElement('tr');
        var second_cell = document.createElement('td');
        var text_div = document.createElement('div');
        var text = document.createTextNode(numbers[i]);

        second_row.appendChild(second_cell);
        text_div.appendChild(text);
        text_div.style = 'font-size: 20px; color: #ffffff;';
        second_cell.appendChild(text_div);
        if (top) {
            table.appendChild(second_row);
            table.appendChild(first_row);
        } else {
            table.appendChild(first_row);
            table.appendChild(second_row);
        }
        return button;
    };

    var build_image = function (i, name) {
        var img = document.createElement('img');

        img.src = url + 'img/exercises/m/math/completeradditionner/card_' + i + '.png';
        img.height = height - 550 > 200 ? height - 550 : 200;
        img.id = 'img_' + name;
        return img;
    };

    var build_line_with_numbers = function (view, min, max, top) {
        var line_div = document.createElement('div');
        var row = document.createElement('div');

        line_div.style = 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px';
        row.className = 'row';
        for (var i = min; i <= max; i++) {
            row.appendChild(build_button_with_number(i, top));
        }
        line_div.appendChild(row);
        view.appendChild(line_div);
    };

    var build_operator = function (op) {
        var text_div = document.createElement('div');
        var text = document.createTextNode(op);

        text_div.appendChild(text);
        text_div.style = 'font-size: 80px; color: #006600; text-align: center; font-weight: bold;';
        return text_div;
    };

    var build_operation = function (view, x, y) {
        var global_div = document.createElement('div');
        var table = document.createElement('table');
        var row_1 = document.createElement('tr');
        var row_2 = document.createElement('tr');
        var cell_1_1 = document.createElement('td');
        var cell_1_2 = document.createElement('td');
        var cell_1_3 = document.createElement('td');
        var cell_1_4 = document.createElement('td');
        var cell_1_5 = document.createElement('td');
        var cell_2_1 = document.createElement('td');
        var cell_2_2 = document.createElement('td');
        var cell_2_3 = document.createElement('td');
        var cell_2_4 = document.createElement('td');
        var cell_2_5 = document.createElement('td');

        global_div.style = 'background-color: #ffffff; padding: 10px; border-radius: 6px 6px 6px 6px';
        global_div.appendChild(table);
        table.appendChild(row_1);
        row_1.appendChild(cell_1_1);
        row_1.appendChild(cell_1_2);
        row_1.appendChild(cell_1_3);
        row_1.appendChild(cell_1_4);
        row_1.appendChild(cell_1_5);
        cell_1_1.appendChild(build_image(x, 'operand_1'));
        cell_1_2.appendChild(build_operator('+'));
        cell_1_3.appendChild(build_image(y, 'operand_2'));
        cell_1_4.appendChild(build_operator('='));
        cell_1_5.appendChild(build_image(0, 'result'));

        table.appendChild(row_2);
        row_2.appendChild(cell_2_1);
        row_2.appendChild(cell_2_2);
        row_2.appendChild(cell_2_3);
        row_2.appendChild(cell_2_4);
        row_2.appendChild(cell_2_5);
        cell_2_1.appendChild(build_button_for_response('number_1'));
        cell_2_2.appendChild(build_operator(''));
        cell_2_3.appendChild(build_button_for_response('number_2'));
        cell_2_4.appendChild(build_operator(''));
        cell_2_5.appendChild(build_button_for_response('result'));

        view.appendChild(global_div);
    };

    var build_spacing = function (view) {
        var spacing_div = document.createElement('div');

        spacing_div.style = 'padding: 10px;';
        view.appendChild(spacing_div);
    };

    var init_div = function (view) {
        view.style = 'background-color: #404060; padding: 10px;';
        build_line_with_numbers(view, 1, 6, false);
        build_spacing(view);
        build_operation(view, model.getFirstOperand(), model.getSecondOperand());
        build_spacing(view);
        build_line_with_numbers(view, 7, 12, true);
    };

    var setAttributes = function (el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
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

    this.init(mdl, u, div[0], number, max);
};