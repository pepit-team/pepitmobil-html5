function alertTimeout(wait) {
    setTimeout(function () {
        $('#alert_placeholder').children('.alert:first-child').remove();
    }, wait);
}

bootstrap_alert = function () {
};

bootstrap_alert.info = function (engine, message, button) {
    $('#alert_placeholder').append('<div class="alert alert-success fade in"><h1>' +
        message + '</h1><a class="btn btn-primary btn-xs active" data-dismiss="alert" id="alert_button">' +
        button + '</a></div>');
    $('#alert_button').on('click', function (e) {
        engine.next2();
    });
};