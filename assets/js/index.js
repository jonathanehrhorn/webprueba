
/* TEXTO ESPAÑOL HEADER */
  var txtHeader = ['Portfolio','Inicio','Sección 1','Sección 2','Sección 3','Buscar'];
console.log('length: ' + txtHeader.length);
var test=["a","b"];

$(".num0").html(txtHeader[0]);
$(".num1").html(txtHeader[1]);

/* RECORRER CON BUCLES */
for(var i=0; i < txtHeader.length; i++){
    console.log(txtHeader[i]);
}
/* /RECORRER CON BUCLES */

$("#sec1").html(txtHeader[2]);
$("#sec2").html(txtHeader[3]);
$("#sec3").html(txtHeader[4]);
$("#sec4").html(txtHeader[5]);
/* /TEXTO ESPAÑOL HEADER */

/* TEXTO ESPAÑOL BANNERS */
var banner1 = ["Colocar imagen.","Some representative placeholder content for the first slide of the carousel.","Sign up today"];
$("#txt1").html(banner1[0]);
$("#txt1-1").html(banner1[1]);
$("#txt1-2").html(banner1[2]);
/* /TEXTO ESPAÑOL BANNERS */

/* TEXTO ESPAÑOL BANNERS */
var banner2 = ["Another example headline.","Some representative placeholder content for the second slide of the carousel.","Learn more"];
$("#txt2").html(banner2[0]);
$("#txt2-1").html(banner2[1]);
$("#txt2-2").html(banner2[2]);
/* TEXTO ESPAÑOL BANNERS */

/* TEXTO ESPAÑOL BANNERS */
var banner3 = ["One more for good measure.","Some representative placeholder content for the third slide of this carousel.","Browse gallery"];
$("#txt3").html(banner3[0]);
$("#txt3-1").html(banner3[1]);
$("#txt3-2").html(banner3[2]);
/* TEXTO ESPAÑOL BANNERS */

//Escribir por consola, CONCATENANDO texto y variable.
console.log('Hola ' + name + ', se que tenés ' + age + ' años de edad.');

//Función que recibe dos parámetros, nombre y edad.
function sayHello(name,age){
    
    //Obtengo el valor del input search.
    console.log(document.getElementById('search').value);//Javascript
    console.log($("#search").val());//Jquery

    $("#txt-1").html($("#search").val());

    //Concateno los parámetros recibidos con texto.
    console.log('Hola ' + name + ', se que tenés ' + age + ' años de edad.');
}

//Función básica sin parámetros.
function nameFunction(){
    console.log('Hola');
}

//Ejecuto la función al cargar la página.
nameFunction();

/* JQUERY */
function ocultarFooter(){
    $("#footer").hide();
}

function mostrarFooter(){
    $("#footer").show();
}