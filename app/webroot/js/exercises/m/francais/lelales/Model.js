m.francais.lelales.Model = function (number, min, max, sh) {

// public attributes
    this.check = function(choice) {
        var word = this.getWord();
        var response = word.substring(0, word.indexOf(' '));

        okResult = choice == response;
        return okResult;
    };

    this.getImageIndex = function() {
        return image_index[shift + index];
    };

    this.getWord = function() {
        return words[image_index[shift + index] - 1];
    };

    this.isOkResult = function() {
        return okResult;
    };

    this.next = function () {
        ++index;
        okResult = false;
    };

    this.restart = function(sh) {
        shift = sh;
        index = 0;
    };

// private methods
    var init = function (number, min, max, sh) {
        var i = 0;
        var j;
        var n;
        var found;

        shift = sh;
        image_index = [];
        do {
            n = Math.floor(Math.random() * (max + 1)) + min + 1;
            found = false;

            j = 0;
            while (!found && j < image_index.length) {
                if (image_index[j] == n) {
                    found = true;
                } else {
                    ++j;
                }
            }
            if (!found) {
                image_index.push(n);
                ++i;
            }
        } while (i < number);
        index = 0;
        okResult = false;
    };

// private attributes
    var words = [ 'la poule', 'le chameau', 'les pingouins', 'le poisson', 'la chèvre',
        'le papillon', 'le singe', 'la souris', 'le chien', 'les canards',
        'le hibou', 'la tortue', 'le cochon', 'les poussins', 'le poulain',
        'le lièvre', 'les oies', 'la biche', 'le taureau', 'le dauphin',
        'le zèbre', 'la vache', 'le chat', 'les hirondelles', 'le mouton'];
    var shift;
    var image_index;
    var index;
    var okResult;

    init(number, min, max, sh);
};