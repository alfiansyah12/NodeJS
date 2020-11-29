const express = require("express"); 
const bodyParser = require("body-parser"); 
const cors = require("cors"); 
const app = express();


app.use(bodyParser.json())


app.use(bodyParser.urlencoded({extended: true}))


app.use(cors())

app.post("/balok", (req,res) => {
    
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar) 
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luas = 2 * ((panjang * lebar) + (lebar * tinggi) + (panjang * tinggi))


    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    }

    res.json(response)
})

app.post("/kubus", (req,res) => {
  
    let sisi = Number(req.body.sisi)

    let volume = sisi * sisi * sisi
    let luas = 6 * sisi * sisi


    let response = {
        sisi: sisi,
        luas: luas,
        volume: volume
    }


    res.json(response)
})

app.post("/tabung", (req,res) => {

    let pi = Number(req.body.pi) 
    let jari = Number(req.body.jari) 
    let tinggi = Number(req.body.tinggi) 
    
    let luasalas = 2 * pi * jari * tinggi
    let kelilingalas =(2 * pi * jari * tinggi) + (2 * pi * jari * jari)
    let volume = pi * jari * jari * tinggi
    let luas = (2 * luasalas) + (kelilingalas * tinggi)

    let response = {
        pi: pi,
        jari: jari,
        tinggi: tinggi,
        luasalas: luasalas,
        kelilingalas: kelilingalas,
        volume: volume,
        luas: luas
    }

  
    res.json(response)
})

app.post("/bola", (req,res) => {
 
    let pi = Number(req.body.pi)
    let jari = Number(req.body.jari)
    
    let volume = 4/3 * pi * jari * jari * jari
    let luas = 4 * pi * jari * jari


    let response = {
        pi: pi,
        jari: jari,
        volume: volume,
        luas: luas
    }

    
    res.json(response)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})