<div data-role="content">
    <div class="ui-grid-b">
        <div class="ui-block-a">
            <?php
            echo $this->Html->link('<H2>M - Maternelles</H2><H4>A partir de 4 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-m'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="ui-block-b">
            <?php
            echo $this->Html->link('<H2>P4 - Niveau 4</H2><H4>A partir de 10 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p4'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="ui-block-c">
            <?php
            echo $this->Html->link('<H2>T - Tables de multiplication</H2><H4>A partir de 8 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-t'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
    </div>
    <div class="ui-grid-b">
        <div class="ui-block-a">
            <?php
            echo $this->Html->link('<H2>P1 - Niveau 1</H2><H4>A partir de 7 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p1'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="ui-block-b">
            <?php
            echo $this->Html->link('<H2>P5 - Niveau 5</H2><H4>A partir de 11 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p5'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="ui-block-c">
            <?php
            echo $this->Html->link('<H2>ES - Ens. spécial</H2><H4>Pour tous</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-es'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
    </div>
    <div class="ui-grid-b">
        <div class="ui-block-a">
            <?php
            echo $this->Html->link('<H2>P2 - Niveau 2</H2><H4>A partir de 8 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p2'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="ui-block-b">
            <?php
            echo $this->Html->link('<H2>P6 - Niveau 6</H2><H4>A partir de 12 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p6'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="ui-block-c">
            <?php
            echo $this->Html->link('<H2>PT - Pour tous !</H2><H4>De 5 à 75 ans et plus !</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-pt'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
    </div>
    <div class="ui-grid-b">
        <div class="ui-block-a">
            <?php
            echo $this->Html->link('<H2>P3 - Niveau 3</H2><H4>A partir de 9 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-p3'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="ui-block-b">
            <?php
            echo $this->Html->link('<H2>C - Conjugaison</H2><H4>A partir de 8 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-c'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
        <div class="ui-block-c">
            <?php
            echo $this->Html->link('<H2>S - Secondaire</H2><H4>A partir de 12 ans</H4>',
                array('controller' => 'pages', 'action' => 'display', 'exercise-s'),
                array('data-mini' => 'true', 'data-role' => 'button', 'escape' => false));
            ?>
        </div>
    </div>
</div>

<div data-role="footer" class="ui-bar"
     style="position: absolute; bottom: 0; width: 100%; margin-left:auto; margin-right:auto; align:center; text-align:center;">
    <div data-role="controlgroup" data-type="horizontal">
        <a href="#">About</a>
    </div>
</div>