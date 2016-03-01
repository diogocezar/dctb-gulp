Gulp = {
	self   : null,
	uglify : null,
	concat : null,
	cssmin : null,
	init: function(){
		Gulp.self   = require('gulp');
		Gulp.uglify = require('gulp-uglify');
		Gulp.concat = require('gulp-concat');
		Gulp.cssmin = require('gulp-cssmin');
		Gulp.scripts();
		Gulp.css();
		Gulp.watch();
	},
	css: function(){
		Gulp.self.task('css', function(){ 
			Gulp.self.src('assets/css/src/*.css')
			.pipe(Gulp.concat('all.min.css'))
			.pipe(Gulp.cssmin())
			.pipe(Gulp.self.dest('assets/css/dist'))
		});
	},
	scripts: function(){
		Gulp.self.task('scripts', function(){ 
			Gulp.self.src('js/src/*.js')
			.pipe(Gulp.concat('all.min.js'))
			.pipe(Gulp.uglify())
			.pipe(Gulp.self.dest('js/dist'))
		});
	},
	watch: function(){
		Gulp.self.task('watch', function(){ 
			Gulp.self.watch('js/src/*.js', ['scripts']);
			Gulp.self.watch('assets/css/src/*.css', ['css']);
		});
	}
}
Gulp.init();