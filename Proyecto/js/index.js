function validateForm()
{
    var hasuppercase = false;
    let forms = document.forms["login"];
    if (forms["user"].value == "")
    {
        alert("Debe ingresar un usuario");
        return false;
    }
    if (forms["pswd"].value.length < 8)
    {
        alert("La contraseña debe ser mayor que 8 digitos");
        return false;
    }

    if (forms["pswd"].value == "")
    {
        alert("Debe ingresar una contraseña");
        return false;
    }

    // for (var i = 0; i < forms["user"].value.length - 1; i++ )
    // {
    //     var chr = forms["user"].value.charAt(i);   
    //     if (chr == character.toUpperCase())
    //     {
    //         alert("La contraseña debe tener Mayusculas.")
    //         hasuppercase = true;
    //     }
    // } 

    // if (!hasuppercase)
    // {
    //     alert("Debe contener mayusculas.");
    //     return false;
    // }

    if (/A-Z/.test(forms["pswd"].value))
    {
        alert("Funca")
        return false;
    }
    
    alert("Inicio de sesion exitoso");
    
}

