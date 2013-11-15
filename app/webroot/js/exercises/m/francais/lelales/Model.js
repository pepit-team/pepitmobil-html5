m.francais.lelales.Model = function (number, min, max, sh) {

    this.init = function(number, min, max, sh) {
        this.base(number, min, max, sh);
    };

    this.getWord = function() {
        return words[this.getImageIndex() - 1];
    };

    var words = [ 'la poule', 'le chameau', 'les pingouins', 'le poisson', 'la chèvre',
        'le papillon', 'le singe', 'la souris', 'le chien', 'les canards',
        'le hibou', 'la tortue', 'le cochon', 'les poussins', 'le poulain',
        'le lièvre', 'les oies', 'la biche', 'le taureau', 'le dauphin',
        'le zèbre', 'la vache', 'le chat', 'les hirondelles', 'le mouton'];

    this.base = m.francais.determinants.Model;

    this.init(number, min, max, sh);
};

m.francais.lelales.Model.prototype = new m.francais.determinants.Model;