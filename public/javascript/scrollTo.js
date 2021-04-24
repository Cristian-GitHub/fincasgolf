window.addEventListener ("load", function(){
    
    let botonA = document.querySelector (".botonA");
    let botonB = document.querySelector (".botonB");
    let botonC = document.querySelector (".botonC");
    let botonD = document.querySelector (".botonD");
    let botonE = document.querySelector (".botonE");
    let botonF = document.querySelector (".botonF");

    let listInline = document.querySelector (".list-inline");
    let buttons = document.querySelectorAll (".buttons");
    let botonScrollUp = document.querySelector (".botonScrollUp");

    let sectionA = document.querySelector (".sectionA");
    let sectionB = document.querySelector (".sectionB");
    let sectionC = document.querySelector (".sectionC");
    let sectionD = document.querySelector (".sectionD");
    let sectionE = document.querySelector (".sectionE");

    
       // === Cambio de color al llegar al tope y hacerse sticky === //
     let alturaHeader = 80;
     let medidaScrollUp = 300;
    window.addEventListener ('scroll', function(){
        if (window.pageYOffset >= alturaHeader){
            listInline.style.backgroundColor = 'rgba(252,255,227,1)';
            buttons.forEach(botones => {
                botones.style.color = '#05571F';
            });
        } else {
            listInline.style.backgroundColor = 'rgba(0,0,0,.5)';
            buttons.forEach(botones => {
                botones.style.color = 'white';
            });
        }
        if (window.pageYOffset >= medidaScrollUp){
            time = '1s';

            botonScrollUp.style.display = 'block';
        }else{
            botonScrollUp.style.display = 'none';
        }
    })

    botonScrollUp.addEventListener ("click", function(){
        window.scrollTo (0, 0);
    })
    botonA.addEventListener ("click", function(){
        window.scrollTo (0, 300);
    });     
    botonB.addEventListener ("click", function(){
        window.scrollTo (0, 550);
    });     
    botonC.addEventListener ("click", function(){
        window.scrollTo (0, 800);
    });     
    botonD.addEventListener ("click", function(){
        window.scrollTo (0, 1050);
    });     
    botonE.addEventListener ("click", function(){
        window.scrollTo (0, 1300);
    });         
    botonF.addEventListener ("click", function(){
        window.scrollTo (0, 1300);
    });     



//    linkS.forEach(linkenes => {
//        linkenes.addEventListener ("click", function(){
//            alert ("tocaste el boton");
//        });     
//    });

});