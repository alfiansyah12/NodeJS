// Perulangan
// For Loop
for (let index = 1; index <= 10; index++) {
    console.log("Perulangan ke-" + index)
}
// For/In Loop
let siswa = { 
    nama: "Alfiansyah Hafidz Arbi Putra",
    gender: "Laki-laki",
    jurusan: "RPL",
    usia: "17",
    alamat: "Tulungagung"
}

for (key in siswa){
    console.log(key);
}
// For/Of Loop
let presiden = ["Soekarno", "Soeharto", "Habibie", "Gus Dur", "Megawati", "SBY", "Jokowi"]
for (pres of presiden) {
    console.log(pres)
}
// While Loop
let laptop = ["Lenovo","HP","Acer","Asus"]
let i = 0
while(laptop[i]){
    console.log(laptop[i])
    i++
}
// Do.. While Loop
let gadget = ["xiaomi","Samsung","Motorola","Sony Ericson"]
let i = 0
do{
    console.log(laptop[i])
    i++
}while(gadget[i])