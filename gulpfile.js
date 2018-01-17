//引入所需插件
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	rename = require("gulp-rename"),
	cssnano = require("gulp-cssnano"),
//	jshint = require("gulp-jshint"),
//	concat = require("gulp-concat"),
	uglify = require("gulp-uglify");
//	notify = require("gulp-notify");
//创建任务，发布任务
gulp.task("sass",function(){
	return gulp.src("css/*.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css")).pipe(rename({suffix : ".min"})).pipe(cssnano()).pipe(gulp.dest("css"));
})

gulp.task("scripts",function(){
     return gulp.src("js/xiangqing2.js").pipe(rename({suffix : ".min"})).pipe(uglify()).pipe(gulp.dest("assets"));
});

/*gulp.task("watch",function(){
	gulp.watch("css/*.scss",["sass"])
	gulp.watch("js/*.js",["scripts"])
})*/
