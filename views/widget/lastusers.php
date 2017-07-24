<?php
	$app[ 'view' ]->style( 'lastusers', 'lastusers:css/lastusers.css', 'UIKit' );
?>

<div id="users">
	<?php if ( isset( $users ) && $users ) : ?>
		<ul class="uk-list uk-padding-remove">
			<?php
			$hop = false;
			foreach ( $users as $user ) : ?>
				<li class="lu-lessheight">
					<?= $hop ? "<br/>":""; ?>
					<?php $hop = true; ?>
						<?= ($widget->get('showusername') ? $user->username . "&nbsp;&nbsp;" : ""); ?><?= ($widget->get('showfullname') ? $user->name : ""); ?>
						<small class="lu-lessheight"><br/><?= __( 'Since'). ' '.$user->registered->format(__("Y-m-d") ) ?></small>
				</li>
			<?php endforeach; ?>
		</ul>
	<?php else: ?>
		<div class="uk-alert uk-alert-large" data-uk-alert="">
			<p>
				<?= __( 'There are no user to show.' ); ?>
			</p>
		</div>
	<?php endif; ?>
</div>
