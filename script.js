var url = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';
let input = document.querySelector("input");
let button = document.querySelector("button");
let img = document.querySelector(".qr");


button.addEventListener("click", () => {
    let data = input.value;
    let qrname = url + data;
    img.innerHTML = `<img src="${qrname}" alt="notFound" >`;
});
