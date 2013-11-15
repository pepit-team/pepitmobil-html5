m.francais.ununedes.View = function (mdl, u, div, number, min, max, sh) {

    this.buildController = function(model) {
        return new m.francais.ununedes.Controller(model, this)
    };

    this.init = function (mdl, u, view, number, min, max, sh) {
        var model;

        this.base(mdl, u, view, number, min, max, sh);
        model = new m.francais.ununedes.Model(number, min, max, sh);
        this.setModel(model);
        this.init_div(view);
        this.setController(this.buildController(model));
    };

    this.getDeterminant = function (i) {
        return this.determinants[i];
    };

    this.base = m.francais.determinants.View;
    this.determinants = ["un", "une", "des"];

    this.init(mdl, u, div, number, min, max, sh);

};

m.francais.ununedes.View.prototype = new m.francais.determinants.View;