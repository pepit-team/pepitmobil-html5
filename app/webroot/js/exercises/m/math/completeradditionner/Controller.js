m.math.completeradditionner.Controller = function (model) {

// private methods
    var init = function() {
        for (var i = 1; i <= 12; i++) {
            $('#button_' + i).on('click', function (e) {

                alert('Hello!');

            });
        }
    };

// private attributes
    var model = model;

    init();
};