const FormContac = document.querySelector("#contact")

FormContac.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#name-contact").value;
    const email = document.querySelector("#email-contact").value;
    const textarea = document.querySelector("#textarea-contact").value;
    const errorContact = document.querySelector(".error-contact")

    errorContact.innerHTML = "";
    if (nombre === "" || email === "" || textarea === "") {
        errorContact.innerHTML = "Debes ingresar un nombre, email y comentario";
        errorContact.style.display = "block";
        errorContact.style.padding = "8px";
        errorContact.style.marginTop = "0px";
        errorContact.style.color = "white";
        errorContact.style.borderRadius = "10px";
        errorContact.style.backgroundColor = "red";
        return;
    } else {
        emailjs.sendForm('service_jlwx85h', 'template_9yfuc4d', '#contact')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "El comentario fue enviado exitosamente",
                    showConfirmButton: false,
                    timer: 2500,
                });
            }, function (error) {
                console.log('FAILED...', error);
            });
        document.querySelector("#contact").reset();
        document.querySelector("#name-contact").focus();
        return;
    };
});