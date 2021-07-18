const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let news = document.querySelector("#subscribe-news").checked;

    if (name == "" || email == "") alert("Antes de se inscrever é necessário preencher nome e e-mail.")
    else {
        localStorage.setItem("dataUser", JSON.stringify({ "name": name, "email": email, "subscribe-news": news }));

        setTimeout(() => {
            let formContainer = document.querySelector(".form-container");
            formContainer.innerHTML = "<p>Prontinho!<br />Agora é verificar nosso e-mail de confirmação na sua caixa de entrada.</p>";
        }, 1500);
    }

});