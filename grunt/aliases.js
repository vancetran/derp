module.exports = {
	default: [
		'clean:build',
		'useminPrepare',
		'less:build',
		'concat',
		'cssmin',
		'uglify',
		'imagemin',
		'copy',
		'usemin'
	],
/*	default: [
		'newer:useminPrepare',
		'newer:concat',
		'newer:uglify',
		'newer:imagemin',
		'newer:less',
		'newer:copy',
		'newer:usemin'
	],*/
	concurrent: [
		'concurrent:first',
		'concurrent:second'
	],
	dev: [
		'watch'
	]
};
