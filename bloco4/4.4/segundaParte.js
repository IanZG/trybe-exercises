// EXERCISE 1
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  console.log("Bem-vinda, " + info.personagem)

// EXERCISE 2
info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };
console.log(info);

// EXERCISE 3
for (let key in info) {
    console.log(key);
}

// EXERCISE 4
for (let key in info) {
    console.log(info[key]);
}

// EXERCISE 5
info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };

console.log(info.personagem + " " + "e" + " " + info2.personagem);
console.log(info.origem + " " + "e" + " " + info2.origem);
console.log(info.nota + " " + "e" + " " + info2.nota);

if (info.recorrente == "Sim" && info2.recorrente == "Sim") {
    console.log("Ambos são recorrentes");
} else {
    console.log("Parece que algum personagem não é recorrente");
}

