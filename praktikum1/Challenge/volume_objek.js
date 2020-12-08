class Lingkaran{
    constructor(r){
        this.pi = 3.14
        this.jari_jari = r
    }

    luas = () =>{
        return this.pi * this.jari_jari * this.jari_jari
    }
    keliling = () =>{
        return this.pi * this.jari_jari * 2
    }

}

class Tabung extends Lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volume = () =>{
        return this.pi * this.jari_jari * this.jari_jari * this.tinggi
    }
    luasPermukaan = () =>{
        return 2 * this.pi * this.jari_jari * (this.jari_jari + this.tinggi)
    }
    luasSelimut = () =>{
        return 2 * this.pi * this.jari_jari * this.tinggi
    }
}

class Kerucut extends Lingkaran{
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volume = () =>{
        return 1/3 * this.pi * this.jari_jari * this.jari_jari * this.tinggi
    }
    luasPermukaan = () =>{
        let cari_s = this.jari_jari * this.jari_jari + this.tinggi * this.tinggi
        let s = Math.sqrt(cari_s)
        return this.pi * this.jari_jari * (this.jari_jari + s )
    }
    luasSelimut = () =>{
        let cari_s = this.jari_jari * this.jari_jari + this.tinggi * this.tinggi
        let s = Math.sqrt(cari_s)
        return this.pi * s * this.jari_jari
    }
}

class Bola extends Lingkaran{
    constructor(r){
        super(r)
    }
    volume = () =>{
        return 4/3 * this.pi * this.jari_jari * this.jari_jari * this.jari_jari
    }
    luasPermukaan = () =>{
        return 4 * this.pi * this.jari_jari * this.jari_jari
    }
}

let tabung = new Tabung(15,50)
let kerucut = new Kerucut(20,40)
let bola = new Bola(30)

console.log("Tabung \nVolume = "+ tabung.volume());
console.log("Luas Permukaan = "+ tabung.luasPermukaan());
console.log("Luas Selimut = "+ tabung.luasSelimut()+"\n ");
console.log("Kerucut \nVolume = "+ kerucut.volume());
console.log("Luas Permukaan = "+ kerucut.luasPermukaan());
console.log("Luas Selimut = "+ kerucut.luasSelimut()+"\n ");
console.log("Bola \nVolume = "+ bola.volume());
console.log("Luas Permukaan = "+ bola.luasPermukaan());