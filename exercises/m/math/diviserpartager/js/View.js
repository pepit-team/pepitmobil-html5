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

        //reinitialisation du canvas
        drawPieCtx.clearRect(0,0,269,270);

        var img_cake = new Image();
        img_cake.src = 'exercises/m/math/diviserpartager/img/cake.png';
        img_cake.onload = function(){
            drawPieCtx.drawImage(img_cake,0,0);
        }


// md and lg devices
        col_left_md_lg.empty();
        build_tab_characters(col_left_md_lg, model.getNbRandom(),'md_lg');

// xs and ms devices
        col_left_xs_ms.empty();
        build_tab_characters(col_left_xs_ms, model.getNbRandom(),'xs_ms');

        this.update();
    };



    this.update = function () {
        if (model.isOkResult()) {
            module.next();
        }
    };

    this.drawPie = function(canvas){
        var center = {x: canvas.width / 2, y: canvas.height / 2}
        var radius = Math.min(canvas.width -2, canvas.height -2) / 2;
        var pieData = model.getPieCanvasData();

        drawPieCtx = canvas.getContext("2d");

        console.log(center);
        var img_cake = new Image();
        img_cake.src = 'exercises/m/math/diviserpartager/img/cake.png';

        img_cake.onload = function(){
            drawPieCtx.clearRect(0,0,269,270);
            drawPieCtx.drawImage(img_cake,0,0);

            for(var i = 0; i <= 8; i++){
                drawPieCtx.beginPath();
                drawPieCtx.moveTo(center.x,center.y);
                drawPieCtx.arc(center.x,center.y,radius,pieData[i]['startAngle'],pieData[i]['endAngle'],false);
                drawPieCtx.lineTo(center.x,center.y);


                if(pieData[i]['visible'] == true){
                    drawPieCtx.fillStyle = "#BFC0C0";
                }else{
                    drawPieCtx.fillStyle = "rgba(0, 0, 200, 0)";
                }

                drawPieCtx.fill();
                drawPieCtx.closePath();
            }
        }

    }



// private methods
    var build_character = function(i, size, style,offset){
        var div_character;

        if (style === 'md_lg') {
            div_character = $('<div>',{
                class: 'col-md-' + size + ' col-md-offset-' + offset,
                style: 'text-align: center'
            });
        } else if (style === 'xs_sm') {
            div_character = $('<div>',{
                class: 'col-xs-' + size + ' col-md-offset-' + offset,
                style: 'text-align: center'
            });
        }

        var img_character = $('<img>',{
            class : 'img-responsive',
            src : 'exercises/m/math/diviserpartager/img/character-' + i + '.png'
        });

        img_character.appendTo(div_character);

        return div_character;
    }

    var build_tab_characters = function(div, number, style){


        //Nombre d'éléments sur les lignes
        var nbEleLine1 = Math.round(number / 2);
        var nbEleLine2 = number - nbEleLine1;


        //Taille des elements
        var sizeElements = 12 / nbEleLine1;


        //Creation 1ere ligne
        var rowLine1 = $('<div>',{
            class: "row"
        });

        for(var i=0;i<nbEleLine1;i++){
            build_character(i + 1, sizeElements, style,0).appendTo(rowLine1);
        }

        //Creation 2eme ligne
        var rowLine2 = $('<div>',{
            class: "row"
        });

        //offset si le nombre aléatoire est impaire
        if(number%2 != 0){
            build_character(i + 1, sizeElements, style,1).appendTo(rowLine2);
        }else{
            build_character(i + 1, sizeElements, style,0).appendTo(rowLine2);
        }

        for(var i=0;i<nbEleLine2-1;i++){
            build_character(i + 1, sizeElements, style,0).appendTo(rowLine2);
        }

        rowLine1.appendTo(div);
        rowLine2.appendTo(div);
    }

    var build_tab_right = function(div){
        //canvas tarte
        canvas_cake = $('<canvas>',{
            id: 'canvas_cake'
        });

        canvas_cake.attr({width: 269,height: 270}).css({width:'269px',height:'270px'});

        build_canvas_cake(canvas_cake);

        //zone de texte pour saisir le nombre de part
        var input_number = $('<input/>',{
            id: 'input_number',
            type : 'text',
            class : 'form-control input-lg',
            style: 'margin-left:auto; margin-right:auto; margin-top:20px; text-align:center;',
            width: '30px'
        });

        //création des div
        var row_desc_cake = $('<div>',{
            id: 'desc_cake',
            class: 'row',
            html : '<h5>Clique sur la tarte pour donner un morceau à chaque invité.</h5>',
            style: 'text-align:center'
        });

        var container_canvas_cake = $('<div>',{
            id : 'container_canvas_cake',
            class : 'row',
            class: 'visible-lg',
            style: 'margin-right: auto; margin-left: auto; width:269px; height:270px;'
        });

        canvas_cake.appendTo(container_canvas_cake);

        var row_input_number = $('<div>',{
            id : 'row_input_number',
            class : 'row'
        });
        input_number.appendTo(row_input_number);

        var row_desc_number = $('<div>',{
            id: 'desc_number',
            class: 'row',
            html : '<h5>Inscris dans la case ce que tu as donné.</h5>',
            style: 'text-align:center'
        });

        row_desc_cake.appendTo(div);
        container_canvas_cake.appendTo(div);
        row_input_number.appendTo(div);
        row_desc_number.appendTo(div);

    }

    var build_canvas_cake = function(canvas){

        if(!canvas){
            alert("Impossible de récupérer le canvas");
            return;
        }

        var context = canvas[0].getContext("2d");
        if(!context){
            alert("Impossible de récupérer le context du canvas");
            return;
        }
        context.clearRect(0,0,canvas.width(),canvas.height());
        var img_cake = new Image();
        img_cake.src = 'exercises/m/math/diviserpartager/img/cake.png';
        img_cake.onload = function(){

            context.drawImage(img_cake,0,0);
        }

    };

    var init_div = function (view) {
        var button;

// md and lg devices
        var exercise_div_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'background-color: #FEFB9B; padding: 10px; margin-bottom:10px; border-radius: 6px 6px 6px 6px'
        });

        //Creation de la classe row
        var row_md_lg = $('<div/>', {
            id : 'row_md_lg',
            class: 'row',
            style: 'margin-right: 10px'
        });

        //Div des colonnes
        col_left_md_lg = $('<div/>', {
            class: 'col-md-8'
        });

        col_right_md_lg = $('<div/>', {
            class: 'col-md-4'
        });

        build_tab_characters(col_left_md_lg, model.getNbRandom(), 'md_lg');
        build_tab_right(col_right_md_lg);

        col_left_md_lg.appendTo(row_md_lg);
        col_right_md_lg.appendTo(row_md_lg);
        row_md_lg.appendTo(exercise_div_md_lg);
        exercise_div_md_lg.appendTo(view);

// xs and ms devices
        var exercise_div_xs_ms = $('<div/>', {
            class: 'visible-xs visible-sm',
            style: 'background-color: #FEFB9B; padding: 10px; border-radius: 6px 6px 6px 6px'
        });

        //Creation de la classe row
        var row_xs_ms = $('<div/>', {
            id : "row_xs_ms",
            class: 'row'
        });

        //Div des colonnes
        col_left_xs_ms = $('<div/>', {
            class: 'col-xs-12'
        });
        col_right_xs_ms = $('<div/>', {
            class: 'col-xs-12'
        });

        build_tab_characters(col_left_xs_ms, model.getNbRandom(), 'xs_sm');
        build_tab_right(col_right_xs_ms);

        col_left_xs_ms.appendTo(row_xs_ms);
        col_right_xs_ms.appendTo(row_xs_ms);
        row_xs_ms.appendTo(exercise_div_xs_ms);
        exercise_div_xs_ms.appendTo(view);

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

    //Div des colonnes (md and ld devices)
    var col_left_md_lg;
    var col_right_md_lg;

    //Div des colonnes (xs and ms devices)
    var col_left_xs_ms;
    var col_right_xs_ms;

    //canvas
    var canvas_cake;
    var drawPieCtx;

    this.init(mdl, div);
};