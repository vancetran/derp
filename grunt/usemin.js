module.exports = {
	options: {
        dirs: ['<%= appconfig.dest %>']
		//assetsDirs: ['<%= appconfig.dest %>']
	},
	html: ['<%= appconfig.dest %>/includes/{,*/}*.php'],
	css: ['<%= appconfig.dest %>/css/{,*/}*.css']
};