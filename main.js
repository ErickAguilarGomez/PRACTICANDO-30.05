const box = document.querySelector("#box");
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((resolve) => resolve.json())
  .then((respuesta) => {
    let nombres = [];
    respuesta = respuesta.results;
    respuesta.forEach((item) => {
      nombres.push(item.name);
    });
    let template = "";
    nombres.forEach((item) => {
     
      template = `<p><a>${item} </a></p>`;
      box.innerHTML += template;
    });

    setNombre(nombres)
  })
  .catch((error)=>console.error(`hay un error`,error))
const getNombre=()=>{return nombre2}
const setNombre=(valorNombre)=>{
    nombre2=valorNombre
}
console.log("Nombres",getNombre());
