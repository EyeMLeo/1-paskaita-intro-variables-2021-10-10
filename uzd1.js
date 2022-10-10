'use strict';

// susikurti kintamuosius vardas, salis, megstamiausiasSkaicius, megstamiausia savaites diena (skaiciais 1-7)

// isvedam i konsole visus savo kintamiuosiu atskirai

// atspausdinam konsoleje savo megstamiausio skaiciau ir dienos daugyba

// atspausdinam konsoleje savo megstamiausio skaiciau is dienos sudeti




let vardas = 'Leonid'
console.log(vardas);

let salis = 'Lietuva'
console.log(salis);

let skaicius = 7;
console.log(skaicius);

let savaitesDiena = 6;
console.log(savaitesDiena);

console.log(skaicius*savaitesDiena);
console.log(skaicius+savaitesDiena);
// atspausdinam konsoleje naudodami kintamuosius "as esu John. noreciau keliausi i Jamaika. Mano megstamiausias skaicius yra 777"
let sakinys = `As esu ${vardas}. Noreciau keliauti i ${salis}. Mano megstamiausias skaicius ${skaicius}.`;
console.log(sakinys);


const resultEl = document.getElementById('result');
resultEl.textContent = sakinys;



// 6. sukurti 4 skaicius kintamuosius

let sk1 = 5;
console.log(sk1);
let sk2 = 1;
console.log(sk2);
let sk3 = 10;
console.log(sk3);
let sk4 = 7;
console.log(sk4);

// 7. apskaiciuoti ju vidurki ir priskirti kintamajam avg


let avg=(sk1 + sk2 + sk3 + sk4)/4
console.log(avg);