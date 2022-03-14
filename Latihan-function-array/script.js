var penumpang = ['Kevin', undefined, 'Rafael'];

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
            else if(penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' Sudah ada di dalam angkot!');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            
            //Jika seluruh kursi terisi
            else if( i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}