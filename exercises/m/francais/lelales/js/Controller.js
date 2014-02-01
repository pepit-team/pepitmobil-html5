m.francais.lelales.Controller = function (model, view) {

// private methods
    var click = function(name) {
        init_button(name, 'md_lg');
        init_button(name, 'sm');
        init_button(name, 'xs');
    };

    var init = function() {
        click('le');
        click('la');
        click('les');
    };

    var init_button = function(name, style) {
        $('#button_' + name + '_' + style).on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            if (model.check(name)) {
                view.update();
            } else {
                view.error();
                view.update();
            }
        });
    };

// private attributes
    var model = model;
    var view = view;

    init();
};