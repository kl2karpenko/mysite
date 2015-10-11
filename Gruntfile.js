module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejsuglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "./public",
					mainConfigFile: "./public/main.js",
					name: "main",
					out: "src/requireconfig.js"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['requirejs']);
};