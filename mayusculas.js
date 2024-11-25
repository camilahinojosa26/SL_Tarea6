// Arreglo original
let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];

let pokemonMayusculas = pokemon.map(nombre => nombre.toUpperCase());
console.log("Usando map():", pokemonMayusculas);

let pokemonMayusculas2 = [];
for(let i = 0; i < pokemon.length; i++) {
    pokemonMayusculas2.push(pokemon[i].toUpperCase());
}
console.log("Usando for:", pokemonMayusculas2);