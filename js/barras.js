
function block(contenedor, barramsm) {

    $(contenedor).css({
        "visibility": "visible",
        "height": "19px",
        "border-width": "1px",
    });
    $(`${barramsm} h5`).css({
        "margin-bottom": "0%"
    });
}

function none(contenedor, barramsm) {
    $(contenedor).css({
        "visibility": "hidden",
        "height": "0px",
        "border-width": "0px",
    });
    $(`${barramsm} h5`).css({
        "margin-bottom": "-3%"
    });
}


const position = [0,1,2];
$(document).ready(function(){
    $(".icon").mouseover(function(){
        position[0] = ".icon";
        position[1] = "#barra";
        position[2] = "#contenedor";
        position[3] = "#ff4f19";
        position[4] = "90%";
        position[5] = ".porcent";
        move(position);
    })

    $(".icon1").mouseover(function(){
        position[0] = ".icon1";
        position[1] = "#barra1";
        position[2] = "#contenedor1";
        position[3] = "#04d2cb";
        position[4] = "85%";
        position[5] = ".porcent1";
        move(position);
    })

    $(".icon2").mouseover(function(){
        position[0] = ".icon2";
        position[1] = "#barra2";
        position[2] = "#contenedor2";
        position[3] = "#fce414";
        position[4] = "75%";
        position[5] = ".porcent2";
        move(position);
    })

    $(".icon3").mouseover(function(){
        position[0] = ".icon3";
        position[1] = "#barra3";
        position[2] = "#contenedor3";
        position[3] = "#8690fa";
        position[4] = "70%";
        position[5] = ".porcent3";
        move(position);
    })

    $(".icon4").mouseover(function(){
        position[0] = ".icon4";
        position[1] = "#barra4";
        position[2] = "#contenedor4";
        position[3] = "#ff557e";
        position[4] = "70%";
        position[5] = ".porcent4";
        move(position);
    })

    $(".icon5").mouseover(function(){
        position[0] = ".icon5";
        position[1] = "#barra5";
        position[2] = "#contenedor5";
        position[3] = "#2d4d90";
        position[4] = "70%";
        position[5] = ".porcent5";
        move(position);
    })

})
function move(position) {
    $(position[0]).mouseover(function () {
        $(position[1]).css({
            "width": position[4],
            "transition-duration": "0.6s",
            "background": position[3],
            function() {
                $(position[2]).css({
                    "transition-duration": "1s",
                    "opacity": "1",
                });
            }
        });

        $(position[5]).css({
            "opacity": "1",
            "transition-duration": "1s",
        });

        block(position[2], position[0]);
    });
    
    
    $(position[0]).mouseleave(function () {
        $(position[1]).css({
            "width": "0%",
            "transition-duration": "0.6s",
            function() {
                $(position[2]).css({
                    "transition-duration": "0.6s",
                    "opacity": "0",
                });
            }
        });
        $(position[5]).css({
            "opacity": "0",
            "transition-duration": "1s",
        });
        setTimeout(none(position[2], position[0]), 1000);
    });
}







/* $('.icon1').mouseover(function () {
    $('#barra1').css({
        "width": "30%",
        "transition-duration": "3s",
        function() {
            $('#contenedor1').css({
                "transition-duration": "1s",
                "opacity": "1",
            });
        }
    });
    block("#contenedor1", "barramsm1");
});


$('.icon1').mouseleave(function () {
    $('#barra1').css({
        "width": "0%",
        "transition-duration": "2s",
        function() {
            $('#contenedor1').css({
                "transition-duration": "1s",
                "opacity": "0",
            });
        }
    });
    setTimeout(none("#contenedor1", "barramsm1"), 1000);
}); 
 */



/* const hoverSkills = document.querySelector('.icon');

hoverSkills.addEventListener('mouseover', function (){
    document.getElementById('barra').style.display = 'block';
    document.getElementById('barra').style.Width = '80%';
})

hoverSkills.addEventListener('mouseleave', function (){

    document.getElementById('barra:hover').style.display = 'none';
})
 */
