function validarForma(forma){
    console.log("");
    console.log ("validando la forma")
    return false;
    var usuario = forma.usuario;
    conosle.log("el usuario es" + usuario.value);
    if(usuario.value == "" || usuario.value == "Escribir usuario"){
      alert("Debe proporcionar un nombre de usuario");
      usuario.focus();
      usuario.select(); 
      return false;
    }
  
     var tecnologias = forma.tecnologia;
     var checkSeleccionado = false;
  
     for (i = 0; i< tecnologias.length; i++){
         if (tecnologias[i].checked) {
             checkSeleccionado = true;
         }
     }
     if (!checkSeleccionado){
         alert("Debe proporcinar una tecnologia");
         return false;
     }
     
     alert("Formulario valido, enviando datos...");
     return true;
    }