m.math.boulieradditionner.View = function (mdl, div, max) {

// public methods
    this.error = function () {
        module.error();
        bootstrap_alert.info(module.getWrongResponseMessage(), '');
    };

    this.init = function (mdl, view) {
        width = window.innerWidth;
        height = window.innerHeight;

        module = mdl;
        model = new m.math.boulieradditionner.Model(mdl, max);
        init_div(view);

        controller = new m.math.boulieradditionner.Controller(model, this);
    };

    this.next = function () {
        model.next();
        this.update();

        this.updateOperators();
        this.updateAbacus();
    };

    this.resize = function () {
        size_canvas();
    };

    this.update = function () {
        if (model.isOkResult()) {
            module.next();
        }
    };

    this.updateAbacus = function () {
        draw_abacus();
    };

    this.updateOperators = function () {
        $("#operation_md_lg").html("<h1>" + model.getFirstOperand() + " + " + model.getSecondOperand() + " = ?</h1>");
        $("#operation_xs_sm").html("<h3>" + model.getFirstOperand() + " + " + model.getSecondOperand() + " = ?</h3>");
        $(".answer").css("opacity", "1");
        $(".answer").removeClass('active');
    };

// private methods
    var build_abacus = function (div, lO) {
        var canvas = $('<canvas/>', {
            id: 'canvas',
            class: 'visible-sm visible-md visible-lg visible-xs',
            style: 'width:600px; height:300px; margin: auto; margin-top:20px; margin-bottom:20px;'
        }).appendTo(div);

        size_canvas();

        build_hr(div);

        var button_plus = $('<button/>', {
            id: 'button_plus',
            class: 'btn btn-success btn-lg',
            html: '+1',
            style: 'margin-right:5px;'
        }).appendTo(div);

        var button_minus = $('<button/>', {
            id: 'button_minus',
            class: ' btn btn-danger btn-lg',
            html: '-1',
            style: 'margin-left:5px;'
        }).appendTo(div);

        build_hr(div);
    }

    var build_form = function (div) {

        var div_answer = $('<div/>', {
            id: 'answer',
            class: 'visible-xs visible-sm visible-md visible-lg'
        }).appendTo(div);

        for (var i = 0; i < max; i++) {
            div_answer.append('<button type="button" id="' + (i + 1) + '" class="btn btn-warning answer" style="margin:5px;">' + (i + 1) + '</button>');
        }

        var button_valid = $('<button/>', {
            id: 'button_valid',
            class: 'btn btn-default',
            html: 'Valider'
        }).appendTo(div);
    };

    var build_hr = function (div) {
        var operation_hr = $('<hr/>', {
            class: 'visible-xs visible-sm visible-md visible-lg',
            style: 'width:80%; margin-top:5px; margin-bottom:5px'
        });
        operation_hr.appendTo(div);
    };

    var build_operation = function (div, lO, rO) {
        //xs & sm
        var operation_div_xs_sm = $('<div/>', {
            id: 'operation_xs_sm',
            class: 'visible-xs visible-sm',
            html: '<h3>' + lO + ' + ' + rO + ' = ?</h3>',
            style: 'text-align:center; color:white;'
        });

        operation_div_xs_sm.appendTo(div);

        //md & lg
        var operation_div_md_lg = $('<div/>', {
            id: 'operation_md_lg',
            class: 'visible-md visible-lg',
            html: '<h1>' + lO + ' + ' + rO + ' = ?</h1>',
            style: 'text-align:center; color:white'
        });
        operation_div_md_lg.appendTo(div);

        //both
        build_hr(div);
    };

    var draw_abacus = function () {
        var c = $("#canvas")[0];
        var ctx = c.getContext("2d");

        //Variables
        var nb_boules = model.getCurrentBallOn();

        var height = c.height;
        var width = c.width;
        var nb_boules_by_line = 4;

        //calcul du nombre de ligne
        var nb_etages = Math.ceil(nb_boules / 4);
        //calcul du rayon de la boule
        var rayon_boule = ((width - (width * 0.1)) / 5) / 2;

        //Cas Boules > Taille Canvas
        if (rayon_boule * nb_etages * 2 > height) {
            rayon_boule = ((height - (height * 0.1)) / 5) / 2;
        }

        //Creation du fond
        ctx.fillStyle = "#2d6ca2";
        ctx.fillRect(0, 0, width, height);

        //Creation contour
        ctx.strokeStyle = "#B4B4B4";
        ctx.lineWidth = height * 0.03;

        ctx.beginPath();
        ctx.moveTo(height * 0.015, 0);
        ctx.lineTo(height * 0.015, height - height * 0.015);
        ctx.lineTo(width - height * 0.015, height - height * 0.015);
        ctx.lineTo(width - height * 0.015, height * 0.015);
        ctx.lineTo(height * 0.015, height * 0.015);
        ctx.stroke();

        //Creation des Etages
        var espace_vertical = (height - (nb_etages * rayon_boule * 2)) / (nb_etages + 1);
        for (var i = 1; i < nb_etages + 1; i++) {

            ctx.beginPath();
            ctx.moveTo(0, i * espace_vertical + (i * 2 - 1) * rayon_boule);
            ctx.lineTo(width, i * espace_vertical + (i * 2 - 1) * rayon_boule);
            ctx.stroke();
        }

        //Dessin des Boules
        ctx.strokeStyle = "#EB9317";
        ctx.fillStyle = "#EB9317";
        ctx.lineWidth = 2;

        var espace_horizontal = (width - (rayon_boule * 2 * nb_boules_by_line)) / (nb_boules_by_line + 1);
        for (var i = 0; i < nb_boules; i++) {

            var x = parseInt(espace_horizontal * ((i % nb_boules_by_line) + 1) + (((i % nb_boules_by_line + 1) * 2 - 1) * rayon_boule));
            var y = parseInt(Math.ceil((i + 1) / 4) * espace_vertical + ((Math.ceil((i + 1) / 4) * 2 - 1) * rayon_boule));


            ctx.beginPath();
            ctx.arc(x, y, rayon_boule, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.stroke();
        }
    };

    var init_div = function (view) {

        var div_exercice = $('<div/>', {
            class: 'visible-sm visible-xs visible-md visible-lg',
            style: 'background-color: #2d6ca2; padding: 2px 2px 10px 2px; border-radius:6px; text-align:center; '
        });

        div_exercice.appendTo(view);
        build_operation(div_exercice, model.getFirstOperand(), model.getSecondOperand());
        build_abacus(div_exercice, model.getFirstOperand());
        build_form(div_exercice);

        draw_abacus(model.getFirstOperand());
    };

    var size_canvas = function () {
        var wc = parseInt($('#canvas').css("width"));
        var wp = parseInt($('#canvas').parent().css("width"));
        var wce = parseInt(wp * 0.8);

        if (wp > 750) {
            $("#canvas").css("width", "600");
            $("#canvas").css("height", "300");
        }
        else {
            $("#canvas").css("width", wce);
            $("#canvas").css("height", parseInt(wce / 2));
        }
    };

// private attributes
    var module;
    var model;
    var controller;
    var width, height;

    this.init(mdl, div);
};