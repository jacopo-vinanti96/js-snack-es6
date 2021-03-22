let squadre = [
  {
    nome: "empoli",
    punti_fatti: 0,
    falli_subiti: 0
  },
  {
    nome: "catania",
    punti_fatti: 0,
    falli_subiti: 0
  },
  {
    nome: "benevento",
    punti_fatti: 0,
    falli_subiti: 0
  }
];

function randomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

for (var i = 0; i < squadre.length; i++) {
  squadre[i].punti_fatti = randomNum(100, 1);
  squadre[i].falli_subiti = randomNum(100, 1);
}

let falliSquadre = [];

for (var i = 0; i < squadre.length; i++) {
  const { nome, falli_subiti } = squadre[i];
  const obj = { nome, falli_subiti };
  falliSquadre.push(obj);
}

console.log(falliSquadre);
