const express = require("express"); // memanggil library express js
const bodyParser = require("body-parser"); // memanggil library body-parser
const cors = require("cors"); // memanggil library cors
const app = express();

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.get("/convert/celcius/:celcius", (req,res) => {
    
    let celcius = req.params.celcius

    let reamur = 4/5 * celcius
    let fahrenheit = 9/5 * celcius + 32
    let kelvin = 1 * celcius + 273

    let response = {
        celcius: celcius,
        result : {
        reamur: reamur,
        fahrenheit: fahrenheit,
        kelvin: kelvin
        }
    }

    res.json(response)
})

app.get("/convert/reamur/:reamur", (req,res) => {
    
    let reamur = req.params.reamur

    let celcius = 5/4 * reamur
    let fahrenheit = 9/4 * reamur + 32
    let kelvin = 5/4 * reamur + 273

    let response = {
        reamur: reamur,
        result : {
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
        }
    }

    res.json(response)
})

app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
    
    let fahrenheit = req.params.fahrenheit

    let celcius = 5/9 * (fahrenheit - 32)
    let reamur = 4/9 * (fahrenheit - 32)
    let kelvin = 5/9 * (fahrenheit - 32) + 273

    let response = {
        fahrenheit: fahrenheit,
        result : {
        celcius: celcius,
        reamur: reamur,
        kelvin: kelvin
        }
    }

    res.json(response)
})

app.get("/convert/kelvin/:kelvin", (req,res) => {
    
    let kelvin = req.params.kelvin

    let celcius = kelvin - 273
    let reamur = 4/5 * (kelvin - 273)
    let fahrenheit = 9/5 * (kelvin - 273) + 32

    let response = {
        kelvin: kelvin,
        result : {
        celcius: celcius,
        reamur: reamur,
        fahrenheit: fahrenheit
        }
    }

    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
})