/*
let amigo = {
    nome: 'josé', 
    sexo: 'M', 
    peso: 86.8,
    engordar: function(p=0){
        this.peso += p;
    }
};

amigo.engordar(2);  
console.log(`${amigo.nome} ${amigo.sexo} ${amigo.peso}kg`);


let num = 8;
num **= 2
console.log(num)
*/

let produto = ["massa", "agua", "ovo", "sal", "açucar", "leite", "fermento", "chocolate", "cenoura", "creme de leite", "leite condensado"]

for (let i  of produto) {
    console.log(`Ingredientes: ${i}`)
}