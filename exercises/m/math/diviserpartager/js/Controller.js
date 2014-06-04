m.math.diviserpartager.Controller = function (m, v) {

// private methods
    var init = function () {
        $('#valid').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            var input_number = parseInt($('#input_number').val());
            model.setInputNumber(input_number);

            //Effacement du contenu de la zone de texte
            $('#input_number').val('');

            if (model.check()) {
                view.update();
            } else {
                view.error();
            }
        });

        init_canvas_cake();
    };

// private methods
    var init_canvas_cake = function(){
        $('#canvas_cake').on('click', function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;
            var pos = find_pos(target);
            var x = e.clientX - pos.x;
            var y = e.clientY - pos.y;

            model.setCenter(target.width,target.height);
            model.setRadius(target.width,target.height);

            var pieData = model.getPieCanvasData();
            var center = model.getCenter();
            var radius = model.getRadius();

            var fromCenterX = x - center.x;
            var fromCenterY = y - center.y;
            var fromCenter = Math.sqrt(Math.pow(Math.abs(fromCenterX), 2) + Math.pow(Math.abs(fromCenterY), 2 ));

            if (fromCenter <= radius) {
                var angle = Math.atan2(fromCenterY, fromCenterX);
                if (angle < 0) angle = 2 * Math.PI + angle; // normalize


                for (var pie in pieData) {
                    if (angle >= pieData[pie]['startAngle'] && angle <= pieData[pie]['endAngle']) {

                        if(pieData[pie]['visible'] == 0){
                            model.selectNbPieClicked();
                            pieData[pie]['visible'] = 1;
                        }else{
                            model.unselectNbPieClicked();
                            pieData[pie]['visible'] = 0;
                        }
                        view.drawPie(target);
                        console.log(model.getNbPieClicked());
                    }
                }
            }
        });
    };

    var find_pos = function(obj) {
        var left = 0, top = 0;

        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
            left -= document.documentElement.scrollLeft + document.body.scrollLeft;
            top -= document.documentElement.scrollTop + document.body.scrollTop;
            return { x: left, y: top };
        }
        return undefined;
    };



// private attributes
    var model = m;
    var view = v;

    init();
};