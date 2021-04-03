
//  variable
const iconsBars = document.querySelector(".iconbars");  
const menu = document.querySelector(".menu");

//methods 

function showMenu()
{   
    menu.classList.toggle("showmenu");

}

//Event Listner 

iconsBars.addEventListener("click", showMenu);



