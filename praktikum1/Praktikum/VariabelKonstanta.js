let nama = "Alfiansyah Hafidz" //menyimpan data string
let umur = 17 //menyimpan data numerik
let status_menikah = false //menyimpan data boolean

const url = "http://smktelkom-mlg.sch.id"
const port = 8080

let siswa1 = {
    nis: "101",
    nama: "Alfiansyah",
    jurusan: "RPL"
}

let siswa2 = {
    nis: "102",
    nama: "Hafidz",
    jurusan: "TKJ"
}

//menampilkan nama siswa1
console.log("Nama Siswa 1 = " + siswa1.nama);

//mengubah nama siswa 1 menjadi Arbi
siswa1.nama = "Arbi"

//menampilkan nama setelah diubah
console.log("Nama Siswa 1 = " + siswa1.nama);