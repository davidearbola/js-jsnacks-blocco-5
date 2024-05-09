//**************************** SNACK 1 ***************************************//
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// let zucchine = [
// 	{
// 		colore: "verde",
// 		lunghezza: 10,
// 		peso: 100,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 15,
// 		peso: 150,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 8,
// 		peso: 80,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 23,
// 		peso: 230,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 18,
// 		peso: 180,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 11,
// 		peso: 110,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 14,
// 		peso: 140,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 27,
// 		peso: 270,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 19,
// 		peso: 190,
// 	},
// 	{
// 		colore: "verde",
// 		lunghezza: 9,
// 		peso: 90,
// 	},
// ];

// let pesoTotale = calcolaPeso(zucchine, "peso");
// console.log("Il peso totale delle zucchine è: ", pesoTotale);
// function calcolaPeso(array, proprietà) {
// 	let risultato = 0;
// 	array.forEach((element) => {
// 		risultato += element[proprietà];
// 	});
// 	return risultato;
// }

// //**************************** SNACK 2 ***************************************//
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let zucchine = [
	{
		colore: "verde",
		lunghezza: 10,
		peso: 100,
	},
	{
		colore: "verde",
		lunghezza: 15,
		peso: 150,
	},
	{
		colore: "verde",
		lunghezza: 8,
		peso: 80,
	},
	{
		colore: "verde",
		lunghezza: 23,
		peso: 230,
	},
	{
		colore: "verde",
		lunghezza: 18,
		peso: 180,
	},
	{
		colore: "verde",
		lunghezza: 11,
		peso: 110,
	},
	{
		colore: "verde",
		lunghezza: 14,
		peso: 140,
	},
	{
		colore: "verde",
		lunghezza: 27,
		peso: 270,
	},
	{
		colore: "verde",
		lunghezza: 19,
		peso: 190,
	},
	{
		colore: "verde",
		lunghezza: 9,
		peso: 90,
	},
];

let zucchineFiltrate = creaArrayZucchine(zucchine, "lunghezza");
console.log(zucchineFiltrate);
let pesoGrandi = calcolaPeso(zucchineFiltrate.zucchineGrandi, "peso");
console.log("Peso grandi", pesoGrandi);
let pesoPiccole = calcolaPeso(zucchineFiltrate.zucchinePiccole, "peso");
console.log("Peso piccole: ", pesoPiccole);

function creaArrayZucchine(array, property) {
	let risultato = {
		zucchineGrandi: [],
		zucchinePiccole: [],
	};

	array.forEach((element) => {
		if (element[property] >= 15) {
			risultato.zucchineGrandi.push(element);
		} else {
			risultato.zucchinePiccole.push(element);
		}
	});
	return risultato;
}

function calcolaPeso(array, proprietà) {
	let risultato = 0;
	array.forEach((element) => {
		risultato += element[proprietà];
	});
	return risultato;
}
