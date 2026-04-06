console.log(Math);

//properties
console.log(Math.PI);
console.log(Math.E);

//meathods
console.log(Math.abs(-10));
console.log(Math.pow(10, (1/3)));
console.log(Math.floor(65.97));
console.log(Math.floor(-5.19));
console.log(Math.ceil(65.16));
console.log(Math.random()); // Range - [0,1) | 0 - inclusive, 1 - exclusive

//generate random int from 1 to 10 
console.log(Math.floor(Math.random()*10) + 1);
//we do NOT use Math.ciel because there is an extremely small chance that random number generated is exactly 0 which will make the range (0,10)

