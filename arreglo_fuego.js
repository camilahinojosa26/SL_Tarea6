let pokemon = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
];

let pokemonFuego = pokemon.filter(poke => poke.tipo === 'Fuego');
console.log("Usando filter():", pokemonFuego);

let pokemonFuego2 = [];
for(let i = 0; i < pokemon.length; i++) {
    if(pokemon[i].tipo === 'Fuego') {
        pokemonFuego2.push(pokemon[i]);
    }
}
console.log("Usando for:", pokemonFuego2);

let pokemonFuego3 = [];
pokemon.forEach(poke => {
    if(poke.tipo === 'Fuego') {
        pokemonFuego3.push(poke);
    }
});
console.log("Usando forEach:", pokemonFuego3);