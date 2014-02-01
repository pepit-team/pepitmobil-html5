m.francais.ecrirelettre.Model = function (number, min, max, sh, n) {

// public methods
    this.checkLetter = function(x, y) {
        var word = this.getWord();
        var letterIndex = findLetter(coordinates[this.getIndex()], word, x, y);

        if (letterIndex != -1 && result[letterIndex] == '--') {
            result[letterIndex] = word[letterIndex];
            ++responseNumber;
            this.setOkResult(responseNumber == letterNumber);
            return true;
        } else {
            return false;
        }
    };

    this.generateCoordinates = function (i, letter) {
        var x;
        var y;

        do {
            x = Math.random();
            y = Math.random();
        } while (!validCoordinates(i, x, y));

        coordinates[i].push(
            {
                letter: letter,
                x: x,
                y: y
            });
    };

    this.generateLetters = function(number) {
        coordinates = [];
        for (var i = 0; i < number; ++i) {
            coordinates.push([]);
            for (var k = 0; k < words[this.getImageIndex2(i) - 1].length; ++k) {
                this.generateCoordinates(i, words[this.getImageIndex2(i) - 1][k]);
            }
            for (var j = 0; j < 20; ++j) {
                var n = letters.length;
                var index;

                do {
                    index = Math.floor(Math.random() * n);
                } while (!validLetter(letters[index], words[this.getImageIndex2(i) - 1]));

                this.generateCoordinates(i, letters[index]);
            }
        }
    };

    this.getCoordinates = function() {
        return coordinates[this.getIndex()];
    };

    this.getResult = function() {
        return result;
    };

    this.getWord = function() {
        return words[this.getImageIndex() - 1];
    };

    this.init = function(number, min, max, sh, n) {
        this.base(number, min, max, sh);
        this.generateLetters(number);
        if (letterNumber == 5) {
            result = [ '--', '--', '--', '--', '--' ];
        } else {
            result = [ '--', '--', '--', '--', '--', '--' ];
        }
        responseNumber = 0;
        letterNumber = n;
    };

    this.reset = function() {
        if (letterNumber == 5) {
            result = [ '--', '--', '--', '--', '--' ];
        } else {
            result = [ '--', '--', '--', '--', '--', '--' ];
        }
        responseNumber = 0;
    };

// private methods
    var findLetter = function (coordinates, word, x, y) {
        var found = false;
        var i = 0;

        while (!found && i < coordinates.length) {
            var dx = coordinates[i].x - x;
            var dy = coordinates[i].y - y;

            if (Math.sqrt(dx * dx + dy * dy) < 0.1) {
                found = true;
            } else {
                ++i;
            }
        }
        if (found) {
            var letter = coordinates[i].letter;
            var j = 0;

            found = false;
            while (!found && j < word.length) {
                if (word[j] === letter) {
                    found = true;
                } else {
                    ++j;
                }
            }
            if (found) {
                coordinates.splice(i, 1);
                return j;
            } else {
                return -1;
            }
        } else {
            return -1;
        }
    };

    var validCoordinates = function (index, x, y) {
        if (x > 0.1 && x < 0.9 && y > 0.1 && y < 0.9) {
            if (x > 0.3 && x < 0.7 && y < 0.5) {
                return false;
            } else {
                var found = false;
                var i = 0;

                while (!found && i < coordinates[index].length) {
                    var dx = coordinates[index][i].x - x;
                    var dy = coordinates[index][i].y - y;

                    if (Math.sqrt(dx * dx + dy * dy) < 0.1) {
                        found = true;
                    } else {
                        ++i;
                    }
                }
                return !found;
            }
        } else {
            return false;
        }
    };

    var validLetter = function (letter, word) {
        var found = false;
        var i = 0;

        while (!found && i < word.length) {
            if (letter != word[i]) {
                ++i;
            } else {
                found = true;
            }
        }
        return !found;
    };

// private attributes
    var letters = 'abcçdefghijklmnopqrstuvwxyzéèêàâîôû';
    var words = [
        'chien', 'mulot', 'vache', 'poule', 'lapin',
        'craie', 'livre', 'règle', 'stylo', 'gomme',
        'tortue', 'domino', 'maison', 'cerise', 'navire',
        'éponge', 'crayon', 'cahier', 'feutre', 'livres'
    ];
    var coordinates;
    var letterNumber;

    var result;
    var responseNumber;

    this.base = m.francais.determinants.Model;

    this.init(number, min, max, sh, n);
};

m.francais.ecrirelettre.Model.prototype = new m.francais.determinants.Model;