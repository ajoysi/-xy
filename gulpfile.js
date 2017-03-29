//将10下面的文件压缩到demo目录下

// Vue项目实战
// 第一件事：将html压缩
// 第二件事：将css压缩
// 第三件事：将js压缩

// 我们要压缩css，js，html，所以我们要依赖这三个插件
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');

// 对三类文件压缩并放到demo文件夹下
// 压缩js任务
gulp.task('jsUglify', function () {
	gulp.src('10/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('demo/js'))
})

// 压缩html任务
gulp.task('htmlMinify', function () {
	gulp.src('10/index.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('demo'))
})

// 压缩css任务
gulp.task('cssMinify', function () {
	gulp.src('10/css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('demo/css'))
})

// 目前还缺少图片，和数据，

// 将图片放入demo中
gulp.task('dealImage', function () {
	// 获取img下面的所有图片
	gulp.src('10/img/**/*.*')
	// *匹配的会直接完整获取下来，
	.pipe(gulp.dest('demo/img'))
})

// 将数据放入demo中
gulp.task('dealData', function () {
	gulp.src('10/data/*.json')
	.pipe(gulp.dest('demo/data'))
})

// 	启动任务
gulp.task('default', ['jsUglify', 'cssMinify', 'htmlMinify', 'dealImage', 'dealData']);