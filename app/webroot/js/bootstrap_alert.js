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
    if (button.length > 0) {
        $('#alert_placeholder').append('<div class="alert alert-success fade in"><h1>' +
            message + '</h1><a class="btn btn-primary btn-xs active" data-dismiss="alert" id="alert_button">' +
            button + '</a></div>');
        $('#alert_button').on('click', function (e) {
            engine.next2();
        });
    } else {
        $('#alert_placeholder').append('<div class="alert alert-success fade in"><h1>' +
            message + '</h1></div>');
        alertTimeout(3000, engine);
    }
};