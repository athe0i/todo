var gulp = require("gulp");
var watch = require("gulp-watch");

var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

var minifyCSS = require("gulp-minify-css");

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
		paths: [
			path.lib + "jquery/dist/jquery.min.js",
			path.lib + "jquery-ui/jquery-ui.min.js"
		],
		dest: path.dest + "lib/"
	},
	angular: {
		bundleName: "angular.bundle",
		paths: [
			path.lib + "angular/angular.min.js",
			path.lib + "angular-resource/angular-resource.min.js",
			path.lib + "angular-ui-router/release/angular-ui-router.min.js"
		],
		dest: path.dest + "lib/"
	},
	materialize: {
		bundleName: "materialize.bundle",
		paths: [
			path.lib + "Materialize/bin/materialize.js"
		],
		dest: path.dest + "lib/"
	},
	app: {
		bundleName: "app.bundle",
		paths: [
			path.app + "/**/*"
		],
		dest: path.dest + "app/",
		watchable: true
	},
	todo: {
		bundleName: "todo.bundle",
		paths: [
			path.todo + "/**/*"
		],
		dest: path.dest + "app/",
		watchable: true
	}
};

var jsBuildTasks = [];
// bind bundle config scope for this
var taskConstructor = function(bundle){
	console.log("creating task: ");
	gulp.task(
		"build-" + bundle.bundleName,
		function(){
			console.log("building bundle: ", bundle);
			return gulp.src(bundle.paths)
				.pipe(concat(bundle.bundleName + ".js"))
				.pipe(gulp.dest(bundle.dest))
			;
		}
	);
};

for(var bundleKey in bundles){
	taskConstructor(bundles[bundleKey]);
	jsBuildTasks.push("build-" + bundles[bundleKey]["bundleName"]);
}


gulp.task("js-build", jsBuildTasks);
