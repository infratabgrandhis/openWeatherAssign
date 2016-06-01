var q=require("q"),
    request=require("superagent"),
    querystring=require("querystring");

function getWeatherData(req,res,next){
    var cityName=req.query.city,
        openWhether=process.envObj.openWhether,
        queryObj={
            "q": cityName,
            "appid":openWhether.apiKey
        },
        url=openWhether.hostName+"?"+querystring.stringify(queryObj);
    request
        .get(url)
        .end(function(err, result){
            if(err){
                res.status(302).send(err);
            }else{
                res.status(200).send(result.body);
            }
        });
}

module.exports=function(){
    return {
        getWeatherData:getWeatherData
    }
}