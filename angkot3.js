var jmlAngkot = 10;
var angkotBeroperasi = 5;


for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No.' + noAngkot + ' sedang beroperasi')
    }else{
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
    }
}