class PersegiPanjang{
    constructor(p, l){
        /**
         * properti atau atribut dari sebuah objek
         * didefinisikan dalam method constructor
         */
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }
    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

let tanah = new PersegiPanjang(10,50)
console.log("Luas Tanah = " + tanah.luas());
console.log("Keliling Tanah = " + tanah.keliling());

// inheritance 

class PersegiPanjang{
    constructor(p, l){
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

class Balok extends PersegiPanjang{
    constructor(p,l,t){
        super(p,l)
        this.tinggi = t
    }
    
    luas = () => {
        return (2 * this.panjang) + (2 * this.panjang * this.tinggi) + (2 * this.tinggi * this.lebar)
    }

    volume = () => {
        return this.panjang * this.lebar * this.tinggi
    }
}

let lemari = new Balok(10,5,2)
console.log("Luas Lemari = " + lemari.luas());
console.log("Volume Lemari = " + lemari.volume());
