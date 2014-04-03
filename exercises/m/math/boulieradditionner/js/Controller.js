m.math.boulieradditionner.Controller = function (m, v) {

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
    };

    var init_button_abacus = function(){
        $("#abacus_plus").on('click',function(e){
            
        });
        $("#abacus_minus").on('click',function(e){

        });

    }

// private attributes
    var model = m;
    var view = v;

    init();
};