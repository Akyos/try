/*SCRIPT ANONIMO AUTOEJECUTABLE*/

/*Script anonima autoejecutables, es decir, si se necesita un proceso igual en otro proyecto , son simplemente
copiar y pegar sirve*/
// Metodo para desplegar un menu & intercambiar los iconos

((d)=>{
    const $btnmenu = d.querySelector(".tail-buttons__icon"),
    $menu = d.querySelector(".menu-item");

    $btnmenu.addEventListener("click",(e)=>{
        $btnmenu.firstElementChild.classList.toggle("none");
        $btnmenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });
    //El siguiente proceso es para que cuando le de clic a algun enlace la barra del menu se oculte
    d.addEventListener("click",(e)=>{
        if(!e.target.matches(".menu-item a ")) return false;

        $btnmenu.firstElementChild.classList.remove("none");
        $btnmenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });

})(document);