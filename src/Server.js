const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use('/logged',(req,res) => {
    res.send({
        token: 'testToken'
    }
    )
})

app.listen(8080,()=>console.log('API running on port 8080'))