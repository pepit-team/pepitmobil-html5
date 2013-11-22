<?php
/**
 *  This file is part of PepitMobil project.
 *
 *  PepitMobil is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This Web application is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with PepitMobil.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @copyright     Copyright (c) PepitMobil
 * @link          http://pepit.be
 * @package       app.View.Layouts
 * @license       http://www.gnu.org/licenses/ GPLv3 License
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    echo '<meta charset="utf-8">';
    echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo $this->Html->meta('icon');
    ?>

    <title>
        <?php __('PepitMobil'); ?>
        <?php echo $title_for_layout; ?>
    </title>

    <?php
    echo $this->Html->css('pepitmobil');
    echo $this->Html->css('bootstrap.min');
    echo $this->Html->css('bootstrap-theme.min');

    echo $this->Html->script('jquery.min');
    echo $this->Html->script('bootstrap.min');

    echo $scripts_for_layout;
    ?>
</head>
<body>

<div id="#content">
<?php echo $content_for_layout; ?>
</div>

</body>
</html>