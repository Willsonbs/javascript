let now = new Date();
let horas = now.getHours();
let minutos = now.getMinutes();

if (horas < 12) {
    console.log(`São exatamente ${horas}:${minutos < 10 ? '0' : ''}${minutos} horas. Bom dia!`);
} else if (horas >= 12 && horas < 18) {
    console.log(`São exatamente ${horas}:${minutos < 10 ? '0' : ''}${minutos} horas. Boa tarde!`);
} else {
    console.log(`São exatamente ${horas}:${minutos < 10 ? '0' : ''}${minutos} horas. Boa noite!`);
}

