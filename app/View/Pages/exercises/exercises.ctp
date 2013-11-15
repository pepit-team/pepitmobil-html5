<div class="container">

    <?php

    $titles = array('M - Maternelles', 'P1 - Niveau 1', 'P2 - Niveau 2', 'P3 - Niveau 3',
        'P4 - Niveau 4', 'P5 - Niveau 5', 'P6 - Niveau 6', 'C - Conjugaison', 'T - Tables de multiplication',
        'ES. Ens. spécial', 'PT - Pour tous !', 'S - Secondaire');
    $subTitles = array('A partir de 4 ans', 'A partir de 7 ans', 'A partir de 8 ans', 'A partir de 9 ans',
        'A partir de 10 ans', 'A partir de 11 ans', 'A partir de 12 ans', 'A partir de 8 ans',
        'A partir de 8 ans', 'Pour tous', 'De 5 à 75 ans et plus !', 'A partir de 12 ans');
    $paths = array('exercises/m/exercise-m', 'exercises/p1/exercise-p1', 'exercises/p2/exercise-p2',
        'exercises/p3/exercise-p3', 'exercises/p4/exercise-p4', 'exercises/p5/exercise-p5',
        'exercises/p6/exercise-p6', 'exercises/c/exercise-c', 'exercises/t/exercise-t',
        'exercises/es/exercise-es', 'exercises/pt/exercise-pt', 'exercises/s/exercise-s');
    $colors = array('primary', 'success', 'warning', 'info');

    // md and lg device
    $k = 0;
    for ($i = 1; $i <= 3; $i++) {
        echo '<div class="row visible-md visible-lg" style="padding: 10px">';
        for ($j = 1; $j <= 4; $j++) {
            echo '<div class="col-md-3 visible-md visible-lg">';
            echo $this->Html->link($titles[$k].'<br><i style="font-size: 12px">'.$subTitles[$k].'</i>',
                array('controller' => 'pages', 'action' => 'display', $paths[$k]),
                array('class' => 'btn btn-'.$colors[$k % 4].' btn-md active visible-md visible-lg', 'role' => 'button',
                    'escape' => false));
            echo '</div>';
            $k++;
        }
        echo '</div>';
    }

    // sm device
    $k = 0;
    for ($i = 1; $i <= 4; $i++) {
        echo '<div class="row visible-sm" style="padding: 10px">';
        for ($j = 1; $j <= 3; $j++) {
            echo '<div class="col-sm-4 visible-sm">';
            echo $this->Html->link($titles[$k].'<br><i style="font-size: 12px">'.$subTitles[$k].'</i>',
                array('controller' => 'pages', 'action' => 'display', $paths[$k]),
                array('class' => 'btn btn-'.$colors[$k % 4].' btn-sm active visible-sm', 'role' => 'button',
                    'escape' => false));
            echo '</div>';
            $k++;
        }
        echo '</div>';
    }

    // xs device
    $k = 0;
    for ($i = 1; $i <= 6; $i++) {
        echo '<div class="row visible-xs" style="padding: 10px">';
        for ($j = 1; $j <= 2; $j++) {
            echo '<div class="col-xs-6 visible-xs">';
            echo $this->Html->link($titles[$k].'<br><i style="font-size: 12px">'.$subTitles[$k].'</i>',
                array('controller' => 'pages', 'action' => 'display', $paths[$k]),
                array('class' => 'btn btn-'.$colors[$k % 4].' btn-xs active visible-xs', 'role' => 'button',
                    'escape' => false));
            echo '</div>';
            $k++;
        }
        echo '</div>';
    }

    ?>
</div>