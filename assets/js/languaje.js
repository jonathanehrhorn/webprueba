
function setLeng(idioma){
    let service = '';
    let url = '/webprueba/data/esp.json'; 
    if(idioma==='esp'){
        $('#lengeng').removeClass('active');
        $('#lengesp').addClass('active');
        service = 'esp';
    }else if(idioma==='eng'){
        url = '/webprueba/data/eng.json';
        $('#lengesp').removeClass('active');
        $('#lengeng').addClass('active');
        service = 'eng';
    }else{
        $('#lengeng').removeClass('active');
        $('#lengesp').addClass('active');
        service = 'esp';
    }
    // Utilizar fetch para obtener el archivo JSON
    
    fetch(url)
    
    .then(response => {
    
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
    
    return response.json(); // Convertir la respuesta a JSON
    
    })
    
    .then(data => {
    
    // Mostrar los datos en el HTML
    
    /* HEADER */
    $("#txt-logo").html(data.header.txtlogo);
    $("#sec1").html(data.header.sec1);
    $("#sec2").html(data.header.sec2);
    $("#sec3").html(data.header.sec3);
    
    /*BANNER 1 */
    $("#car-1").attr("src", data.header.estudios0.img0);
    $("#txt1").html(data.header.estudios0.tex0);
    $("#txt1-1").html(data.header.estudios0.text1);
    $("#txt1-2").html(data.header.estudios0.text_btn);

    /*BANNER 2 */
    $("#car-2").attr("src", data.header.estudios1.img0);
    $("#txt2").html(data.header.estudios1.tex0);
    $("#txt2-1").html(data.header.estudios1.text1);
    $("#txt2-2").html(data.header.estudios1.text_btn);

    /*BANNER 3 */
    $("#car-3").attr("src", data.header.estudios2.img0);
    $("#txt3").html(data.header.estudios2.tex0);
    $("#txt3-1").html(data.header.estudios2.text1);
    $("#txt3-2").html(data.header.estudios2.text_btn);

    /*EXPERIENCIA 1 */
    $("#sec-1-0").attr("src", data.header.experiencia0.img0);
    $("#sec-1-1").html(data.header.experiencia0.tex0);
    $("#sec-1-2").html(data.header.experiencia0.text1);
    $("#sec-1-3").html(data.header.experiencia0.text_btn);

    /*EXPERIENCIA 2 */
    $("#sec-2-0").attr("src", data.header.experiencia1.img0);
    $("#sec-2-1").html(data.header.experiencia1.tex0);
    $("#sec-2-2").html(data.header.experiencia1.text1);
    $("#sec-2-3").html(data.header.experiencia1.text_btn);

    /*EXPERIENCIA 3 */
    $("#sec-3-0").attr("src", data.header.experiencia2.img0);
    $("#sec-3-1").html(data.header.experiencia2.tex0);
    $("#sec-3-2").html(data.header.experiencia2.text1);
    $("#sec-3-3").html(data.header.experiencia2.text_btn);

    /*PORFOLIO 1 */
    $("#img-1-0").attr("src", data.header.portfolio0.img0);
    $("#port-1-0").html(data.header.portfolio0.tex0);
    $("#port-1-1").html(data.header.portfolio0.text1);

    /*PORFOLIO 2 */
    $("#img-2-0").attr("src", data.header.portfolio1.img0);
    $("#port-2-0").html(data.header.portfolio1.tex0);
    $("#port-2-1").html(data.header.portfolio1.text1);

    /*PORFOLIO 3 */
    $("#img-3-0").attr("src", data.header.portfolio2.img0);
    $("#port-3-0").html(data.header.portfolio2.tex0);
    $("#port-3-1").html(data.header.portfolio2.text1);

    $("#txtfooter").html(data.header.footer.txt0 +' <a href="#">'+data.header.footer.txt2 +'</a> &middot; <a href="#">'+data.header.footer.txt3 +'</a>');

    })

    .catch(error => {

        console.error('Error al consumir el archivo JSON:', error);

    });
}

setLeng('esp');