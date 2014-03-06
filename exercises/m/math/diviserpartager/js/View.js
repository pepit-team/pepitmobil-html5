m.math.diviserpartager.View = function (mdl, div) {

// public methods
    this.error = function () {
        module.error();
    };

    this.init = function (mdl, view) {
        module = mdl;
        model = new m.math.diviserpartager.Model();
        init_div(view);
        controller = new m.math.diviserpartager.Controller(model, this);
    };

    this.next = function () {
        model.next();

        this.update();
    };

    this.update = function () {
        if (model.isOkResult()) {
            module.next();
        }
    };

// private methods
    var build_col_exercise = function(view){

// md and lg devices
        var exercise_div_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'background-color: #ffffff; padding: 10px; margin-bottom:10px; border-radius: 6px 6px 6px 6px'
        });

        //Creation de la classe row
        var row_md_lg = $('<div/>', {
            class: 'row'
        });

        //Div des colonnes
        var col_left_md_lg = $('<div/>', {
            class: 'col-md-8'
        });
        var col_right_md_lg = $('<div/>', {
            class: 'col-md-4'
        });

        col_left_md_lg.appendTo(row_md_lg);
        col_right_md_lg.appendTo(row_md_lg);
        row_md_lg.appendTo(exercise_div_md_lg);
        exercise_div_md_lg.appendTo(view);

// xs and ms devices
        var exercise_div_xs_ms = $('<div/>', {
            class: 'visible-xs visible-sm',
            style: 'background-color: #ffffff; padding: 10px; border-radius: 6px 6px 6px 6px'
        });

        //Creation de la classe row
        var row_xs_ms = $('<div/>', {
            class: 'row'
        });

        //Div des colonnes
        var col_left_xs_ms = $('<div/>', {
            class: 'col-xs-8'
        });
        var col_right_xs_ms = $('<div/>', {
            class: 'col-xs-4'
        });

        col_left_xs_ms.appendTo(row_xs_ms);
        col_right_xs_ms.appendTo(row_xs_ms);
        row_xs_ms.appendTo(exercise_div_xs_ms);
        exercise_div_xs_ms.appendTo(view);
    };

    var init_div = function (view) {
        var button;


        build_col_exercise(view);


        button = $('<a/>', {
            href: '#',
            class: 'btn btn-lg btn-warning active',
            id: 'valid',
            role: 'button',
            html: 'valid'
        });
        button.appendTo(div);
    };

// private attributes
    var module;
    var model;
    var controller;

    this.init(mdl, div);
};