const squadre = [
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

const randomNum = ( max, min ) => {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

squadre.forEach( (element) => {
  element.punti_fatti = randomNum(100, 1);
  element.falli_subiti = randomNum(100, 1);
});

const falliSquadre = squadre.map( (element) => {
  let obj = { nome: element.nome,  falli_subiti: element.falli_subiti };
  return obj;
});

console.log(squadre);
console.log(falliSquadre);


Oppure
