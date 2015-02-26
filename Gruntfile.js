module.exports = function(grunt) {
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
		imagemin: {
		    dynamic: {
		      files: [{
		        expand: true,
		        cwd: 'views/src/images',
		        src: ['**/*.{png,jpg,gif,svg}'],
		        dest: 'views/images'
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
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-inline');
	grunt.registerTask('default', ['concat', 'imagemin', 'inline', 'watch']);
};