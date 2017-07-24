<?php

use Pagekit\Application as App;
use Pagekit\User\Model\User;

return [
	'name' => 'fevm/lastusers',

	'label' => 'Last Registered users',

	'events' => [
		'view.scripts' => function( $event, $scripts ) use ( $app ) {

			$scripts->register(
				'widget-lastusers',
				'lastusers:app/bundle/widget-lastusers.js',
				[ '~widgets' ]
			);
		}
	],

	'render' => function( $widget ) use ( $app ) {

		$c = $widget->get('count');
		$o = ($widget->get('order')? 'DESC' : 'ASC');
		$config   = $widget->get( 'config' );

			if ($c > 0){
				$users = User::query()->limit( $widget->get( 'count' ) )->orderBy( 'registered', $o )->get();
			}
			else{
				$users = User::query()->orderBy( 'registered', $o )->get();

			}




		//date formatting;
		$app[ 'view' ]->script( 'user', 'user:app/bundle/user-index.js', 'vue' );

		return $app->view( 'lastusers/widget/lastusers.php', compact( 'widget', 'users' ) );
	}
];


?>
