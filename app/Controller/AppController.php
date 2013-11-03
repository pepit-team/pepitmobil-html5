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
 * @package       app.Controller
 * @license       http://www.gnu.org/licenses/ GPLv3 License
 */

App::uses('Controller', 'Controller');

class AppController extends Controller
{

    public $components = array(
        'Session',
        'Auth' => array(
            'loginRedirect' => array('controller' => 'pages', 'action' => 'display', 'home'),
            'logoutRedirect' => array('controller' => 'pages', 'action' => 'display', 'home'),
            'authorize' => array('Controller')
        )
    );

    public function beforeFilter()
    {
        $this->Auth->allow('login', 'logout');
    }

    public function isAuthorized($user) {
        return false;
    }

    public function login()
    {
        if ($this->request->is('post')) {
            if ($this->Auth->login()) {
                return $this->redirect($this->Auth->redirectUrl());
            } else {
                $this->Session->setFlash(__('Login ou mot de passe invalide, réessayer'));
            }
        }
    }

    public function logout()
    {
        return $this->redirect($this->Auth->logout());
    }

    /*    public function isAuthorized($user)
        {
            if (isset($user['role']) && $user['role'] === 'admin') {
                return true;
            }
            return false;
        }*/

}