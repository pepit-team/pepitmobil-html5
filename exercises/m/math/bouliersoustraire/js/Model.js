m.math.bouliersoustraire.Model = function () {

// public methods
    this.check = function() {
        okResult = true;
        return true;
    };

    this.isOkResult = function() {
        return okResult;
    };

    this.next = function() {
        okResult = false;
    };

    this.reset = function() {
    };

// private methods
    var init = function() {
    };

// private attributes
    var okResult;

    init();
};