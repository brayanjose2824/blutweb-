let toggle=document.getElementById('toggle');
toggle.addEventListener('chenge',(event)=>{
     let checked=event.target.checked;
     document.body.classList.toggle('dark');

})