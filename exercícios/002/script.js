function verificarIdade(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade < 10){
                //criânça
                img.setAttribute('src', '../002/assets/baby-boy.jpg');
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', '../002/assets/teen-boy.jpg');;
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', '../002/assets/men.jpg');
            } else {
                //idoso
                img.setAttribute('src', '../002/assets/grandpa.jpg');
            }

        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >=0 && idade < 10){
                //criânça
                img.setAttribute('src', '../002/assets/baby-girl.jpg');
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', '../002/assets/teen-girl.jpg');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', '../002/assets/woman.jpg');
            } else {
                //idosa

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você tem ${idade} anos e é ${genero}.`
        res.appendChild(img)
    }
}