window.addEventListener ("load", function(){
    
    let btnsAG = document.querySelectorAll (".btnAG");
    let btnAGG = document.querySelector (".btnAGG");
    
    //cuando levanta la ventana el botón golf está marcado por defecto.
    btnAGG.classList.add ('asuntosGolfJS');

    btnsAG.forEach (btn => {
        btn.onclick = (e) => {
            let target = e.target;
            btnsAG.forEach (btn => {
                btn.classList.remove ('asuntosGolfJS');
            })
            target.classList.add ('asuntosGolfJS');
        }
    })
});