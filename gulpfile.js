var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

gulp.task("watch", function(cb) {
  gulp.watch("development/scss/**/*.scss", gulp.series("sass"));
  cb();
});

gulp.task("serve", function(cb) {
  browserSync.init({
    server: "./development",
    index: "app.html"
  });
  gulp.watch("development/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("development/*.html").on("change", browserSync.reload);
  gulp.watch("development/js/*.js").on("change", browserSync.reload);
  cb();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
  return gulp
    .src("development/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        browsers: ["last 4 versions"]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("development/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", gulp.series("serve"));


// const gulp = require("gulp");
// const sass = require("gulp-sass");
// const sourcemaps = require('gulp-sourcemaps');

// gulp.task("sass", function () {
//   return gulp.src("development/scss/main.scss")
//   .pipe(sourcemaps.init())
//       .pipe(sass({
//           outputStyle: 'expanded',
//       }).on("error", sass.logError))
//       .pipe(sourcemaps.write())
//       .pipe(gulp.dest("development/css"))
// });

// gulp.task("watch", function() {
//     gulp.watch("development/scss/**/*.scss", gulp.series("sass"));
//   });

// gulp.task("default", gulp.series("sass", "watch"));


