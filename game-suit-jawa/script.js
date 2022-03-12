var tanya = true;
while (tanya) {

    // Pilihan Player
    var p = prompt('Pilih : gajah, orang, semut');

    // Pilihan Komputer 
    // Membuah pilihan Random
    var comp = Math.random();

    if (comp < 0.35) {
        comp = 'gajah';
    } else if (comp > 0.35 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // Menentukan Rulesnya
    if (p == comp) {
        hasil = 'SERI!!!'
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH';
    } else if (p == 'orang') {
        // if (comp == 'gajah') {
        //     hasil = 'KALAH';
        // } else {
        //     hasil = 'MENANG!';
        // }
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG!';
    } else if (p == 'semut') {
        // if (comp == 'gajah') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'Memasukan pilihan yang sama';
    }

    // tampilkan Hasilnya 

    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + ' \n Maka hasilnya kamu ' + hasil);

    tanya = confirm('Lagi?');

}

alert('Terima Kasih 😉');