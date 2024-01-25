const express =require('express');
const app =express();
require("dotenv").config();
const PORT=process.env.PORT||5050;

const productRoutes =require('./routes/clothing-routes');
app.use('/clothing-size',productRoutes);

app.listen(PORT,()=>{console.log(`running at http://localhost:${PORT}`);});