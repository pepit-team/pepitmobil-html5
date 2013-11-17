<div class="container">

    <?php

    $file = new File(WWW_ROOT . DS . 'data/exercises.json');
    $json = $file->read(true, 'r');
    $exercises = json_decode($json, true);

    $titles = array();
    $subTitles = array();
    $paths = array();
    for ($level_index = 0; $level_index < count($exercises['levels']); $level_index++) {
        $titles[$level_index] = $exercises['levels'][$level_index]['label'];
        $subTitles[$level_index] = $exercises['levels'][$level_index]['subLabel'];
        $paths[$level_index] = 'exercises/' . $exercises['levels'][$level_index]['name'] . '/exercise-' . $exercises['levels'][$level_index]['name'];
    }
    $colors = array('primary', 'success', 'warning', 'info');

    // md and lg device
    $k = 0;
    for ($i = 1; $i <= 3; $i++) {
        echo '<div class="row visible-md visible-lg" style="padding: 10px">';
        for ($j = 1; $j <= 4; $j++) {
            echo '<div class="col-md-3 visible-md visible-lg">';
            echo $this->Html->link($titles[$k] . '<br><i style="font-size: 12px">' . $subTitles[$k] . '</i>',
                array('controller' => 'pages', 'action' => 'display', $paths[$k]),
                array('class' => 'btn btn-' . $colors[$k % 4] . ' btn-md active visible-md visible-lg', 'role' => 'button',
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
            echo $this->Html->link($titles[$k] . '<br><i style="font-size: 12px">' . $subTitles[$k] . '</i>',
                array('controller' => 'pages', 'action' => 'display', $paths[$k]),
                array('class' => 'btn btn-' . $colors[$k % 4] . ' btn-sm active visible-sm', 'role' => 'button',
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
            echo $this->Html->link($titles[$k] . '<br><i style="font-size: 12px">' . $subTitles[$k] . '</i>',
                array('controller' => 'pages', 'action' => 'display', $paths[$k]),
                array('class' => 'btn btn-' . $colors[$k % 4] . ' btn-xs active visible-xs', 'role' => 'button',
                    'escape' => false));
            echo '</div>';
            $k++;
        }
        echo '</div>';
    }

    ?>
</div>