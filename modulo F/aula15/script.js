//vetores
/*
let num = [5, 2, 3, 6, 7, 8, 9];
num[6] = 1
num.push(4)
//num.sort()
console.log(`Nosso vetor contém os números ${num}`);
console.log(`O tamanho vetor é de ${num.length}`);


//percusro da exibição do vetor
for (var i = 0; i < num.length; i++)
    console.log(`A posição ${i} tem o valor = ${num[i]}`)
*/
let num = [5, 2, 3, 6, 7, 8, 9];

//for (let i in num){
//   console.log(`A posição ${i} tem o valor = ${num[i]}`)
//}

let x = num.indexOf(8)
    if (x == -1){
        console.log("O valor procurado não foi encontrado no vetor.")
    } else {
        console.log(`O valor procurado foi encontrado no índice ${x}.`)
    }
