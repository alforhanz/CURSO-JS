function sumando(){        
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;        
        
        // Verificar si los valores son nulos o vacíos
        if (num1 === "" || num2 === "") {
            Swal.fire({
                title: "Error",
                text: "Por favor, ingrese valores válidos en ambos campos.",
                icon: "error"
            });
            return; // Salir de la función si uno de los valores es nulo o vacío
        }

        let resultado = parseFloat(num1) + parseFloat(num2);

        if (isNaN(resultado)) {
            Swal.fire({
                title: "Resultado es?",
                //text: "El resultado es: "+resultado,
                text: "El resultado es: Null ",
                icon: "info"
            });
        }else{
            Swal.fire({
                title: "Resultado = "+resultado,
                //text: "El resultado es: "+resultado,
                // text: "El resultado es: "+resultado,
                icon: "info"
            });
        }        
}

