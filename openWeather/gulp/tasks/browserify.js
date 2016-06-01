var browserify = require('browserify'),
    util=require("gulp-util"),
    logger=require("../logger"),
    browserifyConfig=require("../config").browserify,
    source       = require('vinyl-source-stream'),
    watchify=require("watchify");

module.exports=function(gulp){
    gulp.task("browserify",function(){
        //creating instance for browseridy
        var build=browserify({
            cache: {},
            packageCache: {},
            fullPaths: false,
            extensions:browserifyConfig.extensions,
            debug:true,
            entries:browserifyConfig.startingFilePath
        });
        var bundle=function(){
            //build starting
            logger.start(browserifyConfig.startingFilePath);
            return build.
                bundle().
                on('error',function(error){
                    util.log(util.colors.red(error));
                }).
                on('build',function(error){
                    util.log(util.colors.green("build is in process.."));
                })
                .pipe(source(browserifyConfig.outputFileName))
                // Specify the output destination
                .pipe(gulp.dest(browserifyConfig.distinationDir))
                on("end",logger.end)
        };
        //checking watchify
        if(global.isWatching){
            // Wrap with watchify and rebundle on changes
            build = watchify(build);
            // Rebundle on update
            bundler.on('update', build);
        };
        bundle();
    });
}