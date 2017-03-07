$(document).ready(function(){

	$('#boton_inicial').click(function(){

		$('#kapta_logo').animate({
                'top':'100px'
        });

        $('#e527824a-7403-41b4-8cd6-647f2ba74a03').animate({
                'width':'400px',
                'margin-left': '-200px'
        });

        $('#verde_linea').animate({
                'height':'136px',
        });

         $('#blanco_principal').animate({
                'height':'130px',
        });
	});

	$('#a8c2dd7f-8611-4769-836a-1fb5b594e751').click(function() {
          window.location.href = 'que_hacemos.html';
          return false;
    });

    $('#e7478fc2-961b-4c7e-846a-62eb4e828f17').click(function() {
          window.location.href = 'que_hacemos.html';
          return false;
    });

     $('#r149dc5a1-b4d2-4c44-86d9-443f9cd01736').click(function() {
          window.location.href = 'organigrama.html';
          return false;
    });

    $('#ca37691c-9ff5-4bd4-9e9a-1755cffccb73').click(function() {
          window.location.href = 'donde_estamos.html';
          return false;
    });

     $('#c5c3294f9-1074-41e0-b423-a8d3273e98b3').click(function() {
          window.location.href = 'que_hacemos.html';
          return false;
    });

      $('#r0eb7e773-fc3e-4949-8953-782bfabb795a').click(function() {
          window.location.href = 'organigrama.html';
          return false;
    });


      $('#c37b6138e-dc43-47ea-bc45-3336c7919ba4').click(function() {
          window.location.href = 'formacion.html';
          return false;
    });

       $('#r0d309cda-cbaf-4e11-8ab7-0d0982e800ec').click(function() {
          window.location.href = 'g_recursohumano.html';
          return false;
    });

       $('#v5ce32114-8adb-419e-a131-9e162cd8de1a').click(function() {
          window.location.href = 'consultoria.html';
          return false;
    });

        $('#t4fcb25d6-981a-4545-834d-714b8e0a670b').click(function() {
          window.location.href = 'auditoria.html';
          return false;
    });

/* -----------------------------*/


       $('#b0d309cda-cbaf-4e11-8ab7-0d0982e800ec').click(function() {
          window.location.href = 'g_recursohumano.html';
          return false;
    });

       $('#e5ce32114-8adb-419e-a131-9e162cd8de1a').click(function() {
          window.location.href = 'consultoria.html';
          return false;
    });

        $('#t4fcb25d6-981a-4545-834d-714b8e0a670b').click(function() {
          window.location.href = 'auditoria.html';
          return false;
    });

/* Interaccion Menu Servicios */

 $('#a229c37a-e622-45fd-ae11-355b51631517').click(function() {
          window.location.href = 'g_recursohumano.html';
          return false;
    });

 $('#f37c31b8-9a3e-4925-86ee-71c462ad0d98').click(function() {
          window.location.href = 'consultoria.html';
          return false;
    });

  $('#t45477d4b-6bef-4b6f-aea9-1fbc5f1155a3').click(function() {
          window.location.href = 'auditoria.html';
          return false;
    });



/* Interacción Mini Menu GR Humano */

$('#f8c55e66d-ae6f-497a-a55a-9d4b97e818b3').click(function() {
          window.location.href = 'formacion.html';
          return false;
    });

$('#h1b9782ad-3c2c-4254-bc69-54ef82be10a9').click(function() {
      window.location.href = 'consultoria.html';
      return false;
});

$('#d7b692d3-41d3-4974-8784-39564eb58448').click(function() {
      window.location.href = 'auditoria.html';
      return false;
});

/* Interacción Mini Menu Consultoria */

$('#f1f75059-1dca-4726-a78e-b2ffb6a52975').click(function() {
          window.location.href = 'formacion.html';
          return false;
    });

$('#ace83217-c92f-42fa-b7e3-ec2be3149b8b').click(function() {
      window.location.href = 'g_recursohumano.html';
      return false;
});

$('#b92f58f54-a31f-4fae-99f5-916d437a53da').click(function() {
      window.location.href = 'auditoria.html';
      return false;
});

/* Interacción Mini Menu Auditoria */

$('#v1e559065-77e1-4af1-8e60-b6f9b2d328e2').click(function() {
          window.location.href = 'formacion.html';
          return false;
    });

$('#db199414-47fa-4b3e-9c22-bfea2b31ad41').click(function() {
      window.location.href = 'g_recursohumano.html';
      return false;
});

$('#u93335a35-cae9-436d-814b-58e8c90e7b3c').click(function() {
      window.location.href = 'consultoria.html';
      return false;
});

      

/* Interaccion Mapa */

$("#fcf74d56-082f-4f04-a63a-06ad99bd82d9").click(function () { //Rojo
      $("#aae83dd7-f251-49d3-881d-6a811140e0ce").each(function() { //Norteamerica
        displaying = $(this).css("display");
        $("#mapaa").animate({'margin-left':'-600px'});
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
            $("#mapaa").animate({'margin-left':'-300px'});
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");


            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").css("display","none",function() { //CentroAmerica
            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").fadeOut('slow');
            });

            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").fadeOut('slow',function() { // Caribe
            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").css("display","none");
            });

            $("#c7cc4d226-2432-4a82-9284-243566098bf6").fadeOut('slow',function() { //Suramerica
            $("#c7cc4d226-2432-4a82-9284-243566098bf6").css("display","none");
            });

            $("#v4dbc237b-1145-483c-9418-c6f525c052af").fadeOut('slow',function() { //Europa
            $("#v4dbc237b-1145-483c-9418-c6f525c052af").css("display","none");
            });

            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").fadeOut('slow',function() { //Medioriente
            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").css("display","none");
            });

          });
        }
      });
    });
   //-------------------------------
   $("#v098324a3-6fac-474e-b117-df28773a8a25").click(function () { // Morado
      $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").each(function() { //CentroAmerica
        displaying = $(this).css("display");
        $("#mapaa").animate({'margin-left':'-600px'});
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
            $("#mapaa").animate({'margin-left':'-300px'});
            $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");

            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").fadeOut('slow',function() { // Norteamerica
            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").css("display","none");
            });

            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").fadeOut('slow',function() { // Caribe
            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").css("display","none");
            });

             $("#c7cc4d226-2432-4a82-9284-243566098bf6").fadeOut('slow',function() { //Suramerica
            $("#c7cc4d226-2432-4a82-9284-243566098bf6").css("display","none");
            });

             $("#v4dbc237b-1145-483c-9418-c6f525c052af").fadeOut('slow',function() { //Europa
            $("#v4dbc237b-1145-483c-9418-c6f525c052af").css("display","none");
            });

             $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").fadeOut('slow',function() { //Medioriente
            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").css("display","none");
            });
          });
        }
      });
    });
//-------------------------------
$("#cdaff5aa-0696-412a-ac8c-038fe2736a73").click(function () { //Naranja
      $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").each(function() { // Caribe
        displaying = $(this).css("display");
        $("#mapaa").animate({'margin-left':'-600px'});
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
            $("#mapaa").animate({'margin-left':'-300px'});
            $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");

            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").fadeOut('slow',function() { //Norteamerica
            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").css("display","none");
            });

            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").fadeOut('slow',function() { //Centroamerica
            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").css("display","none");
            });

            $("#c7cc4d226-2432-4a82-9284-243566098bf6").fadeOut('slow',function() { //Suramerica
            $("#c7cc4d226-2432-4a82-9284-243566098bf6").css("display","none");
            });

            $("#v4dbc237b-1145-483c-9418-c6f525c052af").fadeOut('slow',function() { //Europa
            $("#v4dbc237b-1145-483c-9418-c6f525c052af").css("display","none");
            });

            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").fadeOut('slow',function() { //Medioriente
            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").css("display","none");
            });

          });
        }
      });
    });
//-------------------------------
  $("#ad66f467-a0af-46ea-bd88-8ae7862f4d1a").click(function () { //Verde
      $("#c7cc4d226-2432-4a82-9284-243566098bf6").each(function() { // Suramerica
        displaying = $(this).css("display");
        $("#mapaa").animate({'margin-left':'-600px'});
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
            $("#mapaa").animate({'margin-left':'-300px'});
            $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");

            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").fadeOut('slow',function() { //Norteamerica
            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").css("display","none");
            });

            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").fadeOut('slow',function() { //Centroamerica
            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").css("display","none");
            });

            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").fadeOut('slow',function() { //Caribe
            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").css("display","none");
            });

            $("#v4dbc237b-1145-483c-9418-c6f525c052af").fadeOut('slow',function() { //Europa
            $("#v4dbc237b-1145-483c-9418-c6f525c052af").css("display","none");
            });

            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").fadeOut('slow',function() { //Medioriente
            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").css("display","none");
            });
        });
      }
    });
  });
//-------------------------------
 $("#y12a21af9-86a9-48af-9694-dbccfe6ca728").click(function () { //azul
      $("#v4dbc237b-1145-483c-9418-c6f525c052af").each(function() { // europa
        displaying = $(this).css("display");
        $("#mapaa").animate({'margin-left':'-600px'});
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
            $("#mapaa").animate({'margin-left':'-300px'});
            $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");

            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").fadeOut('slow',function() { //Norteamerica
            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").css("display","none");
            });

            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").fadeOut('slow',function() { //Centroamerica
            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").css("display","none");
            });

            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").fadeOut('slow',function() { //Caribe
            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").css("display","none");
            });

            $("#c7cc4d226-2432-4a82-9284-243566098bf6").fadeOut('slow',function() { //Suramerica
            $("#c7cc4d226-2432-4a82-9284-243566098bf6").css("display","none");
            });

            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").fadeOut('slow',function() { //Medioriente
            $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").css("display","none");
            });
        });
      }
    });
  });
  //-------------------------------
  $("#b53b07599-4885-4eed-b7bf-789cd1a1159f").click(function () { //azul
      $("#r3d79baf5-a5df-4031-9680-5aa321bd85d5").each(function() { // medioOriente
        displaying = $(this).css("display");
        $("#mapaa").animate({'margin-left':'-600px'});
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
            $("#mapaa").animate({'margin-left':'-300px'});
            $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");

            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").fadeOut('slow',function() { //Norteamerica
            $("#aae83dd7-f251-49d3-881d-6a811140e0ce").css("display","none");
            });

            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").fadeOut('slow',function() { //Centroamerica
            $("#b213fc6c9-fdb5-4e91-8b6b-c6faf8e6b136").css("display","none");
            });

            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").fadeOut('slow',function() { //Caribe
            $("#u6b9d26ec-7d25-4a27-8b9f-837926be1feb").css("display","none");
            });

            $("#c7cc4d226-2432-4a82-9284-243566098bf6").fadeOut('slow',function() { //Suramerica
            $("#c7cc4d226-2432-4a82-9284-243566098bf6").css("display","none");
            });

            $("#v4dbc237b-1145-483c-9418-c6f525c052af").fadeOut('slow',function() { //Europa
            $("#v4dbc237b-1145-483c-9418-c6f525c052af").css("display","none");
            });
        });
      }
    });
  });

/* Codigo Full Page */ 
  $('#fullpage').fullpage({
              menu: '#mini_menu',
              verticalCentered: true,
              anchors: ['firstPage', 'secondPage', '3rdPage'],
              sectionsColor: ['#FFFFF', '#333333', '#333333'],
              navigation: false,
              navigationPosition: 'left',
              navigationTooltips: ['KAPTA', 'Nuestra Escencia', 'Contactenos'],
              css3:true,
            });
    

});