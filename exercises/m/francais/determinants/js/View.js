m.francais.determinants.View = function (mdl, div, number, min, max, sh) {

// public methods
    this.build_buttons = function (buttons_div, style) {
        var buttons_div_inner;

        if (style === 'md_lg') {
            buttons_div_inner = $('<div/>', {
                class: 'visible-md visible-lg',
                style: 'float: center'
            });
        } else if (style === 'sm') {
            buttons_div_inner = $('<div/>', {
                class: 'visible-sm',
                style: 'float: center'
            });
        } else if (style === 'xs') {
            buttons_div_inner = $('<div/>', {
                class: 'visible-xs',
                style: 'float: center'
            });
        }

        build_button_for_response(this.getDeterminant(0), style).appendTo(buttons_div_inner);
        build_button_for_response(this.getDeterminant(1), style).appendTo(buttons_div_inner);
        build_button_for_response(this.getDeterminant(2), style).appendTo(buttons_div_inner);
        buttons_div_inner.appendTo(buttons_div);

        return buttons_div;
    };

    this.error = function () {
        module.error();
        bootstrap_alert.info(module.getWrongResponseMessage(), '');
    };

    this.init = function (mdl, view, number, min, max, sh) {
        height = window.innerHeight;
        width = window.innerWidth;

        module = mdl;
    };

    this.init_div = function (view) {
        view.css({'background-color': '#99CC66',
            'padding': '10px',
            'border-radius': '6px 6px 6px 6px'
        });
        view.addClass('row');

// md and lg device
        this.build_buttons($('<div/>', { class: 'col-md-4 visible-md visible-lg' }), "md_lg").appendTo(view);
        build_image($('<div/>', { class: 'col-md-8 visible-md visible-lg' }),
            model.getImageIndex(), "md_lg").appendTo(view);

// sm device
        this.build_buttons($('<div/>', { class: 'col-sm-4 visible-sm' }), "sm").appendTo(view);
        build_image($('<div/>', { class: 'col-sm-8 visible-sm' }),
            model.getImageIndex(), "sm").appendTo(view);

// xs device
        this.build_buttons($('<div/>', { class: 'col-xs-4 visible-xs' }), "xs").appendTo(view);
        build_image($('<div/>', { class: 'col-xs-8 visible-xs' }),
            model.getImageIndex(), "xs").appendTo(view);
    };

    this.next = function () {
        model.next();
        $('#image_md_lg').attr('src',
            'exercises/m/francais/lelales/img/card_' + model.getImageIndex() + '.png');
        $('#image_sm').attr('src',
            'exercises/m/francais/lelales/img/card_' + model.getImageIndex() + '.png');
        $('#image_xs').attr('src',
            'exercises/m/francais/lelales/img/card_' + model.getImageIndex() + '.png');
        this.update();
    };

    this.restart = function (view, sh) {
        model.restart(sh);
        this.init_div(view);
        controller = this.buildController(model);
    };

    this.setController = function(c) {
        controller = c;
    };

    this.setModel = function(m) {
        model = m;
    };

    this.update = function () {
        if (model.isOkResult()) {
            $('#word_md_lg').html(model.getWord());
            $('#word_sm').html(model.getWord());
            $('#word_xs').html(model.getWord());
            module.next();
        } else {
            $('#word_md_lg').html('???');
            $('#word_sm').html('???');
            $('#word_xs').html('???');
        }
    };

// private methods
    var build_button_for_response = function (name, style) {
        var button = $('<div/>', {
            style: 'align: center; padding: 10px'
        });
        var link;

        if (style === 'md_lg') {
            button.addClass('visible-md visible-lg');
            link = $('<a/>', {
                class: 'btn btn-ms active visible-md visible-lg',
                href: '#',
                style: 'background-color: #FFFFFF; padding: 10px',
                id: 'button_' + name + '_md_lg',
                role: 'button',
                html: '<div style="font-size: 50px; color: #006600; text-align: center; font-weight: bold;" id="' +
                    name + '">' + name + '</div>'
            });
        } else if (style === 'sm') {
            button.addClass('visible-sm');
            link = $('<a/>', {
                class: 'btn btn-ms active visible-sm',
                href: '#',
                style: 'background-color: #FFFFFF; padding: 10px',
                id: 'button_' + name + '_sm',
                role: 'button',
                html: '<div style="font-size: 30px; color: #006600; text-align: center; font-weight: bold;" id="' +
                    name + '">' + name + '</div>'
            });
        } else if (style === 'xs') {
            button.addClass('visible-xs');
            link = $('<a/>', {
                class: 'btn btn-ms active visible-xs',
                href: '#',
                style: 'background-color: #FFFFFF; padding: 10px',
                id: 'button_' + name + '_xs',
                role: 'button',
                html: '<div style="font-size: 20px; color: #006600; text-align: center; font-weight: bold;" id="' +
                    name + '">' + name + '</div>'
            });
        }

        link.appendTo(button);
        return button;
    };

    var build_image = function (image_div, i, style) {
        var img;
        var word_div;

        if (style === "md_lg") {
            img = $('<img/>', {
                style: 'background-color: #FFFFFF; padding: 10px; border-radius: 6px 6px 6px 6px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #000000',
                src: 'exercises/m/francais/lelales/img/card_' + i + '.png',
                height: height / 2,
                id: 'image_md_lg'
            });
            word_div = $('<div/>', {
                style: 'background-color: #FFFFFF; padding: 10px; font-size: 50px; color: #006600; text-align: center; font-weight: bold; border-radius: 6px 6px 6px 6px; border: 1px solid #000000',
                id: 'word_md_lg',
                html: '???'
            });
        } else if (style === "sm") {
            img = $('<img/>', {
                style: 'background-color: #FFFFFF; padding: 10px; border-radius: 6px 6px 6px 6px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #000000',
                src: 'exercises/m/francais/lelales/img/card_' + i + '.png',
                height: height / 2,
                id: 'image_sm'
            });
            word_div = $('<div/>', {
                style: 'background-color: #FFFFFF; padding: 10px; font-size: 30px; color: #006600; text-align: center; font-weight: bold; border-radius: 6px 6px 6px 6px; border: 1px solid #000000',
                id: 'word_sm',
                html: '???'
            });
        } else if (style === "xs") {
            img = $('<img/>', {
                style: 'background-color: #FFFFFF; padding: 10px; border-radius: 6px 6px 6px 6px; display: block; margin-left: auto; margin-right: auto; border: 1px solid #000000',
                src: 'exercises/m/francais/lelales/img/card_' + i + '.png',
                height: height / 3,
                id: 'image_xs'
            });
            word_div = $('<div/>', {
                style: 'background-color: #FFFFFF; padding: 10px; font-size: 20px; color: #006600; text-align: center; font-weight: bold; border-radius: 6px 6px 6px 6px; border: 1px solid #000000',
                id: 'word_xs',
                html: '???'
            });
        }

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

// private attributes
    var height;
    var width;

    var module;
    var model;
    var controller;

    this.init(mdl, div, number, min, max, sh);
};