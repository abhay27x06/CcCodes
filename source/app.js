const express=require("express");
const app=express();
const hbs=require("hbs");
const routes=require("./routes/main");
app.use('',routes);
// template engine
app.set('view engine', 'hbs');
hbs.registerPartials("views/partials");
app.set('views','views');
app.use('/static',express.static('public'));
app.listen(process.env.PORT | 5556,()=>{
    console.log('server started');
});

