const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomScroll: false
} //para colocar o map fixado
// mapa de > https://leafletjs.com/
const map = L.map('mapid', options).setView([-27.2174246, -49.6502464], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="public/images/arrow-white.svg" </a>')

L.marker([-27.2174246, -49.6502464], { icon }).addTo(map)
// para as imagens iniciais da pagina

function selectImage(event) {
    const button = event.currentTarget;
    //função para remover a class "active"
    //e selecionar a imagem clicada e atualizar o container de imagem grande a cima
    //e colocar a class active no botão clicado
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActionClass);
    function removeActionClass(button) {
        button.classList.remove("active");
    }
    /* buttons.forEach((button) => {
         button.classList.remove("active");
    });   */   //ou assim com arrow function
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img"); //selecionando a imagem pai a inicial grande
    imageContainer.src = image.src; //mudando ela para a 'image' selecionada antes
    button.classList.add("active");

}