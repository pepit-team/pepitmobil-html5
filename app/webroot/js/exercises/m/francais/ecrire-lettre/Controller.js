m.francais.ecrirelettre.Controller = function (model, view) {

// private methods
    var init = function () {
        $('#canvas_element_md_lg').on('click', function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            var width = target.width;
            var height = target.height;
            var pos = find_pos(target);
            var x = e.clientX - pos.x;
            var y = e.clientY - pos.y;

            if (model.checkLetter(x / width, y / height)) {
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

            if (model.checkLetter(x / width, y / height)) {
                view.update();
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
    var model = model;
    var view = view;

    init();
};