// Membuat Object

// 1. Object Literal
var mhs1 = {
    nama: 'Kevin',
    nim: '7201234534',
    email: 'kevin@gmail.com',
    jurusan: 'Teknik Informatika'
}

var mhs2 = {
    nama: 'Irfan',
    nim: '7201234332',
    email: 'Irfan@gmail.com',
    jurusan: 'Teknik Informatika'
}

// 2. Function Declaration 
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Fitri', '7201234539', 'fitri@gmail.com', 'Hukum');

var mhs4 = buatObjectMahasiswa('Dodit', '7201287698', 'dodit@gmail.com', 'Pertanian');

// 3. Constructor 
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('Radit', '7230495832', 'radit@gmail.com', 'Teknik Mesin');

