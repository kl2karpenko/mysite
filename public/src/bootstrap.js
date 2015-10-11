require(['app', 'angularAMD', 'angular-route', 'modules/main/controller'], function (app, angularAMD) {

	app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: '/src/modules/main/index.html',
					controller: 'HomeCtrl'
				}).
				when('/api', {
					templateUrl: '/src/modules/main/index.html',
					controller: 'HomeCtrl'
				}).
				when('/contact', {
					templateUrl: '/src/modules/main/index.html',
					controller: 'HomeCtrl'
				}).
				otherwise({
					redirectTo: '/'
				});
		}]);

	return angularAMD.bootstrap(app);
});
