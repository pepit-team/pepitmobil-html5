m.math.compterecrire.Controller = function (m, v) {

// private methods
    var init = function () {
        $('#valid').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            if (model.check()) {
                view.update();
            } else {
                view.error();
            }
        });

        $('#button_plus').on('click', function (e) {
            model.incrementCurrentBallOn();
            view.updateAbacus();
            console.log("Call +");
        });

        $('#button_minus').on('click', function (e) {
            model.decrementCurrentBallOn();
            view.updateAbacus();
            console.log("Call -");
        });
    };

// private methods

// private attributes
    var model = m;
    var view = v;

    init();
};