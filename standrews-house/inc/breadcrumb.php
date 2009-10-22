<div id="breadcrumb">
	<p>You are here:</p>
	<ul>
		<?php
			foreach($breadcrumb as $bci) {
				if($bci->url && $bci->text) { ?>
					<li><a href="<?php echo $bci->url?>"><?php echo $bci->text?></a></li>
				<?php
				}
				else { ?>
					<li><strong><?php echo $bci->text?></strong></li>
				<?php
				}
			}
		?>
	</ul>
</div>
