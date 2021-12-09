function card(objeto) {
  const card = document.querySelector(".servicios__template");
  const titleCardEl = card.content.querySelector(".servicios__secondary-title");
  const parrafoEl = card.content.querySelector(".servicios__parrafo");
  const imgEl = card.content.querySelector(".servicios__img");
  const servContainerEl = document.querySelector(".container__servicios--flex");
  titleCardEl.textContent = objeto.titleCardEl;
  parrafoEl.textContent = objeto.parrafoEl;
  imgEl.src = objeto.imgEl;
  const clone = document.importNode(card.content, true);
  servContainerEl.appendChild(clone);
}

function mostrarContentfull(promesa) {
  console.log(promesa);
  //filtrar el content type con servicios
  const serviciosItems = promesa.items.filter((r) => {
    return r.sys.contentType.sys.id == "servicios";
  });
  //const serviciosAsset
  for (const value of serviciosItems) {
    const objeto = {
      imgEl: value.fields.img.sys.id,
      parrafoEl: value.fields.descripcionDeLaFoto.content[0].content[0].value,
      titleCardEl: value.fields.titulo,
    };

    const Asset = promesa.includes.Asset.find((e) => {
      return e.sys.id == objeto.imgEl;
    });
    objeto.imgEl = Asset.fields.file.url;
    console.log(Asset, objeto.imgEl);
    card(objeto);
  }
}

function main() {
  const header = document.querySelector(".header-servicios");
  compHeader(header);
  const footer = document.querySelector(".footer");
  compFooter(footer);
  fetch(
    "https://cdn.contentful.com/spaces/3cgv5ah11279/environments/master/entries?access_token=VCC3Izoh3oTBAMXBOP2LSCVryAq8JwJQgwczmtAvtWo"
  )
    .then((response) => response.json())
    .then((data) => mostrarContentfull(data));
}
main();
