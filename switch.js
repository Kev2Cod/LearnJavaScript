// var angka = parseInt(prompt('Masukan angka :'))

// if( angka === 1){
//     alert('Anda memasukan angka 1');
// } else if( angka === 2 ){
//     alert('Anda memasukan angka 2');
// } else if ( angka === 3 ){
//     alert('Anda memasukan angka 3');
// } else {
//     alert('Anda memasukan angka salah!');
// }

// switch (angka){
//     case 1 : 
//     alert('Anda memasukan angka 1');
//     break;
//     case 2 : 
//     alert('Anda memasukan angka 2');
//     break;
//     case 3 : 
//     alert('Anda memasukan angka 3');
//     break;
//     default : 
//     alert('Angka yang anda masukan salah!');
//     break;
// }

var item = prompt('Masukan nama makanan / minuman : \n (cth : nasi, susu, daging, hamburger, softdrink');

switch(item){
    case 'nasi':
    case 'susu':
    case 'daging':
        alert('Makanan / minuman SEHAT');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('Anda memasukan nama makanan / minuman yang SALAH!')
}