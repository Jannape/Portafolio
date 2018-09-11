const menuPerfil = document.getElementById('menu-perfil');
const menuPortafolio = document.getElementById('menu-portafolio');
const menuContacto = document.getElementById('menu-contacto');
const contentPerfil = document.getElementById('perfil');
const contentPortafolio = document.getElementById('portafolio');
const contentContacto = document.getElementById('contacto');

menuPortafolio.addEventListener('click', () => {
    contentPerfil.style = "display:none";
    contentPortafolio.style = "display:block";
    console.log("holaaaa soy eventlistener");
});

menuPerfil.addEventListener('click', () => {
    contentPortafolio.style = "display:none";
    contentPerfil.style = "display:block";
    console.log("holaaaa soy eventlistener");
});
menuContacto.addEventListener('click',()=>{
    contentPortafolio.style = "display:none";
    contentPerfil.style = "display:none";
    contentContacto.style = "display:block";
    console.log("holaaaa soy eventlistener");
});