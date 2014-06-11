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

        //reinitialisation des parts de tarte
        deletePies();


// md and lg devices
        col_left_md_lg.empty();
        build_tab_characters(col_left_md_lg, model.getNbRandom(), 'md_lg');

// xs and ms devices
        col_left_xs_sm.empty();
        build_tab_characters(col_left_xs_sm, model.getNbRandom(), 'xs_sm');

        this.update();
    };


    this.update = function () {
        if (model.isOkResult()) {
            module.next();
        }
    };

    this.drawPie = function (canvas) {
        var center = {x: canvas.width / 2, y: canvas.height / 2}
        var radius = Math.min(canvas.width - 2, canvas.height - 2) / 2;
        var pieData = model.getPieCanvasData();

        drawPieCtx = canvas.getContext("2d");

        var img_cake = new Image();
        img_cake.src = 'exercises/m/math/diviserpartager/img/cake.png';

        img_cake.onload = function () {
            drawPieCtx.clearRect(0, 0, 269, 270);
            drawPieCtx.drawImage(img_cake, 0, 0, canvas.width, canvas.height);

            for (var i = 0; i <= 8; i++) {
                drawPieCtx.beginPath();
                drawPieCtx.moveTo(center.x, center.y);
                drawPieCtx.arc(center.x, center.y, radius, pieData[i]['startAngle'], pieData[i]['endAngle'], false);
                drawPieCtx.lineTo(center.x, center.y);


                if (pieData[i]['visible'] == true) {
                    drawPieCtx.fillStyle = "#BFC0C0";
                } else {
                    drawPieCtx.fillStyle = "rgba(0, 0, 200, 0)";
                }

                drawPieCtx.fill();
                drawPieCtx.closePath();
            }
        }

    }


// private methods
    var build_spacing = function () {
        return $('<div/>', {
            style: 'padding: 10px;'
        });
    };

    var build_character = function (i, size, style, offset) {
        var div_character;

        if (style === 'md_lg') {
            div_character = $('<div>', {
                class: 'col-md-' + size + ' col-md-offset-' + offset,
                style: 'text-align: center'
            });
        } else if (style === 'xs_sm') {
            div_character = $('<div>', {
                class: 'col-xs-' + size + ' col-md-offset-' + offset,
                style: 'text-align: center'
            });
        }

        var img_character = $('<img>', {
            class: 'img-responsive',
            src: 'exercises/m/math/diviserpartager/img/character-' + i + '.png'
        });

        img_character.appendTo(div_character);

        return div_character;
    }

    var build_tab_characters = function (div, number, style) {


        //Nombre d'éléments sur les lignes
        var nbEleLine1 = Math.round(number / 2);
        var nbEleLine2 = number - nbEleLine1;


        //Taille des elements
        var sizeElements = 12 / nbEleLine1;


        //Creation 1ere ligne
        var rowLine1 = $('<div>', {
            class: "row"
        });

        for (var i = 0; i < nbEleLine1; i++) {
            build_character(i + 1, sizeElements, style, 0).appendTo(rowLine1);
        }

        //Creation 2eme ligne
        var rowLine2 = $('<div>', {
            class: "row"
        });

        //offset si le nombre aléatoire est impaire
        if (number % 2 != 0) {
            build_character(i + 1, sizeElements, style, 1).appendTo(rowLine2);
        } else {
            build_character(i + 1, sizeElements, style, 0).appendTo(rowLine2);
        }

        for (var i = 0; i < nbEleLine2 - 1; i++) {
            build_character(i + 1, sizeElements, style, 0).appendTo(rowLine2);
        }

        rowLine1.appendTo(div);
        rowLine2.appendTo(div);
    }

    var build_tab_right = function (div, style) {

        if (style == 'md_lg') {
            //zone de texte pour saisir le nombre de part
            var input_number_md_lg = $('<input/>', {
                id: 'input_number_md_lg',
                type: 'text',
                class: 'form-control input-lg',
                style: 'margin-left:auto; margin-right:auto; text-align:center;',
                width: '50px'
            });

            //création des div
            var desc_cake_md_lg = $('<div>', {
                id: 'desc_cake_md_lg',
                html: '<h5>Clique sur la tarte pour donner un morceau à chaque invité.</h5>',
                style: 'text-align:center margin: 10px;'
            });


            //canvas_cake.appendTo(container_canvas_cake);

            var div_input_number_md_lg = $('<div>', {
                id: 'div_input_number_md_lg'
            });
            input_number_md_lg.appendTo(div_input_number_md_lg);

            var desc_number_md_lg = $('<div>', {
                id: 'desc_number_md_lg',
                html: '<h5>Inscris dans la case ce que tu as donné.</h5>',
                style: 'text-align:center'
            });

            desc_cake_md_lg.appendTo(div);
            build_spacing().appendTo(div);
            build_canvas(div, style);
            build_spacing().appendTo(div);
            input_number_md_lg.appendTo(div);
            build_spacing().appendTo(div);
            desc_number_md_lg.appendTo(div);
        } else if (style == 'xs_sm') {
            //zone de texte pour saisir le nombre de part
            var input_number_xs_sm = $('<input/>', {
                id: 'input_number_xs_sm',
                type: 'text',
                class: 'form-control input-lg',
                style: 'margin-left:auto; margin-right:auto; text-align:center;',
                width: '50px'
            });

            //création des div
            var desc_cake_xs_sm = $('<div>', {
                id: 'desc_cake_xs_sm',
                html: '<h5>Clique sur la tarte pour donner un morceau à chaque invité.</h5>',
                style: 'text-align:center'
            });

            var div_input_number_xs_sm = $('<div>', {
                id: 'div_input_number_xs_sm'
            });
            input_number_xs_sm.appendTo(div_input_number_xs_sm);

            var desc_number_xs_sm = $('<div>', {
                id: 'desc_number_xs_sm',
                html: '<h5>Inscris dans la case ce que tu as donné.</h5>',
                style: 'text-align:center'
            });

            desc_cake_xs_sm.appendTo(div);
            build_spacing().appendTo(div);
            build_canvas(div, style);
            build_spacing().appendTo(div);
            div_input_number_xs_sm.appendTo(div);
            build_spacing().appendTo(div);
            desc_number_xs_sm.appendTo(div);
        }


    }

    var build_canvas = function (div, style) {

        if (style === "md_lg") {
            var canvas_div = $('<div />', {
                id: 'canvas_id_md_lg',
                class: 'visible-lg visible-md',
                style: 'margin-right: auto; margin-left: auto; width: 75%; align: center;'
            });

            var canvas = $('<canvas/>', {
                id: 'canvas_element_md_lg',
                class: 'visible-md visible-lg'
            });

            canvas.appendTo(canvas_div);
            canvas_div.appendTo(div);


            var js_canvas_div = document.getElementById("canvas_id_md_lg");
            var js_canvas = document.getElementById("canvas_element_md_lg");


            js_canvas.width = js_canvas_div.clientWidth;
            js_canvas.height = js_canvas_div.clientWidth;

            drawCake(js_canvas);

        } else if (style === "xs_sm") {
            var canvas_div = $('<div />', {
                id: 'canvas_id_xs_sm',
                class: 'visible-xs visible-sm',
                style: 'margin-right: auto; margin-left: auto; width: 75%; align: center;'
            });

            var canvas = $('<canvas />', {
                id: 'canvas_element_xs_sm',
                class: 'visible-xs visible-sm'
            });

            canvas.appendTo(canvas_div);
            canvas_div.appendTo(div);

            var js_canvas_div = document.getElementById("canvas_id_xs_sm");
            var js_canvas = document.getElementById("canvas_element_xs_sm");

            js_canvas.width = js_canvas_div.clientWidth;
            js_canvas.height = js_canvas_div.clientWidth;

            drawCake(js_canvas);
        }

    };

    var drawCake = function (canvas) {

        if (!canvas) {
            alert("Impossible de récupérer le canvas");
            return;
        }

        var drawPieCtx = canvas.getContext("2d");
        if (!drawPieCtx) {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

        drawPieCtx.clearRect(0, 0, canvas.width, canvas.height);
        var img_cake = new Image();
        img_cake.src = 'exercises/m/math/diviserpartager/img/cake.png';
        img_cake.onload = function () {

            drawPieCtx.drawImage(img_cake, 0, 0, canvas.width, canvas.height);
        }

    };

    var deletePies = function () {
// md and lg devices
        var js_canvas = document.getElementById("canvas_element_md_lg");
        drawPieCtx.clearRect(0, 0, js_canvas.width, js_canvas.height);
        console.log(js_canvas.width);
        drawCake(js_canvas);

// xs and sm devices
        var js_canvas = document.getElementById("canvas_element_xs_sm");
        drawPieCtx.clearRect(0, 0, js_canvas.width, js_canvas.height);

        console.log(js_canvas.width);
        drawCake(js_canvas);

    }

    var init_div = function (view) {

// md and lg devices
        var exercise_div_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'background-color: #FEFB9B; padding: 10px; margin-bottom:10px; border-radius: 6px 6px 6px 6px'
        });

        //Creation de la classe row
        var row_md_lg = $('<div/>', {
            id: 'row_md_lg',
            class: 'row',
            style: 'margin-right: 10px'
        });

        //Div des colonnes
        col_left_md_lg = $('<div/>', {
            class: 'col-md-8'
        });

        col_right_md_lg = $('<div/>', {
            class: 'col-md-4',
            style: 'background-color:#FFFFFF; margin-bottom:10px; border-radius: 6px 6px 6px 6px; border:1px solid #252538'
        });


        col_left_md_lg.appendTo(row_md_lg);
        col_right_md_lg.appendTo(row_md_lg);
        row_md_lg.appendTo(exercise_div_md_lg);
        exercise_div_md_lg.appendTo(view);

        build_tab_characters(col_left_md_lg, model.getNbRandom(), 'md_lg');
        build_tab_right(col_right_md_lg, 'md_lg');

        var button_md_lg = $('<a/>', {
            href: '#',
            class: 'btn btn-lg btn-warning active visible-md visible-lg',
            id: 'valid_md_lg',
            role: 'button',
            html: 'Valider',
            width: '75px'
        });

        button_md_lg.appendTo(div);

// xs and sm devices
        var exercise_div_xs_sm = $('<div/>', {
            class: 'visible-xs visible-sm',
            style: 'background-color: #FEFB9B; padding: 10px; border-radius: 6px 6px 6px 6px'
        });

        //Creation de la classe row
        var row_xs_sm = $('<div/>', {
            id: "row_xs_sm",
            class: 'row'
        });

        //Div des colonnes
        col_left_xs_sm = $('<div/>', {
            class: 'col-xs-12'
        });

        col_right_xs_sm = $('<div/>', {
            class: 'col-xs-12'
        });


        col_left_xs_sm.appendTo(row_xs_sm);
        col_right_xs_sm.appendTo(row_xs_sm);
        row_xs_sm.appendTo(exercise_div_xs_sm);
        exercise_div_xs_sm.appendTo(view);

        build_tab_characters(col_left_xs_sm, model.getNbRandom(), 'xs_sm');
        build_tab_right(col_right_xs_sm, 'xs_sm');

        var button_xs_sm = $('<a/>', {
            href: '#',
            class: 'btn btn-lg btn-warning active visible-xs visible-sm',
            id: 'valid_xs_sm',
            role: 'button',
            html: 'Valider',
            width: '75px'
        });

        button_xs_sm.appendTo(div);
    };

// private attributes
    var module;
    var model;
    var controller;

    //Div des colonnes (md and ld devices)
    var col_left_md_lg;
    var col_right_md_lg;

    //Div des colonnes (xs and ms devices)
    var col_left_xs_sm;
    var col_right_xs_sm;

    //canvas
    //var canvas_cake;
    var drawPieCtx;

    this.init(mdl, div);
};