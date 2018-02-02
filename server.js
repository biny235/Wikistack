const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const models = require('./models')



models.db.sync({force: true})
    .then(()=>{
        app.listen(port, ()=>{
            console.log(port);
        });
    })
.catch(console.error)

