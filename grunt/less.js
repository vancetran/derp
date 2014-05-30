module.exports = {
	dev: {
		options: {
			paths: ["<%= appconfig.src %>/less/"],
			cleancss: false,
			ieCompat: true
		},
		files: {
			"<%= appconfig.src %>/css/main.css": "<%= appconfig.src %>/less/bootstrap.less"
		}
	}
};