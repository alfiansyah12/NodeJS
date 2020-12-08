let nama = "Pak Aman"
let sisi_1 = 20.5
let sisi_2 = 30
let ppn = 15
let harga = 1500000

let luas = sisi_1 * sisi_2
console.log("Total Luas : " + luas +"m²");

let total_harga = luas * harga
var	reverse = total_harga.toString().split('').reverse().join(''),
	ribu 	= reverse.match(/\d{1,3}/g);
    ribu1	= ribu.join('.').split('').reverse().join('');
console.log("Harga Tanah : Rp."+ribu1)

let harga_ppn = total_harga * ppn / 100
var	reverse = harga_ppn.toString().split('').reverse().join(''),
	ribu 	= reverse.match(/\d{1,3}/g);
    ribu2	= ribu.join('.').split('').reverse().join('');
console.log("Harga PPN : Rp." + ribu2)

let total_harga_tanah = total_harga + harga_ppn
var	reverse = total_harga_tanah.toString().split('').reverse().join(''),
	ribu 	= reverse.match(/\d{1,3}/g);
    ribu3	= ribu.join('.').split('').reverse().join('');
console.log("Total Harga : Rp."+ribu3)