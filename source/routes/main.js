const express=require("express");
const routes = express.Router();
routes.get("/",(req,res)=>{
    res.render('home.hbs');
});
routes.get("/home",(req,res)=>{
    res.render('home.hbs');
});
routes.get("/services",(req,res)=>{
    res.render('services.hbs');
});
routes.get("/contact",(req,res)=>{
    res.render('contact.hbs');
});
routes.get("/about",(req,res)=>{
    res.render('about.hbs');
});
module.exports=routes;