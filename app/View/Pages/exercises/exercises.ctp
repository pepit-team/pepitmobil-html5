<div class="container">
    <div class="row" style="padding: 10px">
        <div class="col-md-4">
            <?php
            echo $this->Html->link('M - Maternelles<br><i style="font-size: 12px">A partir de 4 ans</i>',
                array('controller' => 'pages', 'action' => 'display', 'exercises/m/exercise-m'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="col-md-4">
            <?php
            echo $this->Html->link('P4 - Niveau 4<br><i style="font-size: 12px">A partir de 10 ans</i>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p4'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="col-md-4">
            <?php
            echo $this->Html->link('T - Tables de multiplication<br><i style="font-size: 12px">A partir de 8 ans',
                array('controller' => 'pages', 'action' => 'display', 'exercise-t'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
    </div>
    <div class="row" style="padding: 10px">
        <div class="col-md-4">
            <?php
            echo $this->Html->link('P1 - Niveau 1<br><i style="font-size: 12px">A partir de 7 ans',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p1'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="col-md-4">
            <?php
            echo $this->Html->link('P5 - Niveau 5<br><i style="font-size: 12px">A partir de 11 ans',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p5'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="col-md-4">
            <?php
            echo $this->Html->link('ES - Ens. spécial<br><i style="font-size: 12px">Pour tous',
                array('controller' => 'pages', 'action' => 'display', 'exercise-es'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
    </div>
    <div class="row" style="padding: 10px">
        <div class="col-md-4">
            <?php
            echo $this->Html->link('P2 - Niveau 2<br><i style="font-size: 12px">A partir de 8 ans',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p2'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="col-md-4">
            <?php
            echo $this->Html->link('P6 - Niveau 6<br><i style="font-size: 12px">A partir de 12 ans',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p6'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="col-md-4">
            <?php
            echo $this->Html->link('PT - Pour tous !<br><i style="font-size: 12px">De 5 à 75 ans et plus !',
                array('controller' => 'pages', 'action' => 'display', 'exercise-pt'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
    </div>
    <div class="row" style="padding: 10px">
        <div class="col-md-4">
            <?php
            echo $this->Html->link('P3 - Niveau 3<br><i style="font-size: 12px">A partir de 9 ans',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p3'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="col-md-4">
            <?php
            echo $this->Html->link('C - Conjugaison<br><i style="font-size: 12px">A partir de 8 ans',
                array('controller' => 'pages', 'action' => 'display', 'exercise-c'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="col-md-4">
            <?php
            echo $this->Html->link('S - Secondaire<br><i style="font-size: 12px">A partir de 12 ans',
                array('controller' => 'pages', 'action' => 'display', 'exercise-s'),
                array('class' => 'btn btn-success btn-lg active', 'role' => 'button', 'escape' => false));
            ?>
        </div>
    </div>
</div>