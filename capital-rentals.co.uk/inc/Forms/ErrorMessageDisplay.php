<div id="errorMessage">
	<h3>The form has <?php echo count($commonErrors)?> error(s). Please check below:</h3>
	<ul>
		<?php foreach($commonErrors as $error) { ?>
			<li><a href="#<?php echo $error->id?>"><?php echo $error->message; ?></a></li>
		<?php } ?>
	</ul>
</div>