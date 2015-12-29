var gulp = require("gulp");
var watch = require("gulp-watch");

var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

var minifyCSS = require("gulp-minify-css");

var templateCache = require("gulp-angular-templatecache");

var copy = require("gulp-copy");

var path = {
	lib: "src/AppBundle/Resources/public/js/lib/",
	app: "src/AppBundle/Resources/public/js/app/",
	todo: "src/TodoBundle/Resources/public/js/todo/",
	dest: "web/public/js/"
};

var bundles = {
	jquery: {
		bundleName: "jquery.bundle",
		js_paths: [
			path.lib + "jquery/dist/jquery.min.js",
			path.lib + "jquery-ui/jquery-ui.min.js"
		],
		dest: path.dest + "lib/"
	},
	angular: {
		bundleName: "angular.bundle",
		js_paths: [
			path.lib + "angular/angular.js",
			path.lib + "angular-resource/angular-resource.min.js",
			path.lib + "angular-ui-router/release/angular-ui-router.min.js"
		],
		dest: path.dest + "lib/"
	},
	materialize: {
		bundleName: "materialize.bundle",
		js_paths: [
			path.lib + "Materialize/bin/materialize.js"
		],
		dest: path.dest + "lib/"
	},
	app: {
		bundleName: "app.bundle",
		js_paths: [
			path.app + "/**/*.js"
		],
		dest: path.dest + "app/",
		watchable: true
	},
	todo: {
		bundleName: "todo.bundle",
		js_paths: [
			path.todo + "/**/todo.module.js",
			path.todo + "/**/*.js"
		],
		tpl_paths: [
			path.todo + "/**/*.html"
		],
		dest: path.dest + "app/",
		watchable: true
	}
};

var jsBuildTasks = [];
var tplBuildTasks = [];
var cssBuildTasks = [];
var watcherTasks = [];

var taskConstructor = function(bundle){
	if(bundle.js_paths.length > 0){
		// add task to build js bundle
		var jsTaskName = "build-" + bundle.bundleName;
		gulp.task(
			jsTaskName,
			function(){
				return gulp.src(bundle.js_paths)
					.pipe(concat(bundle.bundleName + ".js"))
					.pipe(gulp.dest(bundle.dest))
				;
			}
		);

		jsBuildTasks.push(jsTaskName);

		if(bundle.watchable){
			gulp.task(jsTaskName+"-watcher", function(){
				return gulp.watch(bundle.js_paths, [jsTaskName]);
			});
			watcherTasks.push(jsTaskName+"-watcher");
		}
	}
	if(bundle.css_paths && bundle.css_paths.length > 0){
		// add task to build css
	}
	if(bundle.tpl_paths && bundle.tpl_paths){
		// add task to build angular templates
		var tplTaskName = "build-" + bundle.bundleName + "-tpl";
		gulp.task(
			tplTaskName,
			function(){
				return gulp.src(bundle.tpl_paths)
					.pipe(templateCache(bundle.bundleName + ".templates.js", {module: "application.todo", standalone: false}))
					.pipe(gulp.dest(bundle.dest))
				;
			}
		);

		tplBuildTasks.push(tplTaskName);

		if(bundle.watchable){
			gulp.task(tplTaskName+"-watcher", function(){
				return gulp.watch(bundle.tpl_paths, [tplTaskName]);
			});
			watcherTasks.push(tplTaskName+"-watcher");
		}
	}
};



for(var bundleKey in bundles){
	taskConstructor(bundles[bundleKey]);
}

console.log(watcherTasks);

// tasks to build all js/tpl/css
gulp.task("js-build", jsBuildTasks);
gulp.task("tpl-build", tplBuildTasks);

// watchers task
gulp.task("watchers-build", watcherTasks);

gulp.task('default', ["js-build", "tpl-build"]);
