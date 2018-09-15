/* En este archivo debe agregar las clases JS que considere necesarias para la realización de las pruebas de páginas Estáticas */
(function($) {
    
    $.fn.bmdIframe = function( options ) {
        var self = this;
        
        var settings = $.extend({
            classBtn: '.bmd-modalButton',
            defaultW: 740,
            defaultH: 460
        }, options);
      
        $(settings.classBtn).on('click', function(e) {
          var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false;
          
          var website = {
            'src': $(this).attr('href'),
            'height': $(this).attr('data-bmdHeight') || settings.defaultH,
            'width': $(this).attr('data-bmdWidth') || settings.defaultW
          };
          
          if ( allowFullscreen ) website.allowfullscreen = "";
          
          $(self).find("iframe").attr(website);
        });
      
        this.on('hidden.bs.modal', function(){
          $(this).find('iframe').html("").attr("src", "");
        });
      
        return this;
    };


    // formulario script
   
    $('#btnValidar').click(function() {

    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    var nombre = $('#form_name').val();
    var apellidos = $('#form_lastname').val();
    var phone = $('#form_phone').val();
    var email = $('#form_email').val();
    var interes = $('#form_interes').val();
    var observacion = $('#form_message').val();

    
    if (regex.test($('#form_email').val().trim()) && $('#form_name').val().length > 0) {
        alert('Nombre :'+ nombre + " \n Apellidos:" +apellidos +" \n Telefono: " +phone+ "\n Email: " +email+ 
              "\n Interes:" +interes + "\n Observaciones: "+observacion);

        $('.alert').remove();
      
        var mensaje= ' <div class="alert alert-success alert-dismissible  col-md-12"> '+ 
                       ' <a href="#" class="close" data-dismiss="alert">&times;</a>' +
                       ' <strong>Success!</strong> Su mensaje ha sido enviado. '+
                    ' </div>'

      $('#alert_id').append(mensaje);
          
    } else {
        alert('La direccón de correo no es válida');

        $('.alert').remove();
      
        var mensaje= ' <div class="alert alert-danger alert-dismissible col-md-12"> '+ 
                       ' <a href="#" class="close" data-dismiss="alert">&times;</a>' +
                       ' <strong>Error!</strong> Revisar campos obligatorios". '+
                    ' </div>'

      $('#alert_id').append(mensaje);
    }

      Limpiar();
  });

    function Limpiar(){

    $('#form_name').val("");
    $('#form_lastname').val("");
    $('#form_phone').val("");
    $('#form_email').val("");
    $('#form_interes').val("");
    $('#form_message').val("");
  }

})(jQuery);


jQuery(document).ready(function(){
  jQuery("#myModal").bmdIframe();
});
