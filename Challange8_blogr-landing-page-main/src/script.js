const iconmenu = document.getElementById("iconmenu");
const menuarea = document.getElementById("menuarea");
const product = document.getElementById("product1");
const company = document.getElementById("company1");
const connect = document.getElementById("connect1");

function ClickMenu(){
   const result = iconmenu.classList.contains("ihambergur")
   menuarea.classList.toggle("hidden");
   switch(result){
    case true:  iconmenu.classList.add("iclose");
                iconmenu.classList.remove("ihambergur");
    break;
    case false:  iconmenu.classList.add("ihambergur");
                 iconmenu.classList.remove("iclose");
    break;
   }
}

function ClickTab(c){
    c.classList.contains("i-arrow-rotate") ? c.classList.remove("i-arrow-rotate") : c.classList.add("i-arrow-rotate") ;
    
   
    
    if(c.id == "product0"){
        product.classList.toggle("shight-product")
    }
    else if(c.id == "company0"){
        company.classList.toggle("shight-company")
    }
    else if(c.id == "connect0"){
        connect.classList.toggle("shight-connect")
    }
}

