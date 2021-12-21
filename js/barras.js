const hoverSkills = document.querySelector('.barramsm');

hoverSkills.addEventListener('mouseover', function (){
    document.getElementById('barra').style.display = 'block';
    document.getElementById('barra').style.maxWidth = '60%';
    document.getElementById('porcentaje').style.content = '20%';
})

hoverSkills.addEventListener('mouseleave', function (){
    document.getElementById('barra').style.display = 'none';
})

