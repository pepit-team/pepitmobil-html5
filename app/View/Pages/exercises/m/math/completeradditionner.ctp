<?php
echo $this->Html->script('bootstrap_alert');
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
        var e = new engine();
        var module = new m.math.completeradditionner.Module(e);

        e.init(module);
    });
</script>

<div class="container" id="exercise-view">
</div>
<div id="alert_placeholder" style="position:absolute; top:50%; left:50%;"></div>
