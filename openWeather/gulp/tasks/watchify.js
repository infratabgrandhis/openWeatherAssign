var config=require("../config").watchify;

module.exports=function(gulp){
    gulp.task("watchify",function(){
        var watcher = gulp.watch([config.path+'/*.jsx',config.path+'/**/*.jsx',], ['jsxtojs','browserify']);
        watcher.on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
    });
}