module.exports=function(gulp){
    gulp.task('build',['jsxtojs','watchify',"browserify"]);
}