let gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  concat = require("gulp-concat"),
  prefixer = require("gulp-autoprefixer"),
  cssmin = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  fileinclude = require("gulp-file-include"),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  gcmq = require("gulp-group-css-media-queries");

gulp.task("html_build", function (done) {
  return gulp
    .src("src/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("build/"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("css_build", function (done) {
  return (
    gulp
      .src(["src/assets/sass/*.scss"])
      .pipe(sass())
      .pipe(prefixer(["last 15 versions"]))
      .pipe(gcmq())
      //.pipe(cssmin())
      .pipe(gulp.dest("build/css/"))
      .pipe(browserSync.stream())
  );
  done();
});

gulp.task("js_build", function (done) {
  return gulp
    .src([
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js",
      "node_modules/slick-carousel/slick/slick.js",
      "node_modules/overlayscrollbars/js/jquery.overlayScrollbars.min.js",
      "src/assets/js/main.js",
      //всегда в конце
    ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build/js/"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("fonts_build", function (done) {
  return gulp
    .src("src/assets/fonts/**/*.*")
    .pipe(gulp.dest("build/fonts/"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("image_build", function (done) {
  return gulp
    .src("src/assets/img/**/*.*")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("build/img/"))
    .pipe(browserSync.stream());
  done();
});

gulp.task("webServer", function (done) {
  browserSync.init({
    server: "build/",
  });
  gulp.watch("src/**/*.html", gulp.series("html_build"));
  gulp.watch("src/**/*.scss", gulp.series("css_build"));
  gulp.watch("src/**/*.js", gulp.series("js_build"));
  gulp.watch("src/assets/fonts/**/*.*", gulp.series("fonts_build"));
  gulp.watch("src/assets/image/**/*.*", gulp.series("image_build"));
  done();
});

gulp.task(
  "default",
  gulp.series(
    "html_build",
    "css_build",
    "js_build",
    "fonts_build",
    "image_build",
    "webServer"
  )
);
