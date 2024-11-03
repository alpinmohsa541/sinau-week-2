function isPrime(Number){
    if (Number <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(Number); i++){
        if (Number%i===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); 
console.log(isPrime(10));