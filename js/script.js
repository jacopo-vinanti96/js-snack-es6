const Biciclette = [
  {
    nome: 'Atala',
    peso: 7000
  },
  {
    nome: 'Graziella',
    peso: 5000
  },
  {
    nome: 'Adidas',
    peso: 3000
  }
];

const { peso } = Biciclette[0];
const { nome } = Biciclette[0];

let pesoIniziale = peso;
let nomeIniziale = nome;

for (var i = 0; i < Biciclette.length; i++) {
  const { peso } = Biciclette[i];
  if ( pesoIniziale > peso ) {
    pesoIniziale = peso;
    const { nome } = Biciclette[i];
    nomeIniziale = nome;
  }
}

console.log(`La bici più leggera è la: ${nomeIniziale} e pesa ${pesoIniziale}g`);
