m.francais.lelales.Controller = function (model, view) {

// private methods
    var click = function(name) {
        $('#button_' + name).on('click', function (e) {
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

    var init = function() {
        click('le');
        click('la');
        click('les');
    };

// private attributes
    var model = model;
    var view = view;

    init();
};