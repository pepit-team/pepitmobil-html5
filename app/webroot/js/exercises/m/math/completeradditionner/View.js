m.math.completeradditionner.View = function (div, number, max) {

// public methods

// private methods
    var build_button_with_number = function (i) {
        var button = document.createElement('div');
        var table = document.createElement('table');
        var first_row = document.createElement('tr');
        var first_cell = document.createElement('td');
        var link = document.createElement('a');

        button.className = 'col-md-2';
        button.appendChild(table);
        table.appendChild(first_row);
        table.style = 'text-align: center';
        first_row.appendChild(first_cell);
        link.href = '#';
        link.className = 'btn btn-primary btn-ms active';
        link.id = 'button_' + i;
        link.setAttribute('role', 'button');
        link.innerHTML = '<h1>' + i + '</h1>';
        first_cell.appendChild(link);

        var second_row = document.createElement('tr');
        var second_cell = document.createElement('td');
        var text_div = document.createElement('div');
        var text = document.createTextNode(numbers[i]);

        table.appendChild(second_row);
        second_row.appendChild(second_cell);
        text_div.appendChild(text);
        text_div.style = 'font-size: 20px; color: #ffffff;';
        second_cell.appendChild(text_div);
        return button;
    };

    var build_image = function (i) {
        var img = document.createElement('img');

        img.src = '/app/webroot/img/exercises/m/math/completeradditionner/card_' + i + '.png';
        img.height = height - 550 > 200 ? height - 550 : 200;
        return img;
    };

    var build_line_with_numbers = function (view, min, max) {
        var line_div = document.createElement('div');
        var row = document.createElement('div');

        line_div.style = 'background-color: #252538; padding: 10px; border-radius: 6px 6px 6px 6px';
        row.className = 'row';
        for (var i = min; i <= max; i++) {
            row.appendChild(build_button_with_number(i));
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
        cell_1_1.appendChild(build_image(x));
        cell_1_2.appendChild(build_operator('+'));
        cell_1_3.appendChild(build_image(y));
        cell_1_4.appendChild(build_operator('='));
        cell_1_5.appendChild(build_operator(''));

        table.appendChild(row_2);
        row_2.appendChild(cell_2_1);
        row_2.appendChild(cell_2_2);
        row_2.appendChild(cell_2_3);
        row_2.appendChild(cell_2_4);
        row_2.appendChild(cell_2_5);
        cell_2_1.appendChild(build_operator('?'));
        cell_2_2.appendChild(build_operator(''));
        cell_2_3.appendChild(build_operator('?'));
        cell_2_4.appendChild(build_operator(''));
        cell_2_5.appendChild(build_operator('?'));

        view.appendChild(global_div);
    };

    var build_spacing = function (view) {
        var spacing_div = document.createElement('div');

        spacing_div.style = 'padding: 10px;';
        view.appendChild(spacing_div);
    };

    var init_div = function(view) {
        view.style = 'background-color: #404060; padding: 10px;';
        build_line_with_numbers(view, 1, 6);
        build_spacing(view);
        build_operation(view, model.firstOperand(), model.secondOperand());
        build_spacing(view);
        build_line_with_numbers(view, 7, 12);
    };

    var init = function (view, number, max) {
        height = window.innerHeight;
        width = window.innerWidth;

        model = new m.math.completeradditionner.Model(number, max);
        controller = new m.math.completeradditionner.Controller(model);

        init_div(view);
    };

// private attributes
    var numbers = [ 'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq',
        'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze' ];
    var height;
    var width;
    var model;
    var controller;

    init(div, number, max);
};