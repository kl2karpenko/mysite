require([
	'app', 'angularAMD',
	'modules/main/controller',
	'modules/contact/controller'
], function (app, angularAMD) {
	app.config(function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: '/src/modules/main/index.html',
					controller: 'HomeCtrl'
				}).
				when('/api', {
					templateUrl: '/src/modules/uuu/index.html',
					controller: 'ContactCtrl'
				}).
				when('/contact', {
					templateUrl: '/src/modules/yyy/index.html',
					controller: 'ContactCtrl'
				}).
				otherwise({
					redirectTo: '/'
				});
		});

	return angularAMD.bootstrap(app);
});
