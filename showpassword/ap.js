let inp = document.querySelector("#pass");
let box =document.querySelector("#check")
box.addEventListener("click",()=>{
if(box.checked){
    inp.type = "text"
}else{
    inp.type ="password"
}
    
})

