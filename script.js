//sw
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then((registration)=>{
        console.log("Service Worker registration sucessful!", registration);
    })
    .catch((error)=>{
        console.log("Error trying register Service Worker", error)
    });    
}

//js
function calcular() {
            
    const totalAulas = Number(document.getElementById('totalAulas').value);
    const totalFaltas = Number(document.getElementById('totalFaltas').value);
    const msgElem = document.getElementById('mensagem');
    const imgJoia = document.getElementById('imgJoia');
    const imgMelhorar = document.getElementById('imgDedo');


    // Calcular frequência
    const frequencia = ((totalAulas - totalFaltas) / totalAulas) * 100;

    if (frequencia >= 85) {
    msgElem.textContent = `${frequencia.toFixed()}%, tá joia`;
    imgJoia.style.display = 'block';
    imgMelhorar.style.display = 'none';
  } else {
    msgElem.textContent = `${frequencia.toFixed()}%, vamo melhorar isso ae paizão`;
    imgJoia.style.display = 'none';
    imgMelhorar.style.display = 'block';
  
    }
}
