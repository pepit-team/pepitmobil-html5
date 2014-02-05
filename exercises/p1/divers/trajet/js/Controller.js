p1.divers.trajet.Controller = function (m, v) {

// private methods
    var init = function () {
        $('#path_canvas_element').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            var width = target.width;
            var height = target.height;
            var pos = find_pos(target);
            var x = e.clientX - pos.x;
            var y = e.clientY - pos.y;
            var index = Math.floor(x / (width / view.getMaxSize()));

            model.flip(index);
            view.update();
            if (model.check()) {
                view.ok();
            } else {
                view.error();
            }
        });
    };

// private methods
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