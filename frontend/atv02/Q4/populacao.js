let popA = 80000;
let taxaA = 0.03;
let popB = 200000;
let taxaB = 0.015;
let anos = 0;

while (popA < popB) {
  anos++;
  popA *= (1 + taxaA);
  popB *= (1 + taxaB);
}

document.write(`Serão necessários ${anos} anos para 
que a população do país A ultrapasse ou iguale a população do país B.`);
