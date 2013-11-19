m.divers.formes.Controller = function (m, v) {

// private methods
    var init = function () {
        for (var i = 0; i < view.getColorNameNumber(); ++i) {
            var color_name = view.getColorName(i);

            $('#cell_' + color_name).on('click', function (e) {
                var e = e || window.event;
                var target = e.target || e.srcElement;

                view.unselect_color_cells();
                target.style.borderWidth = '5px';
                model.setColor(target.id.substring(target.id.indexOf('_') + 1, target.id.length));
            });
        }
        $('#canvas_element').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            var width = target.width;
            var height = target.height;
            var pos = find_pos(target);
            var x = e.clientX - pos.x;
            var y = e.clientY - pos.y;

            if (model.checkColor(x / width, y / height)) {
                view.update();
            } else {
                view.error();
            }
        });
    };

// private attributes
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

    var model = m;
    var view = v;

    init();
};