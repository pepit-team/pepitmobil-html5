m.math.compterecrire.View = function (mdl, div) {

// public methods
    this.error = function () {
        module.error();
    };

    this.init = function (mdl, view) {
        module = mdl;
        model = new m.math.compterecrire.Model();
        init_div(view);
        controller = new m.math.compterecrire.Controller(model, this);
    };

    this.next = function () {
        model.next();

        this.update();
    };

    this.resize = function(){
        size__three_canvas();
    }

    this.update = function () {
        if (model.isOkResult()) {
            module.next();
        }
    };

// private methods

    var build_three_canvas = function(view){

        var three_canvas = $('<canvas/>',{
            id: 'three_canvas',
            class: 'visible-xs visible-sm visible-md visible-lg',
            style: 'margin:auto; width:465px; height:620px; border:1px;'
        });

        three_canvas.appendTo(view);
        size_three_canvas();

    };

    var draw_three_canvas = function(){
        var c = $("#three_canvas")[0];
        var ctx = c.getContext("2d");

        var height = c.height;
        var width = c.width;

        var background = new Image();
        background.src = 'exercises/m/math/compterecrire/img/three.png';


        //Draw Background
        background.onload = function(){
            ctx.drawImage(background,0,0,height,width);
            ctx.stroke();
        }

        //Draw Table
        ctx.beginPath();
        for(var i=0;i<5;i++){
            ctx.moveTo(parseInt(i*(width/5)),0);
            ctx.lineTo(parseInt(i*(width/5)),parseInt(height/2));
        }
    };

    var init_div = function (view) {
        build_three_canvas(view);
        draw_three_canvas();
    };

    var size_three_canvas = function(){
        var wc = parseInt($('#three_canvas').css("width"));
        var wp = parseInt($('#three_canvas').parent().css("width"));
        var wce = parseInt(wp * 0.8);

        if(wp > 750 ){
            $("#three_canvas").css("width","600");
            $("#three_canvas").css("height","300");
        }
        else{
            $("#three_canvas").css("width",wce);
            $("#three_canvas").css("height",parseInt(wce/2));
        }
    };

// private attributes
    var module;
    var model;
    var controller;

    this.init(mdl, div);
};