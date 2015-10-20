define(['app'], function (app) {

	var navItems = [
		{
			name: 'Home',
			url: '#home'
		},
		{
			name: 'Contact',
			url: '#contact'
		}
	];

	app.controller('NavCtrl', function ($scope, $location) {
		$scope.navItems = navItems;
		$scope.getActiveClass = function (path) {
			if ($location.url().indexOf(path.replace('#','')) !== -1) {
				return 'active';
			} else {
				return '';
			}
		};
	});

	return app;
});