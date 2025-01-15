function num(x){
    if (x % 2 == 0){
        return "par"
    } else {
        return "impar"
    }
}

let res = num(11)
console.log(` Este número é ${res}`)