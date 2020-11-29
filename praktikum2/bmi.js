const express = require("express"); 
const bodyParser = require("body-parser"); 
const cors = require("cors"); 
const app = express();


app.use(bodyParser.json())


app.use(bodyParser.urlencoded({extended: true}))


app.use(cors())


app.post("/bmi", (req,res) => {

    let berat = Number(req.body.berat) 
    let tinggi = Number(req.body.tinggi) 

    let bmi = berat / (tinggi * tinggi)
    if(bmi<18.5)
    {
    status = "Kekurangan Berat Badan";
    }
    else if (bmi>=18.5 && bmi<=24.9)
    {
    status = "Berat Badan Normal";
    }

    else if (bmi>24.9 &&  bmi<=29.9)
    {
        status = "Kelebihan Berat Badan";
    }
    else
    {
     status = "Obesitas";
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status,
    }

  
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
}) 