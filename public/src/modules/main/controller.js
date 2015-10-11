define(['app'], function (app) {

	console.log(app);

	app.controller('HomeCtrl', function ($scope) {
		$scope.message = "Message from HomeCtrl";
	});

	return app;
});