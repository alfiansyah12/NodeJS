// Mendapatkan jumlah data yang tersimpan pada array
//array string
let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]

//array numeric
let tingkatan_kelas = [10,11,12]

//array objek
let siswa = [
    {
        nama: "Alfin", jurusan: "RPL"
    },
    {
        nama: "erlangga", jurusan: "TKJ"
    },
    {
        nama: "Atmojo", jurusan: "RPL"
    },
]

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingkatan kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);

//Menambahkan / memasukkan data pada array
let kota = ["Malang","Surabaya","Tulungagung"]

console.log("isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("-------------------------------");

//tambah data baru
kota.push("Banyuwangi")

console.log("isi array kota saat ini");
console.log(kota);
console.log("Jumlah data saat ini = " + kota.length);

//hapus data
kota.splice(2,1)

let barang = [
    { nama: "Rinsoo", harga: 5000},
    { nama: "Moonlight", harga: 4000}
]

console.log("isi array barang");
console.log(barang);
console.log("Jumlah data = " + barang.length);

console.log("-------------------------------");

//tambah data baru
barang.push(
    { nama: "Mloto", harga: 1000 }
)

console.log("isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);

//Menampilkan data pada array object
let siswa = [
    {nama_depan : "Jack", nama_belakang: "Ma"},
    {nama_depan : "The", nama_belakang: "Rock"},
    {nama_depan : "John", nama_belakang: "Cena"}   
]

//menmpilkan nama lengkap array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)