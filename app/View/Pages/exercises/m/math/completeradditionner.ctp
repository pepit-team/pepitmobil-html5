<?php
echo $this->Html->script('bootstrap_alert');
echo $this->Html->script('exercises/Engine');
echo $this->Html->script('exercises/Score');
echo $this->Html->script('exercises/m/Level');
echo $this->Html->script('exercises/m/math/Subject');
echo $this->Html->script('exercises/m/math/completeradditionner/Topic');
echo $this->Html->script('exercises/m/math/completeradditionner/Controller');
echo $this->Html->script('exercises/m/math/completeradditionner/Model');
echo $this->Html->script('exercises/m/math/completeradditionner/Module');
echo $this->Html->script('exercises/m/math/completeradditionner/View');
?>

<script language="javascript">
    $(document).ready(function () {
        var e = new engine('exercises/m/exercise-m', '<?php echo $this->webroot; ?>');
        var module = new m.math.completeradditionner.Module(e, '<?php echo $this->webroot; ?>');

        e.init(module);
    });
</script>

<div class="container" id="exercise-view">
</div>
<div id="alert_placeholder" style="position:absolute; top:50%; left:50%;"></div>
