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

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <?php echo $this->Html->charset(); ?>
    <title>
        <?php __('PepitMobil'); ?>
        <?php echo $title_for_layout; ?>
    </title>
    <?php
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo $this->Html->meta('icon');
    echo $this->Html->css('pepitmobil');
    echo $this->Html->css('bootstrap.min');
    echo $this->Html->css('bootstrap-theme.min');

    echo $this->Html->script('jquery.min');
    echo $this->Html->script('bootstrap.min');

    echo $scripts_for_layout;
    ?>
</head>
<body>

<div style="height: 60px;">
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <?php
                echo $this->Html->link(__('PepitMobil'), array('controller' => 'pages', 'action' => 'display', 'home'),
                    array("class" => "navbar-brand"));
                ?>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li>
                    </li>
                    <li>
                        <?php
                        echo $this->Html->link(__('Exercises'), array('controller' => 'pages', 'action' => 'display', 'exercises/exercises'));
                        ?>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <?php
                        if (AuthComponent::user('id') != 0) {
                            echo $this->Html->link('Logout', array('controller' => 'users', 'action' => 'logout'), array("data-icon" => "check", "class" => "ui-btn-active")) . ' ' . AuthComponent::user('username');
                        } else {
                            echo $this->Html->link('Sign in', array('controller' => 'users', 'action' => 'login'), array("data-icon" => "check", "class" => "ui-btn-active"));
                        }
                        ?>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<?php echo $content_for_layout; ?>

</body>
</html>