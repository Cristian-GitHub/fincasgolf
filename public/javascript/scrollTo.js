window.addEventListener ("load", function(){
    
    let botonBarrio = document.querySelector (".botonBarrio");
    let botonNoticias = document.querySelector (".botonNoticias");
    let botonHouse = document.querySelector (".botonHouse");
    let botonGolf = document.querySelector (".botonGolf");
    let botonEventos = document.querySelector (".botonEventos");
    let botonContacto = document.querySelector (".botonContacto");

    let listInline = document.querySelector (".list-inline");
    let buttonsNavBar = document.querySelectorAll (".buttonsNavBar");

    let botonScrollUp = document.querySelector (".botonScrollUp");

    let carrusel = document.querySelector (".carrusel");

     // === Cambio de color al llegar al tope y hacerse sticky === //
 
    let alturaHeader = 80;
    let medidaScrollUp = 1000;
    let posicionBarrio = 400;
    let posicionNoticias = 800;
    let posicionHouse = 1200;
    let posicionGolf = 1800;
    let posicionEventos = 2300;
    let posicionContacto = 2700;
    let NavBarOscMin = 1900;
    let NavBarOscMax = 2500;
    let NavBarOscMinF = 3000;

    // === EVENTOS RELACIONADOS A LA POSICIÓN DEL SCROLL === //

    window.addEventListener ('scroll', function(){                  
        
        if ((window.pageYOffset >= alturaHeader && window.pageYOffset < NavBarOscMin) || (window.pageYOffset >= NavBarOscMax && window.pageYOffset < NavBarOscMinF)){
            listInline.style.backgroundColor = 'rgba(252,255,227,1)';
            buttonsNavBar.forEach(botones => {
                botones.style.color = '#05571F';
            });
        } else if (window.pageYOffset >= NavBarOscMin && window.pageYOffset < NavBarOscMax){
            listInline.style.backgroundColor = 'rgba(0,0,0,.9)';
            buttonsNavBar.forEach(botones => {
                botones.style.color = 'white';
            });
        } else if (window.pageYOffset >= NavBarOscMinF){
            listInline.style.backgroundColor = 'rgb(202,155,77)';
            buttonsNavBar.forEach(botones => {
                botones.style.color = 'white';
            });
        } else {
            listInline.style.backgroundColor = 'rgba(0,0,0,.5)';
            buttonsNavBar.forEach(botones => {
                botones.style.color = 'white';
            });
        };

        if (window.pageYOffset >= medidaScrollUp){
            time = '1s';

            botonScrollUp.style.display = 'block';
        }else{
            botonScrollUp.style.display = 'none';
        }

        if (window.pageYOffset >= posicionBarrio & window.pageYOffset < posicionNoticias){
            botonBarrio.classList.add ('buttonsJS');
        } else {
            botonBarrio.classList.remove ('buttonsJS');
        }
        
        if (window.pageYOffset >= posicionNoticias & window.pageYOffset < posicionHouse){
            botonNoticias.classList.add ('buttonsJS');
        } else {
            botonNoticias.classList.remove ('buttonsJS');
        }
        
        if (window.pageYOffset >= posicionHouse & window.pageYOffset < posicionGolf){
            botonHouse.classList.add ('buttonsJS');
        } else {
            botonHouse.classList.remove ('buttonsJS');
        }
        
        if (window.pageYOffset >= posicionGolf & window.pageYOffset < posicionEventos){
            botonGolf.classList.add ('buttonsJS');
        } else {
            botonGolf.classList.remove ('buttonsJS');
        }

        if (window.pageYOffset >= posicionEventos & window.pageYOffset < posicionContacto){
            botonEventos.classList.add ('buttonsJS');
        } else {
            botonEventos.classList.remove ('buttonsJS');
        }
        if (window.pageYOffset >= posicionContacto){
            botonEventos.classList.remove ('buttonsJS');
            botonContacto.classList.add ('buttonsJS');
        } else {
            botonContacto.classList.remove ('buttonsJS');
        }

        if(window.pageYOffset > 1000){
            carrusel.style.position = "absolute";
        } else {
            carrusel.style.position = "fixed";
        }
    })

    // === EVENTOS RELACIONADOS A LA ESPERA DE CLICKSS === //

    botonScrollUp.addEventListener ("click", function(){
        window.scrollTo (0, 0);
    });
    botonBarrio.addEventListener ("click", function(){
        window.scrollTo (0, 500);
    });     
    botonNoticias.addEventListener ("click", function(){
        window.scrollTo (0, 1000);
    });     
    botonHouse.addEventListener ("click", function(){
        window.scrollTo (0, 1500);
    });     
    botonGolf.addEventListener ("click", function(){
        window.scrollTo (0, 2000);
    });     
    botonEventos.addEventListener ("click", function(){
        window.scrollTo (0, 2500);
    });         
    botonContacto.addEventListener ("click", function(){
        window.scrollTo (0, 3000);
    });     


});