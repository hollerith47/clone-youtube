window.onload = () =>{
    var collapse = document.getElementById('collapse');
    var menu = document.getElementById("menu");

    if(collapse) {
        collapse.addEventListener("click", () =>{
            console.log("I'm working");
            if(menu.style.display === 'none'){
                menu.style.display = 'block'
            }else{
                menu.style.display = "none";
            }
            
        })
        if(menu){
            menu.addEventListener("mouseleave", ()=>{
                menu.style.display = 'none';
            })
        }
    }
}