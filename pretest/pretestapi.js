const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")
const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "test"
})

db.connect(err => {
    if (err) console.log(err.message)
    else console.log("koneksi berhasil")
    
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get("/siswa", (req,res) => {
    let sql = "select * from identitas"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        else{
            let response = {
                count: result.length,
                identitas: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })

    
})


app.post("/siswa", (req,res) => {
    let find = req.body.find
    let sql = "select * from identitas where absen like '%"+find+"%' or nama like '%"+find+"%' or kelas like '%"+find+"%'"
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        } else {
            let response = {
                count: result.length,
                identitas: result
            }
        
            res.setHeader("Content-Type","application/json")
            res.send(JSON.stringify(response))
        }
    })
})


app.post("/siswa/save", (req,res) => {
    let data = {
        absen: req.body.absen,
        nama: req.body.nama,
        kelas: req.body.kelas
    }
    let message = ""

    let sql = "insert into identitas set ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row inserted"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })

    
})


app.post("/siswa/update", (req,res) => {
    let data = [{
        absen: req.body.absen,
        nama: req.body.nama,
        kelas: req.body.kelas
    }, req.body.absen]
    let message = ""

    let sql = "update identitas set ? where absen = ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row updated"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })

    
})


app.delete("/siswa/:absen", (req,res) => {
    let data = {
        absen : req.params.absen
    }
    let message = ""
    let sql = "delete from identitas where ?"
    db.query(sql, data, (err,result) => {
        if (err) {
            message = err.message
        } else {
            message = result.affectedRows + " row deleted"
        }

        let response = {
            message : message
        }
    
        res.setHeader("Content-Type","application/json")
        res.send(JSON.stringify(response))
    })

    
})

app.listen(2910, () => {
    console.log("Server run on port 2910");
})