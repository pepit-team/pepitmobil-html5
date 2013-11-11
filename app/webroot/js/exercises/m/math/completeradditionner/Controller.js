m.math.completeradditionner.Controller = function (model, view) {

// private methods
    var init = function() {
        for (var i = 1; i <= 12; i++) {
            $('#button_' + i).on('click', function (e) {
                var e = e || window.event;
                var target = e.target || e.srcElement;

                if (target.nodeName == "H1") {
                    target = target.parentNode;
                }

                var number = target.id.substring(target.id.indexOf('_') + 1, target.id.length);

                model.setSelectedNumber(number);
                view.update();
            });
        }
        $('#button_number_1').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            if (model.checkFirstOperand()) {
                model.unsetSelectedNumber();
                view.update();
            } else {
                model.unsetSelectedNumber();
                view.error();
                view.update();
            }
        });
        $('#button_number_2').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            if (model.checkSecondOperand()) {
                model.unsetSelectedNumber();
                view.update();
            } else {
                model.unsetSelectedNumber();
                view.error();
                view.update();
            }
        });
        $('#button_result').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            if (model.checkResult()) {
                model.unsetSelectedNumber();
                view.update();
            } else {
                model.unsetSelectedNumber();
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