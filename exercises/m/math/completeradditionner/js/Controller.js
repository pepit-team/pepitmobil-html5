m.math.completeradditionner.Controller = function (model, view) {

// private methods
    var init = function () {
        init_buttons('md_lg');
        init_buttons('xs_sm');
        init_first_operand('md_lg');
        init_first_operand('xs_sm');
        init_second_operand('md_lg');
        init_second_operand('xs_sm');
        init_result('md_lg');
        init_result('xs_sm');
    };

    var init_buttons = function (style) {
        for (var i = 1; i <= 12; i++) {
            $('#button_' + i + '_' + style).on('click', function (e) {
                var e = e || window.event;
                var target = e.target || e.srcElement;

                if (target.nodeName == "H1") {
                    target = target.parentNode;
                }

                var s = target.id.substring(target.id.indexOf('_') + 1, target.id.length);
                var number = s.substring(0, s.indexOf('_'));

                model.setSelectedNumber(number);
                view.update();
            });
        }
    };

    var init_first_operand = function (style) {
        $('#button_number_1_' + style).on('click', function (e) {
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
    };

    var init_second_operand = function (style) {
        $('#button_number_2_' + style).on('click', function (e) {
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
    };

    var init_result = function (style) {
        $('#button_result_' + style).on('click', function (e) {
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
    }

// private attributes
    var model = model;
    var view = view;

    init();
};