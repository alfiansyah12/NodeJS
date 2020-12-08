let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5},
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2},
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10}
]
let harga = []
barang.map(
    (bar,index)=>{
        console.log("Total Harga " +bar.nama+": Rp."+bar.harga * bar.jumlah);
        harga.push(bar.harga * bar.jumlah)
    }
)

let harga_total = 0
for( let j = 0; j < harga.length ; j++ ){
    harga_total += harga[j];
}
console.log("Keseluruhan Harga : Rp."+ harga_total);