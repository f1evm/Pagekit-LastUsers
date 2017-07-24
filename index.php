<?php

use Pagekit\Application;


return [
	'name' => 'lastusers',
	'type' => 'extension',
	'main' => function( Application $app ) {
		// bootstrap code
	},

	'autoload' => [
	],

	'nodes' => [
	],

	'widgets' => [
		'widgets/lastusers.php'
	],
	'resources' => [
		'lastusers:' => ''
	],

	'events' => [
	]
];
