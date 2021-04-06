const gulp = require ('gulp');
const sass = require ('gulp-sass'); 
const browserSync = require ('browser-sync').create();



        // compile scss information intro css 
        function style() {
            // whare is my scss file
            return gulp.src('./scss/**/*.scss')
            // 2 plase compilator sass 
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            // refresch change broswer 

            .pipe(browserSync.stream());


        }

            function watch() {
                //incialsace broswersync
                browserSync.init({
                    server: {
                        baseDir: './'
                    }
                })
             
                        //  define the files in which to make changes
                        gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}
        


    
            
exports.style = style;
exports.watch = watch;