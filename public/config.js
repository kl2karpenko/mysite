require.config({
	baseUrl: "/public",
	paths: {
		'angular': "/src/vendor/angular.min",
		'angular-route': '/src/vendor/ang-router',
		'angularAMD': '/src/vendor/angular-amd.min',
		'modules': '/src/modules',
		'app': '/src/app',
		'bootstrap': '/src/vendor/bootstrap.min'
	},
	shim: {
		'angularAMD': ['angular'],
		'angular-route': ['angular'],
		'bootstrap': ['bootstrap'],
		"angular": {
			"exports": "angular"
		}
	},
	deps: ['app']
});