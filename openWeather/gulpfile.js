var gulp=require("gulp"),
    requireDir=require("require-dir"),
    _=require("underscore"),
    taskLists=requireDir("./gulp/tasks");
_.each(taskLists,function(iterator){
    iterator(gulp)
});