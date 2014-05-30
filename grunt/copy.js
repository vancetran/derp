module.exports = {
	dist: {
		files: [
			// Copy all includes
			{ expand: true, cwd: '<%= appconfig.src %>/includes/', src: ['**'], dest: '<%= appconfig.dest %>/includes/' },
			
			// Copy fonts
			{ expand: true, cwd: '<%= appconfig.src %>/fonts/', src: ['**'], dest: '<%= appconfig.dest %>/fonts/' },

			// Copy data
			{ expand: true, cwd: '<%= appconfig.src %>/data/', src: ['**'], dest: '<%= appconfig.dest %>/data/' },

			// Copy modernizr.js
			{ src: '<%= appconfig.src %>/js/lib/modernizr.js', dest: '<%= appconfig.dest %>/js/lib/modernizr.js', filter: 'isFile' },

			// Copy un-minified production JS
			{ src: '.tmp/concat/js/production-min.js', dest: '<%= appconfig.dest %>/js/production.js', filter: 'isFile' }
		]
	}
};