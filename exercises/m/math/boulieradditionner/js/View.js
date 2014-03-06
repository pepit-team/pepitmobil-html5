m.math.boulieradditionner.View = function (mdl, div) {

// public methods
    this.error = function () {
        module.error();
    };

    this.init = function (mdl, view) {
        module = mdl;
        model = new m.math.boulieradditionner.Model();
        init_div(view);
        controller = new m.math.boulieradditionner.Controller(model, this);
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
    var build_abacus = function(view, lO){
        //md and lg devices
        var line_div_abacus_md_lg = $('<div/>', {
            class: 'visible-md visible-lg text-center',
            style: 'background-color: #2d6ca2; margin:10px; padding: 2px; border-radius: 6px 6px 6px 6px'
        });

        var line_abacus_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'background:url("exercises/m/math/boulieradditionner/img/line.jpg")repeat-x; background-position:center; min-height:10px; margin:10px;'
        });

        //img
        var line_abacus_table_md_lg = $('<table/>',{
            class: 'visible-md visible-lg'
        });
        var line_abacus_tr_md_lg = $('<tr/>',{
            class: 'visible-md visible-lg',
            style: 'margin:auto;'
        });

        for(var i = 0; i<lO;i++){
            $('<td/>',{
                html: '<img src="exercises/m/math/boulieradditionner/img/boule.png"/>',
                class: 'visible-md visible-lg'
            }).appendTo(line_abacus_tr_md_lg);
        }

        line_abacus_tr_md_lg.appendTo(line_abacus_table_md_lg);
        line_abacus_table_md_lg.appendTo(line_abacus_md_lg);
        line_abacus_md_lg.appendTo(line_div_abacus_md_lg);
        line_div_abacus_md_lg.appendTo(view);

        //xs and ms devices
        var line_div_abacus_xs_ms = $('<div/>', {
            class: 'visible-xs visible-sm',
            style: 'background-color: #2d6ca2; margin:10px; padding: 2px; border-radius: 6px 6px 6px 6px'
        });

        var line_abacus_xs_ms = $('<div/>', {
            class: 'visible-xs visible-sm',
            style: 'background:url("exercises/m/math/boulieradditionner/img/line.jpg")repeat-x; background-position:center; min-height:10px; margin:10px;'
        });

        var line_abacus_table_xs_sm = $('<table/>',{
            class: 'visible-xs visible-sm'
        });
        var line_abacus_tr_xs_sm = $('<tr/>',{
            class: 'visible-xs visible-sm',
            style: 'margin:auto;'
        });

        for(var i = 0; i<lO;i++){
            $('<td/>',{
                html: '<img src="exercises/m/math/boulieradditionner/img/boule.png"/>',
                class: 'visible-xs visible-sm img-rounded'
            }).appendTo(line_abacus_tr_xs_sm);
        }

        line_abacus_tr_xs_sm.appendTo(line_abacus_table_xs_sm);
        line_abacus_table_xs_sm.appendTo(line_abacus_xs_ms);
        line_abacus_xs_ms.appendTo(line_div_abacus_xs_ms);
        line_div_abacus_xs_ms.appendTo(view);

    }

    var build_operator = function(view){
        //md and lg devices
        var line_div_operator_md_lg = $('<div/>', {
            class: 'visible-md visible-lg text-center',
            style: 'background-color: #2d6ca2; padding: 2px; border-radius: 6px 6px 6px 6px'
        });

        var button_plus_md_lg = $('<a/>', {
            href: '#',
            class: 'btn btn-lg btn-md btn-warning active',
            id: 'plus',
            role: 'button',
            style: 'margin:5px;',
            html: '+'
        });

        var input_result_md_lg = $('<input/>',{
            style: 'visible-md visible-lg',
            placeholder:'Résultat'
        });

        var button_minus_md_lg = $('<a/>', {
            href: '#',
            class: 'btn btn-lg btn-md btn-warning active',
            id: 'minus',
            role: 'button',
            style: 'margin:5px;',
            html: '-'
        });

        var line_div_valid_md_lg = $('<div/>', {
            class: 'visible-md visible-lg text-center'
        });

        var button_valid_md_lg = $('<a/>', {
            href: '#',
            class: 'btn btn-lg btn-md btn-warning active',
            id: 'valid',
            role: 'button',
            style: 'margin:5px; background:#04B404; text-transform:uppercase; border:0px; font-size:10pt',
            html: 'Valider'
        });


        button_plus_md_lg.appendTo(line_div_operator_md_lg);
        input_result_md_lg.appendTo(line_div_operator_md_lg);
        button_minus_md_lg.appendTo(line_div_operator_md_lg);
        button_valid_md_lg.appendTo(line_div_valid_md_lg);
        line_div_valid_md_lg.appendTo(line_div_operator_md_lg);
        line_div_operator_md_lg.appendTo(view);

        //xs and ms devices
        var line_div_operator_xs_sm = $('<div/>', {
            class: 'visible-xs visible-sm text-center',
            style: 'background-color: #2d6ca2; padding: 2px; border-radius: 6px 6px 6px 6px'
        });

        var button_plus_xs_sm = $('<a/>', {
            href: '#',
            class: 'btn btn-sm btn-xs btn-warning active',
            id: 'plus',
            role: 'button',
            style: 'margin:5px;',
            html: '+'
        });

        var input_result_xs_sm = $('<input/>',{
            class: ' visible_xs visible_sm',
            placeholder:'Résultat'
        });

        var button_minus_xs_sm = button = $('<a/>', {
            href: '#',
            class: 'btn btn-sm btn-xs btn-warning active',
            id: 'minus',
            role: 'button',
            style: 'margin:5px;',
            html: '-'
        });

        var line_div_valid_xs_sm = $('<div/>', {
            class: 'visible-xs visible-sm text-center'
        });

        var button_valid_xs_sm = $('<a/>', {
            href: '#',
            class: 'btn btn-xs btn-sm btn-warning active',
            id: 'valid',
            role: 'button',
            style: 'margin:5px; background:#04B404; text-transform:uppercase; border:0px; font-size:10pt',
            html: 'Valider'
        });

        button_plus_xs_sm.appendTo(line_div_operator_xs_sm);
        input_result_xs_sm.appendTo(line_div_operator_xs_sm);
        button_minus_xs_sm.appendTo(line_div_operator_xs_sm);
        button_valid_xs_sm.appendTo(line_div_valid_xs_sm);
        line_div_valid_xs_sm.appendTo(line_div_operator_xs_sm);
        line_div_operator_xs_sm.appendTo(view);
    }

    var build_operation = function(view, lO, rO){

        var operation = lO + " + " + rO + " = ";

        // md and lg devices
        var line_div_operation_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'background-color: #2d6ca2; padding: 2px; border-radius: 6px 6px 6px 6px'
        });

        var line_div_operation_order_md_lg =  $('<div/>', {
            class: 'visible-md visible-lg text-center',
            style: 'text-decoration:underline',
            html: '<h5>Complétez le boulier et entrez le résultat de l\'addition</h5>'
        });

        var line_h1_operation_md_lg = $('<h1/>',{
            class: 'visible-md visible-lg text-center',
            style: 'margin:5px; color:white;',
            html: operation
        });

        line_div_operation_order_md_lg.appendTo(line_div_operation_md_lg);
        line_h1_operation_md_lg.appendTo(line_div_operation_md_lg);
        line_div_operation_md_lg.appendTo(view);

        // xs and ms devices
        var line_div_operation_xs_sm = $('<div/>', {
            class: 'visible-xs visible-sm',
            style: 'background-color: #2d6ca2; padding: 2px; border-radius: 6px 6px 6px 6px'
        });

        var line_div_operation_order_xs_sm =  $('<div/>', {
            class: 'visible-xs visible-sm text-center',
            style: 'text-decoration:underline',
            html: '<h5>Complétez le boulier et entrez le résultat de l\'addition</h5>'
        });

        var line_h1_operation_xs_sm = $('<h1/>',{
            class: 'visible-xs visible-sm text-center',
            style: 'margin:5px; color:white;',
            html: operation
        });

        line_div_operation_order_xs_sm.appendTo(line_div_operation_xs_sm);
        line_h1_operation_xs_sm.appendTo(line_div_operation_xs_sm);
        line_div_operation_xs_sm.appendTo(view);
    }

    var init_div = function (view) {

        var leftOperand = Math.floor((Math.random()*6)+1);
        var rightOperand = Math.floor((Math.random()*6)+1);

        build_operation(view,leftOperand,rightOperand);//Parameters : view, leftOperand, rightOperand
        build_abacus(view,leftOperand);//Parameters : view,
        build_operator(view);//parameters : view, leftOperand

    };

// private attributes
    var module;
    var model;
    var controller;

    this.init(mdl, div);
};