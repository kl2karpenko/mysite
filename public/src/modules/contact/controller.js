define(['app'], function (app) {

	return app.controller('ContactCtrl', function ($scope) {
		$scope.contacts = [
			{
				name: "E-mail",
				value: "kl2.karpenko@gmail.com",
				icon: 'fa fa-envelope'
			},
			{
				name: "LinkedIn",
				value: "https://ua.linkedin.com/in/kl2karpenko",
				icon: 'fa fa-linkedin'
			},
			{
				name: "Facebook",
				value: "https://facebook.com/kl2karpenko",
				icon: 'fa fa-facebook'
			}
		];
	});

});