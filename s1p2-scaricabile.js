/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*I principali tipi di dati in JavaScript sono i seguenti ed ognuno ha un ruolo diverso nella programmazione i quali ci aiutano a rappresentare e manipolare diversi tipi di dati in modo efficace:
1. Numeri (Numbers): I numeri sono come delle cifre che usi per contare. Possono essere interi (come 1,2,3). Puoi fare operazioni matematiche con i numeri, come l'addizione e sottrazione.
2. Stringhe (Strings): Le stringhe sono come una serie di lettere, come quelle che usi per scrivere parole e frasi. Ad esempio, "ciao" è una stringa. Puoi mettere insieme le stringhe per creare testi più lunghi.
3. Booleani (Booleans): I booleani sono come un interruttore che può essere acceso o spento. Hanno solo due valori possibili: vero (true) o falso (false). Puoi usarli per prendere decisioni, come "Se è vero, fai questo, altrimenti fai quest'altro".
4. Array: Un Array è come una scatola con molti scomparti in cui puoi mettere le cose. Puoi mettere diversi tipi di dati all'interno di un array, come numeri, stringhe o anche altri array. Puoi accedere agli elementi dell'array utilizzando un numero che rappresenta la loro posizione.
5. Oggetti (Objects): Gli oggetti sono come delle scatole speciali che possono contenere molte informazioni diverse, organizzate come coppie chiave-valore. Ad esempio, se hai un oggetto "persona", puoi avere una chiave "nome" con il valore "Mario" e una chiave "età" con il valore 10. Puoi accedere alle informazioni all'interno dell'oggetto utilizzando il nome della chiave.
6. Null: Null è un valore speciale che indica l'assenza di un valore. E' come dire "non cè niente qui". Puoi assegnare null a una variabile per indicare che al momento non ha valore significativo.
7.Undefined: Undefined indica che una variabile è stata dichiarata ma non ha un valore assegnato. E' come dire "non so cosa cè qui". Quando una variabile è undefined, significa che non è stato ancora messo nulla al suo interno.*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/* Un oggetto in JavaScript è come un contenitore che può avere diverse proprietà. Ogni proprietà è un'informazione con un nome specifico con un nome specifico e un valore associato. E' come avere un elenco di cose, dove ogni cosa ha un nome e una caratteristica. Ad esempio, potresti avere un oggetto chiamato "persona" con le proprietà "nome" e "età", dove il nome potrebbe essere "Maria" e l'età potrebbe essere 25. L'oggetto ti permette di organizzare e accedere facilmente alle informazioni in modo strutturato. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;

let numero2 = 20;

let Risultato = numero1 + numero2;

console.log(Risultato);



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Brian";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    let risultato = 4 - x;

    console.log(risultato);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "jhon";
let name2 = "Jhon";

console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
