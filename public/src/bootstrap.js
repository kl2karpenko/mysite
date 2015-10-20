require([
	'app', 'angularAMD',
	'modules/nav/controller',
	'modules/main/controller',
	'modules/contact/controller'
], function (app, angularAMD) {
	app.config(function($routeProvider, $locationProvider) {
			$routeProvider.
				when('/home', {
					templateUrl: '/src/modules/main/index.html',
					controller: 'HomeCtrl'
				}).
				when('/contact', {
					templateUrl: '/src/modules/contact/index.html',
					controller: 'ContactCtrl'
				}).
				otherwise({
					redirectTo: '/'
				});
		});

	return angularAMD.bootstrap(app);
});
