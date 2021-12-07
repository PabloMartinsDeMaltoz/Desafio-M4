function coompContact(container) {
  const contact = document.createElement("div");
  contact.innerHTML = `<div class="container-form">
      <h2 class="form__title">Escribime</h2>
      <form class="form">
        <label class="form__label">
          <div>NOMBRE</div>
          <input name="nombre" class="form__input" type="text" />
        </label>

        <label class="form__label">
          <div>EMAIL</div>
          <input name="email" class="form__input type="email" />
        </label>
        <label class="form__label">
          <div>Mensaje</div>
          <textarea
            class="form__label-text-area"
            name="Mensaje"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </label>
        <div class="form__container-button">
          <button class="form__button" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  `;
  container.appendChild(contact);
  console.log(contact);
  const formEl = document.querySelector(".form");
  const buttoEl = document.querySelector(".form__button");
  console.log(formEl);

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const value = Object.fromEntries(formData.entries());
    buttoEl.style = "border: 2px solid white;";
    buttoEl.textContent = "Enviado";
    const data = {
      to: "martins2020@live.com",
      message: `email de contacto: ${value.email}  contacto:${value.nombre} mensaje:${value.Mensaje} `,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response, data));
  });
}
