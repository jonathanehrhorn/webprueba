
//FUNCION CON PARAMETROS
function sayForName(name){
    console.log('Hola ' + name);
}//No es una buena práctica

function sayForAge(age){
    console.log('Tenés ' + age);
}//No es una buena ipráctica

function say(action, name, age){
    if(action === 'in'){
        console.log('Hola mundo');
        console.log('Hola ' + name);
        console.log('Tenés ' + age);
    }else if(action === 'out'){
        console.log('Chau mundo');
        console.log('Chau ' + name);
        console.log('Recordá que tenés ' + age);
    }else{
        console.log('Hola mundo');
        console.log('Hola ' + name);
        console.log('Tenés ' + age);
    }
}

//say('in', 'Leo', 42);
//say('out', 'Leo', 42);
//say('outt', 'Leo', 42);

/* RECORRER CON BUCLES */
var header = ['Portfolio','Inicio','Sección 1','Sección 2','Sección 3','Buscar'];
console.log(header[0]);
console.log(header[1]);
console.log(header[2]);
console.log(header[3]);
console.log(header[4]);
console.log(header[5]);

/* for(contador definido como variable; controlar las vueltas o iteración; incrementar el contador en cada pasada) */
for(var i=0; i < 10; i++){
    console.log(i);
}

for(var i=0; i < header.length; i++){
    //console.log(i);
    console.log(header[i]);
}
/* /RECORRER CON BUCLES */

/* JSON */
