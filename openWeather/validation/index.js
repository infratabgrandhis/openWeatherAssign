function cityValidation(req,res,next){
    var cityName=req.query.city;
    if(cityName){
        next();
    }else{
        res.status(200).send({
            message:"city name should specify.."
        });
    }
}

module.exports=function(){
    return {
        cityValidation:cityValidation
    }
}