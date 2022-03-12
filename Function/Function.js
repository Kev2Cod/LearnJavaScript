// var kubus1 = 5;
// var kubus2 = 9;


// var volKubus1 = Math.pow(kubus1, 3);
// var volKubus2= Math.pow(kubus2, 3);

// var totalVolKubus = volKubus1 + volKubus2;

// console.log('Total Volume adalah : ' + totalVolKubus)

function jumlahDuaKubus (a, b){
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB
    return total;
}

alert(jumlahDuaKubus(5,5));
alert(jumlahDuaKubus(5,10));