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

        var img_character = $('<img></img>').attr('src',
            'exercises/m/math/diviserpartager/img/character-' + i + '.png');

        img_character.appendTo(div_character);

        return div_character;
    }

    var build_tab_characters = function(div, number){


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
            build_character(i + 1, sizeElements, 'md_lg',0).appendTo(rowLine1);
        }

        //Creation 2eme ligne
        var rowLine2 = $('<div>',{
            class: "row"
        });

        //offset si le nombre aléatoire est impaire
        if(number%2 != 0){
            //var offsetElement = Math.round(sizeElements /2);
            build_character(i + 1, sizeElements, 'md_lg',1).appendTo(rowLine2);
        }else{
            build_character(i + 1, sizeElements, 'md_lg',0).appendTo(rowLine2);
        }


        for(var i=0;i<nbEleLine2-1;i++){
            build_character(i + 1, sizeElements, 'md_lg',0).appendTo(rowLine2);
        }

        rowLine1.appendTo(div);
        rowLine2.appendTo(div);


    }

    var build_tab_right = function(div){
        //zone de texte pour saisir le nombre de part
        var input_number = $('<input/>',{
            type : 'text',
            class : 'form-control input-lg col-lg-2'
        });

        //image de la tarte
        var img_cake = $('<img></img>',{
            style: 'margin-bottom:15px'
        }).attr('src',
            'exercises/m/math/diviserpartager/img/cake.png');

        //Creation du tableau de la colonne de droite
        var table = $('<table/>');
        var row_desc_cake = $('<tr/>',{
            html : '<h5>Clique sur la tarte pour donner un morceau à chaque invité.</h5>',
            style: 'text-align: center'
        });
        var row_cake = $('<tr/>',{
            style: 'text-align: center'

        });
        img_cake.appendTo(row_cake);

        var row_number = $('<tr/>',{
            style: 'text-align: center'
        });
        input_number.appendTo(row_number);

        var row_desc_number = $('<tr/>',{
            html : '<h5>Inscris dans la case ce que tu as donné.</h5>',
            style: 'text-align: center'
        });



        table.appendTo(div);
        row_desc_cake.appendTo(table);
        row_cake.appendTo(table);
        row_number.appendTo(table);
        row_desc_number.appendTo(table);
    }

    var build_col_exercise = function(view){
        //Génération d'un nombre aléatoire de 4 à 8 pour afficher les personnages
        var nbRandom = Math.round(Math.random() * (8 - 4) + 4);

// md and lg devices
        var exercise_div_md_lg = $('<div/>', {
            class: 'visible-md visible-lg',
            style: 'background-color: #FEFB9B; padding: 10px; margin-bottom:10px; border-radius: 6px 6px 6px 6px'
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

        build_tab_characters(col_left_md_lg, nbRandom);
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
            class: 'row'
        });

        //Div des colonnes
        var col_left_xs_ms = $('<div/>', {
            class: 'col-xs-8'
        });
        var col_right_xs_ms = $('<div/>', {
            class: 'col-xs-4'
        });

        build_tab_characters(col_left_xs_ms, nbRandom);
        build_tab_right(col_right_xs_ms);

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

        row = $('<a/>', {
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