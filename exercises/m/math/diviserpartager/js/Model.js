m.math.diviserpartager.Model = function () {

// public methods
    this.check = function() {
        if(nbRandom == inputNumber && nbRandom == nbPieClicked){
            okResult = true;
        }else{
            okResult = false;
        }

        return okResult;
    };

    this.isOkResult = function() {
        return okResult;
    };

    this.next = function() {
        //Génération d'un nombre aléatoire de 4 à 8 pour afficher les personnages
        nbRandom = Math.round(Math.random() * (8 - 4) + 4);
        okResult = false;
    };

    this.reset = function() {
    };

    this.getNbRandom = function(){
        return nbRandom;
    };

    this.setInputNumber = function(n){
        inputNumber = n;

    };

    this.setPieSelectedNumber = function(n){
        pieSelectedNumber = n;
    };

    this.initPieCanvasData = function(){
        var lastPosition = 0;

        for(var i=0;i<=8;i++) {
            pieCanvasData[i] = [];
            pieCanvasData[i]['value'] = 12.5;
            pieCanvasData[i]['nb'] = i;
            pieCanvasData[i]['visible'] = 0;
            pieCanvasData[i]['startAngle'] = 2 * Math.PI * lastPosition;
            pieCanvasData[i]['endAngle'] = 2 * Math.PI * (lastPosition + 0.125);
            lastPosition += 0.125;
        }
    };

    this.getPieCanvasData = function(){
        return pieCanvasData;
    };

    this.setCenter = function(pWidth, pHeight){
        var width = pWidth;
        var height = pHeight;
        center = {x: width / 2, y: height / 2}
    };

    this.getCenter = function(){
        return center;
    }

    this.setRadius = function(width, height){
        radius = Math.min(width -2, height -2) / 2;
    }

    this.getRadius = function(){
        return radius;
    }

    this.initNbPieClicked = function(){
        nbPieClicked = 0;
    }

    this.selectNbPieClicked = function(){
        nbPieClicked++;
    }

    this.unselectNbPieClicked = function(){
        nbPieClicked--;
    }

    this.getNbPieClicked = function(){
        return nbPieClicked;
    }

// private methods
    var init = function() {
        //Génération d'un nombre aléatoire de 4 à 8 pour afficher les personnages
        nbRandom = Math.round(Math.random() * (8 - 4) + 4);
        okResult = false;
    };

// private attributes
    var okResult;
    var nbRandom;
    //variable qui contient le nombre saisi dans la zone de texte
    var inputNumber;

    //variable contenant le nombre de parts selectionnés par l'utilisateur
    var pieSelectedNumber;

    //Canvas
    var pieCanvasData = [];
    var center;
    var radius;
    var nbPieClicked = 0;

    init();
};