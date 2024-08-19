const image = document.querySelectorAll('.image');

for (let [i, imageSelected] of image.entries()){
    imageSelected.addEventListener('click', function focus(){
        resetFocus();
        imageSelected.classList.toggle('active')
    })

}

function resetFocus(){
    image.forEach(i=> i.classList.remove('active'))

}

let toggle=document.getElementById('toggle');
toggle.addEventListener('chenge',(event)=>{
     let checked=event.target.checked;
     document.body.classList.toggle('dark');

})

ScrollReveal().reveal('.imagenes' ,{ delay: 500});
ScrollReveal().reveal('.slider' ,{ delay: 500});
ScrollReveal().reveal('.content-titulo' ,{ delay: 500});



