let ids = document.getElementsByTagName("h6");
let btns = document.getElementsByClassName("btn");

for(let i = 0 ; i < btns.length ; i++){
    btns[i].addEventListener('click', (e)=>{
        e.preventDefault();
        let id = ids[i].innerHTML;
        location.href = id+'/';
    })
}


