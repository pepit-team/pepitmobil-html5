<?php
echo $this->Html->script('bootstrap_alert');
echo $this->Html->script('exercises/Engine');
echo $this->Html->script('exercises/Score');
echo $this->Html->script('exercises/m/Level');
echo $this->Html->script('exercises/m/divers/Subject');
echo $this->Html->script('exercises/m/divers/formes/Topic');
echo $this->Html->script('exercises/m/divers/formes/Controller');
echo $this->Html->script('exercises/m/divers/formes/Model');
echo $this->Html->script('exercises/m/divers/formes/Module');
echo $this->Html->script('exercises/m/divers/formes/View');
?>

<script language="javascript">
    $(document).ready(function () {
        var e = new engine('exercises/m/exercise-m', '<?php echo $this->webroot; ?>');
        var module = new m.divers.formes.Module(e, '<?php echo $this->webroot; ?>');

        e.init(module);
    });
</script>

<div class="container" id="exercise-view" style="width: 95%">
</div>
<div id="alert_placeholder" style="position:absolute; top:50%; left:50%;"></div>
