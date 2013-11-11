m.francais.lelales.View = function (mdl, u, div, number, min, max, sh) {

// public methods
    this.error = function () {
        module.error();
        bootstrap_alert.info('Erreur !', '');
    };

    this.init = function (mdl, u, view, number, min, max, sh) {
        height = window.innerHeight;
        width = window.innerWidth;

        module = mdl;
        url = u;
        model = new m.francais.lelales.Model(number, min, max, sh);
        init_div(view);
        controller = new m.francais.lelales.Controller(model, this);
    };

    this.next = function () {
        model.next();
        $('#image').attr('src',
            url + 'img/exercises/m/francais/lelales/card_' + model.getImageIndex() + '.png');
        this.update();
    };

    this.restart = function (view, sh) {
        model.restart(sh);
        init_div(view);
        controller = new m.francais.lelales.Controller(model, this);
    };

    this.update = function () {
        if (model.isOkResult()) {
            $('#word').html(model.getWord());
            module.next();
        } else {
            $('#word').html('???');
        }
    };

// private methods
    var build_button_for_response = function (name) {
        var button = $('<div/>', {
            style: 'align: center; padding: 10px'
        });
        var link = $('<a/>', {
            href: '#',
            style: 'background-color: #FFFFFF; padding: 10px',
            class: 'btn btn-ms active',
            id: 'button_' + name,
            role: 'button',
            html: '<div style="font-size: 50px; color: #006600; text-align: center; font-weight: bold;" id="' +
                name + '">' + name + '</div>'
        });

        link.appendTo(button);
        return button;
    };

    var build_buttons = function () {
        var buttons_div = $('<div/>', {
            class: 'col-md-4'
        });
        var buttons_div_inner = $('<div/>', {
            style: 'float: center'
        });

        build_button_for_response('le').appendTo(buttons_div_inner);
        build_button_for_response('la').appendTo(buttons_div_inner);
        build_button_for_response('les').appendTo(buttons_div_inner);
        buttons_div_inner.appendTo(buttons_div);

        return buttons_div;
    };

    var build_image = function (i) {
        var image_div = $('<div/>', {
            class: 'col-md-8'
        });
        var img = $('<img/>', {
            style: 'background-color: #FFFFFF; padding: 10px; border-radius: 6px 6px 6px 6px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #000000',
            src: url + 'img/exercises/m/francais/lelales/card_' + i + '.png',
            height: height / 2,
            id: 'image'
        });

        var word_div = $('<div/>', {
            style: 'background-color: #FFFFFF; padding: 10px; font-size: 50px; color: #006600; text-align: center; font-weight: bold; border-radius: 6px 6px 6px 6px; border: 1px solid #000000',
            id: 'word',
            html: '???'
        });

        img.appendTo(image_div);
        build_spacing().appendTo(image_div);
        word_div.appendTo(image_div);

        return image_div;
    };

    var build_spacing = function () {
        var spacing_div = $('<div/>', {
            style: 'padding: 10px;'
        });
        return spacing_div;
    };

    var init_div = function (view) {
        view.css({'background-color': '#99CC66',
            'padding': '10px',
            'border-radius': '6px 6px 6px 6px'
        });
        build_buttons().appendTo(view);
        build_image(model.getImageIndex()).appendTo(view);
    };

// private attributes
    var height;
    var width;
    var url;

    var module;
    var model;
    var controller;

    this.init(mdl, u, div, number, min, max, sh);
};