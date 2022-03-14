let poke1, poke2;
let tip1, tip2;
let nomb1, nomb2;
let ataq1, ataq2;
let defen1, defen2;


function batalla(){
  let aleatorio1 = Math.round (Math.random () * (100-1) + parseInt (1)) ;;
  let aleatorio2 = Math.round (Math.random () * (100-2) + parseInt (1)) ;;
  poke1 = document.getElementById ("img1");
  poke2 = document.getElementById ("img2");
  nomb1 = document.getElementById ("nombre1");
  nomb2 = document.getElementById ("nombre2");
  tip1 = document.getElementById ("tipo1");
  tip2 = document.getElementById ("tipo2");
  ataq1 = document.getElementById ("ataque1");
  ataq2 = document.getElementById ("ataque2");
  defen1 = document.getElementById ("defensa1");
  defen2 = document.getElementById ("defensa2");
  traerDatos (poke1,nomb1,tip1,ataq1,defen1,aleatorio1);
  traerDatos (poke2,nomb2,tip2,ataq2,defen2,aleatorio2);

}
  
  function traerDatos (contenedor,nombre,tipo,ataque,defensa,id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then (response => response.json ())
    .then (data => {
      contenedor.src = data.sprites.other.dream_world.front_default; 
      nombre.innerHTML = data.name;
      ataque.innerHTML = "Ataque: " + data.stats[1].base_stat;
      defensa.innerHTML = "Defensa: " + data.stats[2].base_stat;
      tipo.innerHTML = "Tipo: " + data.stats [1] .base_stat;
     })
}