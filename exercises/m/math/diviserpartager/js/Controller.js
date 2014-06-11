m.math.diviserpartager.Controller = function (m, v) {

// private methods
    var init = function () {

        init_buttons('md_lg');
        init_buttons('xs_sm');
        init_canvas_cake('md_lg');
        init_canvas_cake('xs_sm');
    };

    var init_buttons = function (style) {
        $('#valid_' + style).on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;

            var input_number = parseInt($('#input_number_' + style).val());
            model.setInputNumber(input_number);

            //Effacement du contenu de la zone de texte
            $('#input_number_' + style).val('');

            if (model.check()) {
                view.update();
            } else {
                view.error();
            }
        });
    }

    var init_canvas_cake = function (style) {
        $('#canvas_element_' + style).on('click', function (e) {
            canvas_cake_click(e);
        });
    };

    var canvas_cake_click = function (e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        var pos = find_pos(target);
        var x = e.clientX - pos.x;
        var y = e.clientY - pos.y;

        var center = {x: target.width / 2, y: target.height / 2};
        var radius = Math.min(target.width - 2, target.height - 2) / 2;
        var pieData = model.getPieCanvasData();

        var fromCenterX = x - center.x;
        var fromCenterY = y - center.y;
        var fromCenter = Math.sqrt(Math.pow(Math.abs(fromCenterX), 2) + Math.pow(Math.abs(fromCenterY), 2));

        if (fromCenter <= radius) {
            var angle = Math.atan2(fromCenterY, fromCenterX);
            if (angle < 0) angle = 2 * Math.PI + angle; // normalize


            for (var pie in pieData) {
                if (angle >= pieData[pie]['startAngle'] && angle <= pieData[pie]['endAngle']) {

                    if (pieData[pie]['visible'] == false) {
                        model.selectNbPieClicked();
                        model.setVisiblePie(pie, true);
                    } else {
                        model.unselectNbPieClicked();
                        model.setVisiblePie(pie, false);
                    }
                }
            }
        }
        view.drawPie(target);
    }

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