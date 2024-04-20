const {Schema,model,Mongoose}=require("mongoose");
const serviceSchema=new Schema({
title:{type:String,required:true},
author:{type:String,required:true},
content:{type:String,required:true},
});
const Service=new model("Service",serviceSchema);
module.exports=Service;