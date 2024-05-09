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

// //**************************** SNACK 3 ***************************************//
// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)
let stringa = "bellodezio";
console.log("Questa è la stringa di partenza: " + stringa);
let nuovaStringa = invertiStringa(stringa);
console.log("Javascript risponde: " + nuovaStringa);

function invertiStringa(str) {
	let arrayStr = str.split("");
	let reverseStr = arrayStr.reverse();
	let nuovaStr = reverseStr.join("");
	return nuovaStr;
}

// //**************************** SNACK 4 ***************************************//
// Scrivi una funzione che fonda due array (aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
let arrayLett = ["a", "b", "c", "d", "e"];
let arrayNumb = [1, 2, 3, 4, 5];
let nuovoArray = fondiArray(arrayLett, arrayNumb);
console.log("Primo Array: ", arrayLett);
console.log("Secondo Array: ", arrayNumb);
console.log("Nuovo Array: ", nuovoArray);

function fondiArray(array1, array2) {
	let arrayFuso = [];
	for (let i = 0; i < array1.length; i++) {
		arrayFuso.push(array1[i]);
		arrayFuso.push(array2[i]);
	}
	return arrayFuso;
}

// //**************************** SNACK 5 ***************************************//
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

let arr = ["davide", "luca", "giuseppe", "nicolas", "matteo"];
let a = 0;
let b = 0;
let nuovoArr = iniettaArray(arr, a, b);
console.log(nuovoArr);

function iniettaArray(array, numeroA, numeroB) {
	numeroB = Math.floor(Math.random() * array.length);
	numeroA = Math.floor(Math.random() * numeroB - 1);
	let diff = numeroB - numeroA;
	let nuovoArray = array;
	nuovoArray.splice(diff, 0, numeroA, numeroB);
	return nuovoArray;
}
