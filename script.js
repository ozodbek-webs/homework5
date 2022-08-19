

let input=document.querySelector('#input');
let result1=document.querySelector('#resultpiyo');
let result2=document.querySelector('#resultvelo');
let result3=document.querySelector('#resultavto');
let result4=document.querySelector('#resultair');
let button=document.querySelector('#button');


let piyoda=3.6;
let bike=20.1;
let car=70;
let airplane=800;


function olcha(){

     let w=input.value*1/piyoda;
     let g=input.value*1/bike;
     let h=input.value*1/car;
     let z=input.value*1/airplane;
     
     result1.textContent = `${w.toFixed(3)} soat vaqt ketadi`
     result2.textContent = `${g.toFixed(3)} soat vaqt ketadi `
     result3.textContent = `${h.toFixed(3)} soat vaqt ketadi `
     result4.textContent = `${z.toFixed(3)} soat vaqt ketadi `    
}