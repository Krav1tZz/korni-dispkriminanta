let a = prompt('a: ');
let b = prompt('b: ');
let c = prompt("c: ");

if(a == 0) {
    alert("nav kvadratvienadojums");
}

let D = b*b-4*a*c;

if( D == 0){
    
    alert( ( -b + Math.sqrt(D) ) / ( 2*a ) );
}

else if (D < 0) {
    alert("nav saknes");
}

else {
    alert( ( -b + Math.sqrt(D) ) / ( 2*a ) );
    alert( ( -b - Math.sqrt(D) ) / ( 2*a ) );
}
