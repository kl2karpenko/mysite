define(['app'], function (app) {

	console.log('contact')

	app.controller('ContactCtrl', function ($scope) {
		$scope.email = "kl2.karpenko@gmail.com";
	});

	return app;
});