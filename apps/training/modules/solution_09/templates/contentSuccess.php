<?php use_helper('Javascript')?>

<div id="content">

	<table class="daten" titel="Activities" id="taxibot-towing">
		<thead>
			<tr>
				<th>ID</th>
				<th>Flight Number</th>
				<th>Tractor</th>
				<th>Departure</th>
				<th>On Position</th>
				<th>Completed</th>
			</tr>
		</thead>
		<tbody>
		<?php foreach( $activities as $activity ): ?>
			<tr>
				<td><?php echo $activity->getId(); ?>
				
				
				<td><?php echo $activity->getTrip(); ?></td>
				<td><?php echo $activity->getTaxibotTractor(); ?></td>
				<td><?php echo $activity->getDeparture(); ?></td>
				<td><?php echo $activity->getReady(); ?></td>
				<td><?php echo $activity->getCompleted(); ?></td>
			</tr>
		<?php endforeach; ?>
		</tbody>
	</table>
</div>