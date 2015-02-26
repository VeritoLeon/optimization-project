module.exports = function(grunt) {
	// var mozjpeg = require('imagemin-mozjpeg');
	grunt.initConfig({
		concat: {
			js: {
				src: ['views/src/js/*.js'],
				dest: 'views/src/js/build/scripts.js',
			},
			css: {
				src: ['views/src/css/*.css'],
				dest: 'views/src/css/build/styles.css',
			},
		},
		watch: {
			js: {
				files: ['views/src/js/**/*.js'],
				tasks: ['concat', 'inline'],
			},
			css: {
				files: ['views/src/css/**/*.css'],
				tasks: ['concat', 'inline'],
			},
			img: {
				files: ['views/src/images**/*'],
				tasks: ['imagemin'],
			},
		},
		// uglify: {
		// 	js: {
		// 		files: {
		// 			'views/src/js/build/scripts.min.js': ['views/js/build/scripts.js']
		// 		}
		// 	}
		// },
		// cssmin: {
		// 	target: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'views/src/css/build',
		// 			src: ['*.css', '!*.min.css'],
		// 			dest: 'views/src/css/build',
		// 			ext: '.min.css'
		// 		}]
		// 	}
		// },
		imagemin: {                          // Task
		    dynamic: {                         // Another target
		      files: [{
		        expand: true,                  // Enable dynamic expansion
		        cwd: 'views/src/images',                   // Src matches are relative to this path
		        src: ['**/*.{png,jpg,gif,svg}'],   // Actual patterns to match
		        dest: 'views/images'                  // Destination path prefix
		      }]
		    }
		},
		inline: {
			release: {
				options: {
					cssmin: true,
					uglify: true
				},
				src: 'views/src/pizza.html',
				dest: 'views/pizza.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-inline');
	grunt.registerTask('default', ['concat', 'imagemin', 'inline', 'watch']);
};