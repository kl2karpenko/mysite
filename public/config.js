require.config({
	baseUrl: "/public",
	paths: {
		'angular': "/src/vendor/angular",
		'router': '/src/vendor/ang-router',
		'angularAMD': '/src/vendor/angular-amd.min',
		'modules': '/src/modules',
		'app': '/src/app',
		'lib': '/src/lib',
		'bootstrap': '/src/vendor/bootstrap.min'
	},
	shim: {
		'angularAMD': ['angular'],
		'router': {
			exports: 'router',
			deps: ['angular']
		},
		'bootstrap': ['bootstrap'],
		'angular': {
			exports: 'angular'
		}
	},
	deps: ['app']
});