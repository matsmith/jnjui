module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		requirejs: {
			options: {
				appDir: "./src",
				removeCombined: true
			},
			prod: {
				options: {
					dir: "./dist",
					optimizeCss: "standard"
				}
			},
			dev: {
				options: {
					dir: "./build",
					optimize: "none",
					optimizeCss: "standard.keepComments.keepLines"
				}
			}
		},

		uglify: {
			prod: {
				files: {
					"dist/vendor/javascripts/html5shiv.js": "src/vendor/javascripts/html5shiv.js",
					"dist/vendor/javascripts/jquery.js": "src/vendor/javascripts/jquery.js",
					"dist/vendor/javascripts/qbox.js": "src/vendor/javascripts/qbox.js",
					"dist/assets/javascripts/jnj-drawer.js": "src/assets/javascripts/jnj-drawer.js",
					"dist/assets/javascripts/jnj-accordion.js": "src/assets/javascripts/jnj-accordion.js"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// run tasks in terminal with $ grunt prod, or $ grunt dev
	grunt.registerTask("prod", ["requirejs:prod", "uglify:prod"]);
	grunt.registerTask("dev", "requirejs:dev");
};