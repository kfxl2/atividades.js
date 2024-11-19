//definindo a costatante  phrase 
const phrase = "javascript is fun"

//mostra cada letra da const phrase
for(let i = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
}

//contador de uma letra especifica que foi definida na questão letra (a)
let counter = 0;
for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === 'a') {
        counter++;
    }
}

console.log(counter)

//utilizando o while para contar de 1 a 10 no console 
let num = 1;
while (num <= 10) {
  console.log(num);
  num++; 
}



