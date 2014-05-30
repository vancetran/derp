module.exports = {
	default: [
		'clean:dist',
		'useminPrepare',
		'concat',
		'uglify',
		'imagemin',
		'less',
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