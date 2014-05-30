module.exports = {
	dynamic: {
		files: [{
			expand: true,
			cwd: '<%= appconfig.src %>/img/',
			src: ['**/*.{png,jpg,gif}'],
			dest: '<%= appconfig.dest %>/img/'
		}]
	}
};