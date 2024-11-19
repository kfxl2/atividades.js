// criando vareavel 
let x = 100;

function testScope(){
    let x = 50; // nova vareavel
    console.log(x);
}    
function testScope() {
    let x = 50; 
    console.log(x);
  
    if (true) {
      let x = 30; 
      console.log("Valor de x dentro do bloco if:", x);
    }
}


testScope(); // chamando a função 

console.log("Valor de x total:", x); 


