// Percabangan
let tahun = 2020
if (tahun % 4 == 0) {
    console.log(tahun + " adalah tahun kabisat");
}
else{
    console.log(tahun + " ukan tahun kabisat");
}

let nilai = 80
if (nilai > 80) {
    console.log("Excellent")
}else if(nilai <= 80 && nilai > 70){
    console.log("Good")
}else if( nilai <= 70 && nilai > 60){
    console.log("Not Bad")
}else{
    console.log("So Bad")
}