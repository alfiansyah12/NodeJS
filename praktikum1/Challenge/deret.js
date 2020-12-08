class Geometri{
    constructor(s,r,n){
        this.suku_awal = s,
        this.rasio = r,
        this.jumlah_suku = n
    }
    hasil = () =>{
        let hasil = 0
        let i = 1
        while( i < this.jumlah_suku ){
            hasil += this.suku_awal *= this.rasio
            i++
        }
        return hasil
    }
}

let jawab = new Geometri(4,3,10)
console.log("Jumlah 10 suku pertama : " + jawab.hasil());
