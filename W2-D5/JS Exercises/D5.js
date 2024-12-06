/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("esercizio 1");

const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];

  console.log(element);
  
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("esercizio 2");

pets.sort();
console.log(pets);

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  
  console.log(element);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("esercizio 3");

pets.reverse();
console.log(pets)

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  
  console.log(element);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("esercizio 4");

pets.splice(0,1);
pets.push("redfish")
console.log(pets);

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  
  console.log(element);
}


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
    licensePlate:"AB123CD",
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
    licensePlate:"FG456HI",
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
    licensePlate:"JK789LM",
  },
]

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("esercizio 6");
console.log(cars);

cars.push({
  brand: 'Opel',
  model: 'Corsa',
  color: 'rown',
  trims: ['life', 'style', 'r-line'],
  licensePlate:"NO789PQ",
})

console.log(cars);

for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  
  element.trims.pop();
}

console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for(let index = 0; index < cars.length; index++){
  const element =cars[index];
  
  let newArray=element.trims.slice(0,1);
  justTrims.push(newArray)

}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  
    if(element.color.charAt(0) === "b"){
      console.log("Fizz");
    }else{
      console.log("Buzz")
    }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (i < numericArray.length) {

  const currentNumber= numericArray[i];
  console.log(currentNumber);
  if(currentNumber === 32){
    break;
  }
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['z', 't', 'n', 'c', 'f'];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      charactersArray[i] = 1;
      break;
    case 'b':
      charactersArray[i] = 2;
      break;
    case 'c':
      charactersArray[i] = 3;
      break;
    case 'd':
      charactersArray[i] = 4;
      break;
    case 'e':
      charactersArray[i] = 5;
      break;
    case 'f':
      charactersArray[i] = 6;
      break;
    case 'g':
      charactersArray[i] = 7;
      break;
    case 'h':
      charactersArray[i] = 8;
      break;
    case 'i':
      charactersArray[i] = 9;
      break;
    case 'l':
      charactersArray[i] = 10;
      break;
    case 'm':
      charactersArray[i] = 11;
      break;
    case 'n':
      charactersArray[i] = 12;
      break;
    case 'o':
      charactersArray[i] = 13;
      break;
    case 'p':
      charactersArray[i] = 14;
      break;
    case 'q':
      charactersArray[i] = 15;
      break;
    case 'r':
      charactersArray[i] = 16;
      break;
    case 's':
      charactersArray[i] = 17;
      break;
    case 't':
        charactersArray[i] = 18;
        break;
    case 'u':
      charactersArray[i] = 19;
      break;
    case 'v':
      charactersArray[i] = 20;
      break;
    case 'z':
      charactersArray[i] = 21;
      break;
    default:
      console.log("non è una leterra italiana");
  }
}

console.log(charactersArray);

