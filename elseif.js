var angka = prompt('Masukan Angka: ');

if(angka % 2 === 0){
    alert(angka + ' Merupakan bilangan GENAP');
}else if (angka % 2 === 1 ){
    alert(angka + ' Merupakan bilangan GANJIL');
}else {
    alert('yang anda masukan bukan angka!');
}