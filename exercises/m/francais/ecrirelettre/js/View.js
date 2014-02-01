m.francais.ecrirelettre.View = function (mdl, div, number, min, max, sh, n) {

// public methods
    this.error = function () {
        module.error();
    };

    this.init = function (mdl, view, number, min, max, sh, n) {
        height = window.innerHeight;
        width = window.innerWidth;
        canvas_height = 0;
        canvas_width = 0;

        module = mdl;
        letterNumber = n;
        model = new m.francais.ecrirelettre.Model(number, min, max, sh, n);
        init_div(view);
        controller = new m.francais.ecrirelettre.Controller(model, this);
    };

    this.next = function () {
        model.next();
        model.reset();

        $('#word_md_lg').html('<h1><b>' + model.getWord() + '</b></h1>');
        $('#word_xs_sm').html('<h3><b>' + model.getWord() + '</b></h3>');

        draw_letters($('#canvas_element_md_lg'));
        draw_letters($('#canvas_element_xs_sm'));

        this.update();
    };

    this.update = function () {
        var result = model.getResult();
        var i;

        for (i = 1; i <= letterNumber; ++i) {
            $('#button2_' + i + '_md_lg').html(result[i - 1]);
        }
        for (i = 1; i <= letterNumber; ++i) {
            $('#button2_' + i + '_xs_sm').html(result[i - 1]);
        }

        draw_letters($('#canvas_element_md_lg'));
        draw_letters($('#canvas_element_xs_sm'));

        if (model.isOkResult()) {
            module.next();
        } else {
        }
    };

// private methods
    var build_buttons_for_response = function (div, style) {
        var buttons_div = $('<div />', {
            class: 'btn-group',
            style: 'background-color: #252538; width: 95%; padding-left: 0; padding-right: 0;' +
                'margin-left: auto; margin-right: auto;display: block'
        });

        buttons_div.appendTo(div);
        for (var i = 1; i <= letterNumber; ++i) {
            build_button_for_response(buttons_div, i, style);
        }
    };

    var build_button_for_response = function (div, i, style) {
        var button;

        if (style === 'md_lg') {
            button = $('<a/>', {
                href: '#',
                class: 'btn btn-lg btn-warning active',
                id: 'button_' + i + '_' + style,
                role: 'button',
                html: '<div style="font-size: 40px; color: #006600; text-align: center; font-weight: bold;" id="button2_' +
                    i + '_' + style + '">--</div>'
            });
        } else if (style === 'xs_sm') {
            button = $('<a/>', {
                href: '#',
                class: 'btn btn-block btn-xs btn-warning active',
                id: 'button_' + i + '_' + style,
                role: 'button',
                html: '<div style="font-size: 20px; color: #006600; text-align: center; font-weight: bold;" id="button2_' +
                    i + '_' + style + '">--</div>'
            });
        }
        button.appendTo(div);
    };

    var build_canvas = function (div, style) {
        if (style === 'md_lg') {
            var canvas_div_md_lg = $('<div />', {
                style: 'background-color: #252538; width: 95%; padding-left: 0; padding-right: 0;' +
                    'margin-left: auto; margin-right: auto;display: block',
                id: 'canvas_id_md_lg'
            });

            var canvas = $('<canvas/>', {
                style: 'padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto;' +
                    'display: block',
                id: 'canvas_element_md_lg'
            });
            canvas.appendTo(canvas_div_md_lg);
            canvas_div_md_lg.appendTo(div);
        } else if (style === 'xs_sm') {
            var canvas_div_xs_sm = $('<div />', {
                style: 'background-color: #252538; width: 95%; padding-left: 0; padding-right: 0;' +
                    'margin-left: auto; margin-right: auto;display: block',
                id: 'canvas_id_xs_sm'
            });

            var canvas = $('<canvas/>', {
                style: 'padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto;' +
                    'display: block',
                id: 'canvas_element_xs_sm'
            });
            canvas.appendTo(canvas_div_xs_sm);
            canvas_div_xs_sm.appendTo(div);
        }

        var js_canvas_div;
        var js_canvas;

        if (style === 'md_lg') {
            js_canvas_div = document.getElementById("canvas_id_md_lg");
            js_canvas = document.getElementById("canvas_element_md_lg");
        } else if (style === 'xs_sm') {
            js_canvas_div = document.getElementById("canvas_id_xs_sm");
            js_canvas = document.getElementById("canvas_element_xs_sm");
        }

        js_canvas.width = js_canvas_div.clientWidth * 0.9;
        js_canvas.height = window.innerHeight * 0.6;
        draw_letters(canvas);
    };

    var build_letters_and_image = function (view) {
// md and lg devices
        var div_md_lg = $('<div />', {
            class: 'visible-md visible-lg'
        });
        var canvas_div_md_lg = $('<div />', {
            class: 'row'
        });
        canvas_div_md_lg.appendTo(div_md_lg);
        div_md_lg.appendTo(view);
        build_canvas(canvas_div_md_lg, 'md_lg');

// xs and sm devices
        var canvas_div_xs_sm = $('<div />', {
            class: 'visible-xs visible-sm'
        });
        canvas_div_xs_sm.appendTo(view);
        build_canvas(canvas_div_xs_sm, 'xs_sm');
    };

    var build_result = function (view) {
// md and lg devices
        var div_md_lg = $('<div/>', {
            'class': 'visible-md visible-lg'
        });
        var result_div_md_lg = $('<div/>', {
            'class': 'row'
        });

        result_div_md_lg.appendTo(div_md_lg);
        div_md_lg.appendTo(view);
        $('<div/>', {
            class: 'col-md-3'
        }).appendTo(result_div_md_lg);
        var a = $('<div/>', {
            class: 'col-md-6'
        });
        a.appendTo(result_div_md_lg);
        $('<div/>', {
            class: 'col-md-3'
        }).appendTo(result_div_md_lg);
        build_buttons_for_response(a, 'md_lg');

// xs and sm devices
        var div_xs_sm = $('<div/>', {
            'class': 'visible-xs visible-sm'
        });
        var result_div_xs_sm = $('<div/>', {
            'class': 'row'
        });

        result_div_xs_sm.appendTo(div_xs_sm);
        div_xs_sm.appendTo(view);
        $('<div/>', {
            class: 'col-xs-3'
        }).appendTo(result_div_xs_sm);
        var b = $('<div/>', {
            class: 'col-xs-6'
        });
        b.appendTo(result_div_xs_sm);
        $('<div/>', {
            class: 'col-xs-3'
        }).appendTo(result_div_xs_sm);
        build_buttons_for_response(b, 'xs_sm');
    };

    var build_spacing = function () {
        return $('<div/>', {
            style: 'padding: 10px;'
        });
    };

    var build_word = function (view) {
// md and lg devices
        var word_div_md_lg = $('<div/>', {
            'class': 'row'
        });

        word_div_md_lg.appendTo(view);
        $('<div/>', {
            class: 'col-md-5 visible-md visible-lg'
        }).appendTo(word_div_md_lg);
        $('<div/>', {
            class: 'col-md-2 visible-md visible-lg',
            id: 'word_md_lg',
            style: 'background-color: #FFFFFF; text-align: center; border-radius: 6px 6px 6px 6px',
            html: '<h1><b>' + model.getWord() + '</b></h1>'
        }).appendTo(word_div_md_lg);
        $('<div/>', {
            class: 'col-md-5 visible-md visible-lg'
        }).appendTo(word_div_md_lg);

// xs and sm devices
        var word_div_xs_sm = $('<div/>', {
            'class': 'row'
        });

        word_div_xs_sm.appendTo(view);
        $('<div/>', {
            class: 'col-xs-5 visible-xs visible-sm'
        }).appendTo(word_div_xs_sm);
        $('<div/>', {
            class: 'col-xs-3 visible-xs visible-sm',
            id: 'word_xs_sm',
            style: 'background-color: #FFFFFF; text-align: center; border-radius: 6px 6px 6px 6px',
            html: '<h3><b>' + model.getWord() + '</b></h3>'
        }).appendTo(word_div_xs_sm);
        $('<div/>', {
            class: 'col-xs-5 visible-xs visible-sm'
        }).appendTo(word_div_xs_sm);
    };

    var draw_letters = function (canvas) {
        var context = canvas[0].getContext("2d");
        var canvas_width = canvas[0].width;
        var canvas_height = canvas[0].height;

        context.lineWidth = 1.;
        context.strokeStyle = "#000000";
        context.fillStyle = "#ffffff";
        context.rect(0, 0, canvas_width, canvas_height);
        context.fill();
        context.stroke();

        var img = new Image();
        img.src = 'exercises/m/francais/ecrirelettre/img/card_' + model.getImageIndex() + '.png';

        if (img.complete) {
            context.drawImage(img, canvas_width / 2 - 50, 10, 150, 150);
            context.rect(canvas_width / 2 - 55, 5, 160, 160);
            context.stroke();
        } else {
            img.onload = function () {
                context.drawImage(img, canvas_width / 2 - 50, 10, 150, 150);
                context.rect(canvas_width / 2 - 55, 5, 160, 160);
                context.stroke();
            };
        }

        var letters = model.getCoordinates();

        context.font = "40px Times Arial";
        context.fillStyle = "#000000";
        for (var i = 0; i < letters.length; ++i) {
            context.fillText(letters[i].letter, letters[i].x * canvas_width,
                letters[i].y * canvas_height);
        }
    };

    var init_div = function (view) {
        build_word(view);
        build_spacing().appendTo(view);
        build_letters_and_image(view);
        build_spacing().appendTo(view);
        build_result(view);
    };

// private attributes
    var height;
    var width;
    var letterNumber;

    var module;
    var model;
    var controller;

    this.init(mdl, div, number, min, max, sh, n);
};