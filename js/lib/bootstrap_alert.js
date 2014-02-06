function alertTimeout(wait, engine) {
    setTimeout(function () {
        $('#alert_placeholder').children('.alert:first-child').remove();
        if (engine) {
            engine.next2();
        }
    }, wait);
}

bootstrap_alert = function () {
};

bootstrap_alert.info = function (message, button, engine) {
// md and lg devices
    if (button.length > 0) {
        $('#alert_placeholder').append('<div class="alert alert-success fade in visible-md visible-lg"><h1>' +
            message + '</h1><a class="btn btn-primary btn-md active" data-dismiss="alert"' +
            ' id="alert_button_md_lg">' +
            button + '</a></div>');
        $('#alert_button_md_lg').on('click', function (e) {
            engine.next2();
        });
    } else {
        $('#alert_placeholder').append('<div class="alert alert-success fade in visible-md visible-lg"><h1>' +
            message + '</h1></div>');
        alertTimeout(3000, engine);
    }

// xs and sm devices
    if (button.length > 0) {
        $('#alert_placeholder').append('<div class="alert alert-success fade in visible-xs visible-ms"><h4>' +
            message + '</h4><a class="btn btn-primary btn-xs active" data-dismiss="alert"' +
            ' id="alert_button_xs_sm">' +
            button + '</a></div>');
        $('#alert_button_xs_sm').on('click', function (e) {
            engine.next2();
        });
    } else {
        $('#alert_placeholder').append('<div class="alert alert-success fade in visible-xs visible-ms"><h4>' +
            message + '</h4></div>');
        alertTimeout(3000, engine);
    }
};