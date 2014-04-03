m.math.boulieradditionner.View = function (mdl, div, max) {

// public methods
    this.error = function () {
        module.error();
    };

    this.init = function (mdl, view) {
        width = window.innerWidth;
        height= window.innerHeight;

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


    var build_abacus = function (div, lO) {
        //xs & sm
        var abacus_div_xs_sm = $('<div/>', {
            class: 'visible-sm visible-xs',
            style: 'text-align:center;'
        });

        var abacus_table_xs_sm = $('<table/>', {
            class: 'table visible-sm visible-xs',
            style: 'margin:auto;'
        });

        abacus_table_xs_sm.appendTo(abacus_div_xs_sm);
        abacus_div_xs_sm.appendTo(div);

        //md & lg
        var abacus_div_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'text-align:center;'
        });

        var abacus_table_md_lg = $('<table/>', {
            id: 'abacus_table',
            class: 'table table-condensed',
            style: 'max-width:60%; margin:auto; border-left:10px solid #B4B4B4; border-right:10px solid #B4B4B4;'
        });

        /* GENERATION DU TABLEAU */
        var maximum = 5; //A INIT AVEC LA VALEUR MAX DU CALCUL DE L'EXERCICE

        //On fait un tableau de 5 colonnes
        var nb_ball_display = 0;

        for (var i = 0; i < maximum; i += 5) {

            var abacus_tr = $('<tr/>', {
                class: 'tr',
                style: 'background:url("exercises/m/math/boulieradditionner/img/line.jpg")repeat-x center'
            });

            for (var j = 0; j < 5; j++) {
                var abacus_td = $('<td/>', {
                    class: 'td',
                    style: 'padding:0; border:0;'
                });
                if (nb_ball_display < lO) {
                    var abacus_ball = $('<img/>', {
                        src: 'exercises/m/math/boulieradditionner/img/boule.png',
                        width: (width * 0.05).toFixed(0)
                    });
                    nb_ball_display++;
                }
                else {
                    var abacus_ball = $('<img/>', {
                        src: 'exercises/m/math/boulieradditionner/img/boule_empty.png',
                        width: (width * 0.05).toFixed(0)
                    });
                }
                abacus_ball.appendTo(abacus_td);
                abacus_td.appendTo(abacus_tr);
            }
            abacus_tr.appendTo(abacus_table_md_lg);
        }
        /* END */

        var abacus_button = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'text-align:center; margin-top:20px;'
        });

        var abacus_button_plus = $('<button/>', {
            id: 'abacus_plus',
            html: '<h3>+1</h3>',
            style: 'background:red; color:white; border:0; border-radius:7px; margin-right:2px;',
            width: (width * 0.1).toFixed(0)
        });

        var abacus_button_minus = $('<button/>', {
            id: 'abacus_minus',
            html: '<h3>-1</h3>',
            style: 'background:blue; color:white; border:0; border-radius:7px; margin-left:2px;',
            width: (width * 0.1).toFixed(0)
        });

        abacus_table_md_lg.appendTo(abacus_div_md_lg);
        abacus_div_md_lg.appendTo(div);
        abacus_button_plus.appendTo(abacus_button);
        abacus_button_minus.appendTo(abacus_button);
        abacus_button.appendTo(div);

        build_hr(div);
    }

    var build_form = function (div) {
        var form_input = $('<input/>', {
            id: 'form_result',
            type:'number',
            class: 'visible-md visible-lg',
            style:'border-radius:5px; text-align:center; color:black; margin:auto; margin-bottom:5px;'
        }).appendTo(div);

        var form_valid = $('<button/>',{
            id:'form_submit',
            class:'visible-md visible-lg',
            style:'background:green; color:white; border-radius:5px; text-transform:uppercase; margin:auto; border:0;',
            width:(width*0.2).toFixed(0),
            height:(height*0.05).toFixed(0),
            html:'Valider'
        }).appendTo(div);

    }

    var build_hr = function (div) {
        var operation_hr = $('<hr/>', {
            class: 'visible-xs visible-sm visible-md visible-lg',
            style: 'width:80%;'
        });
        operation_hr.appendTo(div);

    };

    var build_operation = function (div, lO, rO) {

        //xs & sm
        var operation_div_xs_sm = $('<div/>', {
            class: 'visible-xs visible-sm',
            html: '<h3>' + lO + ' + ' + rO + ' = ?</h3>',
            style: 'text-align:center; color:white;'
        });

        operation_div_xs_sm.appendTo(div);

        //md & lg
        var operation_div_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            html: '<h1>' + lO + ' + ' + rO + ' = ?</h1>',
            style: 'text-align:center; color:white'
        });
        operation_div_md_lg.appendTo(div);

        //both
        build_hr(div);

    }

    var init_div = function (view) {

        var div_exercice = $('<div/>', {
            class: 'visible-sm visible-xs visible-md visible-lg',
            style: 'background-color: #2d6ca2; padding: 2px; border-radius:6px;'
        });

        build_operation(div_exercice, model.getFirstOperand(), model.getSecondOperand());
        build_abacus(div_exercice, model.getFirstOperand());
        build_form(div_exercice);
        div_exercice.appendTo(view);
    };

// private attributes
    var module;
    var model;
    var controller;

    var current_ball_in_Abacus;
    var width,height;

    this.init(mdl, div);
};