var penumpang = ['Kevin', 'dian', 'Rafael'];

var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        //telusuri sebuah array dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // Jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            //jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' Sudah ada di dalam angkot!');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }

            //Jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }

}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
        console.log('Tidak ada penumpang!');
        // Kembalikan isi array & keluar dari function
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // menjadi undifined
                penumpang[i] = undefined;
                // kembalikan isi array
                return penumpang;
            } else if (i == penumpang.length - 1) { // jika tidak ada nama yang sesuai
                // tampilkan pesan kesalahannya 
                console.log(namaPenumpang + ' Tidak ada didalam angkot');
                return penumpang;
            }
        }
    }
    return penumpang; 

}
