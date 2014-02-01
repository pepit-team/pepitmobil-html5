m.divers.formes.Controller = function (m, v) {

// private methods
    var init = function () {
        for (var i = 0; i < view.getColorNameNumber(); ++i) {
            init_color_button(i, "md_lg");
        }
        for (var i = 0; i < view.getColorNameNumber(); ++i) {
            init_color_button(i, "xs_sm");
        }
        $('#canvas_element_md_lg').on('click', function (e) {
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
        $('#canvas_element_xs_sm').on('click', function (e) {
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

    var init_color_button = function (i, style) {
        var color_name = view.getColorName(i);

        $('#cell_' + color_name + "_" + style).on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            var s = target.id.substring(target.id.indexOf('_') + 1, target.id.length);

            view.unselect_color_cells();
            target.style.borderWidth = '5px';
            model.setColor(s.substring(0, s.indexOf('_')));
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