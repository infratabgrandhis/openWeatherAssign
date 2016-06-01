var config=require("../config.js"),
    path=require("path"),
    react = require('gulp-react'),
    jsxPath=config.jsxToJs;

module.exports=function(gulp){
    gulp.task("jsxtojs",function(){
        gulp.src([jsxPath.basePath+"*.jsx",jsxPath.basePath+"**/*.jsx"])
            .pipe(react())
            .pipe(gulp.dest(jsxPath.basePath));
    });
}

