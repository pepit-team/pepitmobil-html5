<?php
echo $this->Html->script('exercises/engine');
echo $this->Html->script('exercises/m/level');
echo $this->Html->script('exercises/m/math/subject');
echo $this->Html->script('exercises/m/math/completeradditionner/topic');
echo $this->Html->script('exercises/m/math/completeradditionner/Controller');
echo $this->Html->script('exercises/m/math/completeradditionner/Model');
echo $this->Html->script('exercises/m/math/completeradditionner/Module');
echo $this->Html->script('exercises/m/math/completeradditionner/View');
?>

<script language="javascript">
    $(document).ready(function () {
        new engine(new m.math.completeradditionner.Module());
    });
</script>

<div class="container" id="exercise-view">
</div>