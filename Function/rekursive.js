function rekursive(n){
    if( n === 0) return; // Base Case
    console.log(n);
    return rekursive(n-1)
}

function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n-1);
}

rekursive(10);
console.log(factorial(5));