function carregar(){
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('image');
    let date = new Date()
    let hour = date.getHours();
    let minutes = date.getMinutes();
    msg.innerHTML = `Agora são ${hour}:${minutes < 10 ? '0' : ''}${minutes} horas.`

    if(hour >= 0 && hour < 12){
        img.src = 'assets/morning.jpg'
        
    } else if (hour >= 12 && hour <18) {
        img.src = 'assets/afternoon.jpg'
        
    } else {
        img.src = 'assets/night.jpg'
        
    }
}

