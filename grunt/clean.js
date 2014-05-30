module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= appconfig.dest %>/*',
				'!<%= appconfig.dest %>/.git*'
			]
		}]
	}
};