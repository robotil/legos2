<?php

// this check prevents access to debug front controllers that are deployed by accident to production servers.
// feel free to remove this, extend it or make something more sophisticated.
// if (!in_array(@$_SERVER['REMOTE_ADDR'], array('172.28.69.146')))
// {
// die('You are not allowed to access this file. Check '.basename(__FILE__).' for more information.');
// }
require_once (dirname ( __FILE__ ) . '/../config/ProjectConfiguration.class.php');

$configuration = ProjectConfiguration::getApplicationConfiguration ( 'training', 'dev', true );
sfContext::createInstance ( $configuration )->dispatch ();
