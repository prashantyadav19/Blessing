var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function(){
	return gulp.src([
				'./app/assets/css/home-style.scss'
			])
		.pipe(sass())
		.pipe(concat('home.css'))
		.pipe(gulp.dest('./app/views'));

});


gulp.task('scripts',function(){
	console.log('gulp script');
});

gulp.task('default',['styles','scripts']);