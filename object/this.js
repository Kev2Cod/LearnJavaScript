

// Membuat Object

// cara 1 - function declaration
// function halo(){

//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// This mengembalikan object Global


// cara 2 - object literal
// var obj = {nama: "Kevin", umur : 19};
// obj.halo = function(){
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();

// This Mengembalikan object yang bersangutan   

// cara 3 - constructor
function Halo() {
    console.log(this);
    console.log('halo');
}

var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat.
