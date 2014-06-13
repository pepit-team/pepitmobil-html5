m.math.boulieradditionner.Controller = function (m, v) {

// private methods
    var init = function () {
        $('#button_valid').on('click', function (e) {
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
        });

        $('#button_minus').on('click', function (e) {
            model.decrementCurrentBallOn();
            view.updateAbacus();
        });

        $('.answer').on('click', function (e) {
            $('.answer').removeClass('active');
            $('.answer').css("opacity", "0.6");
            model.setCurrentAnswerSelected($(this).attr('id'));
            $(this).addClass('active');
            $(this).css("opacity", "1");
        });

        $(window).resize(function () {
            view.resize();
        });
    };

// private attributes
    var model = m;
    var view = v;

    init();
};