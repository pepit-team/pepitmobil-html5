<?php

$file = new File(WWW_ROOT . DS . 'data/exercises.json');
$json = $file->read(true, 'r');
$exercises = json_decode($json, true);

?>

<div class="container">
    <div class="panel-group" id="accordion">

        <?php

        for ($subject_index = 0; $subject_index < count($exercises['levels'][0]['subjects']); $subject_index++) {
            $subject = $exercises["levels"][0]["subjects"][$subject_index];
            echo '<div class="panel panel-default">';
            echo '<div class="panel-heading">';
            echo '<h4 class="panel-title">';
            echo '<a data-toggle="collapse" data-parent="#accordion" href="#collapse' . ($subject_index + 1) . '">';
            echo $subject["label"] . '<br>';
            echo '</a></h4></div>';

            echo '<div id="collapse' . ($subject_index + 1) . '" class="panel-collapse collapse';
            if ($subject_index == 0) {
                echo ' in">';
            } else {
                echo '">';
            }
            echo '<div class="panel-body">';

            for ($exercise_index = 0; $exercise_index < count($subject["topics"]); $exercise_index++) {
                $exercise = $subject["topics"][$exercise_index];
                echo '<li class="list-group-item">';
                echo $this->Html->link($exercise['label'],
                    array('controller' => 'pages', 'action' => 'display',
                        'exercises/m/' . $subject['name'] . '/' . $exercise['name']),
                    array('escape' => false));

                if ($exercise["version"] > 0) {
                    echo '<span class="glyphicon glyphicon-check" style="float: right"></span>';
                } else {
                    echo '<span class="glyphicon glyphicon-import" style="float: right"></span>';
                }
                echo '</li>';
            }

            echo '<ul class="list-group">';
            echo '</ul></div></div></div>';
        }

        ?>

    </div>
</div>