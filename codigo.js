const tarjetas = document.querySelector(".tarjet");
const boton = document.querySelector(".tituloButton");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const templateRelleno=document.querySelector(".templateRelleno").content;
const templateTarjeta = document.querySelector(".templateTarjetas").content;

const fragmento = document.createDocumentFragment();

let contenido = [{
    titulo: "Enmaquetado",
    conten: "HTML",
 },
 {
    titulo: "Diseño",
    conten: "CSS",
 },
 {
    titulo: "Lenguaje",
    conten: "JavaScript",
 },
 {
    titulo: "Control de versiones",
    conten: "Git y Github",
 },
 {
    titulo: "Framework",
    conten: "Boostrap",
 },
 {
    titulo: "Superset",
    conten: "TypeScript",
 },
 {
    titulo: "Carrera",
    conten: "Ingenieria En Sistemas Computacionales",
 },
 {
    titulo: "Modulos Responsivos",
    conten: "FlexBox y Grid",
 },
 {
   titulo:"Ingles",
   conten: "basico"
 }
];

let colores = "uno,dos,tres,cuatro,cinco,seis,siete,ocho";
const color = colores.split(",");



document.addEventListener("DOMContentLoaded",e =>{
    e.preventDefault();
    agregarImagen();

});

boton.addEventListener("click",e =>{
    
    tarjetas.textContent ="";
    
    if (e.target.matches("#green")){
        let i=0;

        contenido.forEach(item =>{
            const clone = templateTarjeta.cloneNode(true);
            clone.querySelector("h2").textContent = item.titulo;
            clone.querySelector("p").textContent = item.conten;
            clone.querySelector("div").classList.add(color[i]);
            i++;
            fragmento.appendChild(clone);  
            
         });
         
         tarjetas.appendChild(fragmento);
         green.disabled =true;
         red.disabled = false;

    }
    if (e.target.matches("#red")) {
        tarjetas.textContent ="";
        red.disabled =true;
        green.disabled = false;
        agregarImagen();
        
    }
    
});

const agregarImagen = () =>{

    let imga = "gif1.gif,gif2.gif,gif3.gif";
    const imagen = imga.split(",");
    const aleatorio = parseInt(Math.random()*(3-0)+0);
    const cloneRelleno = templateRelleno.cloneNode(true);
    cloneRelleno.querySelector("img").src = `img/${imagen[aleatorio]}`;
    tarjetas.appendChild(cloneRelleno);

}

