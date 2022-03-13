// Manipulasi Array
// var arr= [];
// 1. Menambahkan Array
// arr = ['Kevin', 'Williams'];
// arr[2] = 'Permana';

// arr[6] = 'Dian';
// console.log(arr);

// 2. Menghapus Array
// arr = ['Kevin', 'Budi', 'Deku', 'Kana'];
// arr[1] = undefined;

// console.log(arr);

//3. Menampilkan isi Array  
// arr = ['Kevin', 'Budi', 'Deku', 'Kana'];
// for(var i = 0; i < arr.length; i++){
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
// 1. Join
// arr = ['Kevin', 'Williams', 'Permana'];
// console.log(arr.join(' - '));

// 2. Push Pop
// arr.push('Doddy','fitri);
// arr.pop();

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift();

// 4. Splice 
// splice(indexAwal, mau dihapusBerapa, elementBaru1, elemetBaru2,  ...)
// arr.splice(1, 2 ,'Deku', 'Bakugo')

// 5. Slice
// slice(awal, akhir)
var arr = ['Kevin', 'Williams', 'Permana', 'Deku', 'Bakugo'];

var arr2 = arr.slice(1,3);

console.log(arr.join(' - '));
console.log(arr2.join(' - '));