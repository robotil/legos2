<?php use_helper( 'Auswahl' )?>

<h1>List of towing activites</h1>

<?php

echo auswahlFilter ( array (
		'Tag' 
), $tractors, $route, array (
		'Fahrzeugfilter',
		'Schlepper' 
), '' );
?>
