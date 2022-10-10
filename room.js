// sukurti nauja faila room.js. Jame susikurti 3 kintamuosius kambario auksciui, plociui ir gyliui. 
//panaudojant kintamuosius isvesti kambario turi, sienu plota, grindu plota, perimetra.

let x = 7
let xFull = `Ilgis ${x}`;
console.log(xFull);
let y = 10
let yFull = `plotis ${y}`;
console.log(yFull);
let z = 15;
let zFull = `aukstis ${z}`;
console.log(zFull);

// kambario turi, sienu plota, grindu plota, perimetra.
let turis = x*y*z;
let plotas = x*y;
let perimetras = (x+y)*2;
let sienuPlotas = (x+y)*z;

console.log(turis);
console.log(plotas);
console.log(perimetras);
console.log(sienuPlotas);

// atspausdinti konsoleje: jusu kambario plotas yra xxx kai ilgis: xx plotis: xx, aukstis:xx


let xyFull = `jusu kambario plotas yra ${plotas} kai ilgis ${x} plotis ${y}`;
console.log(xyFull);

// extra yra 2 langai 1.5 x 1.5 ir durys 0.8 x 2 reikia atimti ju plotus is bendro.



let sienuPlotasBeLanguIrDuru = `jusu kambario sienu plotas be langu ir duru yra ${plotas-1.5*2-0.8*2}`;
console.log(sienuPlotasBeLanguIrDuru);

// pav1
console.log('typeof labas rytas', typeof 'labas rytas');
console.log('typeof true', typeof true);
console.log('typeof (365/12)', typeof (365/12));
console.log('typeof prompt("Iveskite skaiciu")', typeof prompt);
console.log('typeof window', typeof window);
console.log('typeof console.log', typeof console.log);


let Number=123;
console.log(Number, typeof Number);
let Number1="  123z  ";
console.log(Number1, typeof Number1);
let Number2=true;
console.log(Number2, typeof Number2);
let Number3=false;
console.log(Number3, typeof Number3);
let Number4=undefined;
console.log(Number4, typeof Number4);
let Number5=null;
console.log(Number5, typeof Number5);





