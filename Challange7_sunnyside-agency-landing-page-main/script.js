const headerlink = document.getElementById("header-link");
const iconmenu = document.getElementById("imenu");
let  togglemenu = false

let showiconmenu = false;
// function SwitchToggleMenu(){
//     switch(togglemenu){
//         case true:  iconmenu.classList.add("menu-mobile");
//                     !togglemenu;
//         break;
//         case false: iconmenu.classList.remove("menu-mobile");
//                     !togglemenu;
//         break;
//     }
// }

function SwitchToggleMenu(){
    // iconmenu.classList.toggle("menu-mobile");
    const result = headerlink.classList.contains("s-toggle-link-desktop");
    if(showiconmenu == true){
        if(result == true){
            headerlink.classList.remove("s-toggle-link-desktop");
            headerlink.classList.add("s-toggle-link-mobile");
        }
        else if(result != true){
            headerlink.classList.add("s-toggle-link-desktop");
            headerlink.classList.remove("s-toggle-link-mobile");
        }
    }
   
}

function SwitchResize(){    
    let width = window.outerWidth;
    if(width <570){
        showiconmenu = true;
    }
    else if(width > 570){
        showiconmenu = false;
        headerlink.classList.add("s-toggle-link-desktop");
        headerlink.classList.remove("s-toggle-link-mobile");
    }
}


