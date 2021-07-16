const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    localStorage.setItem("dataUser",JSON.stringify({"name": name, "email": email}));

    setTimeout(() => {
        form.innerHTML = "<p>Prontinho!<br />Agora é verificar nosso e-mail de confirmação na sua caixa de entrada.</p>";
    }, 1500);
    
});