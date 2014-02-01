m.francais.ununedes.Model = function (number, min, max, sh) {

    this.init = function(number, min, max, sh) {
        this.base(number, min, max, sh);
    };

    this.getWord = function() {
        return words[this.getImageIndex() - 1];
    };

    var words = [ 'une poule', 'un chameau', 'des pingouins', 'un poisson', 'une chèvre',
        'un papillon', 'un singe', 'une souris', 'un chien', 'des canards',
        'un hibou', 'une tortue', 'un cochon', 'des poussins', 'un poulain',
        'un lièvre', 'des oies', 'une biche', 'un taureau', 'un dauphin',
        'un zèbre', 'une vache', 'un chat', 'des hirondelles', 'un mouton'];

    this.base = m.francais.determinants.Model;

    this.init(number, min, max, sh);
};

m.francais.ununedes.Model.prototype = new m.francais.determinants.Model;