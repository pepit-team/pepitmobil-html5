m.math.lourdleger.View = function (mdl, div) {

// public methods
    this.error = function () {
        module.error();
    };

    this.init = function (mdl, view) {
        module = mdl;
        model = new m.math.lourdleger.Model();
        init_div(view);
        controller = new m.math.lourdleger.Controller(model, this);
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
    var init_div = function (view) {
        var button;

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

    this.init(mdl, div);
};