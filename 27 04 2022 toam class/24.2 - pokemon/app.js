function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}
Pokemon.prototype.callPokemo = function () {
  console.log(` choose you, ${this.name}`);
};
Pokemon.prototype.attack = function (attackNumber) {
  console.log(`${this.name} used ${this.attackList[attackNumber - 1]}`);
};

const a = new Pokemon('pok1', 'typex', ['Psychic1', 'Dragon1', 'Fire1']);
const b = new Pokemon('pok2', 'typey', ['Psychic2', 'Dragon2', 'Fire2']);
const c = new Pokemon('pok3', 'typez', ['Psychic3', 'Dragon3', 'Fire3']);

a.callPokemo();
b.callPokemo();
c.callPokemo();

a.attack(1);
b.attack(2);
c.attack(3);
