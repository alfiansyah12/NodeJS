const express = require("express"); 
const bodyParser = require("body-parser"); 
const cors = require("cors"); 
const app = express();


app.use(bodyParser.json())


app.use(bodyParser.urlencoded({extended: true}))


app.use(cors())


app.post("/convert", (req,res) => {

    let desimal = Number(req.body.desimal)

    let biner = parseInt(req.body.desimal,10).toString(2);
    let oktal = parseInt(req.body.desimal,10).toString(8);
    let hexa = parseInt(req.body.desimal,10).toString(16).toUpperCase();
    

    let response = {
        desimal: desimal,
        result: {
        biner: biner,
        oktal: oktal,
        hexa: hexa
        }
    }

  
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
}) 