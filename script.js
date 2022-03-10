// var tes = confirm('Kamu Yakin?');

// if( tes === true){
//     alert('User Menekan OK!')
// }else{
//     alert('User Menekan CANCEL!')
// }

alert('selamat datang..');
var lagi = true;

while(lagi){
    var nama = prompt('Masukan nama anda : ');
    alert('Halo ' + nama);

    lagi = confirm('Coba lagi ?');
}

alert('Terima Kasih')