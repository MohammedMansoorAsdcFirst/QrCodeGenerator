let input = document.querySelector('#qr-text')
let sizes = document.querySelector('#sizes')
let qrBody = document.querySelector('.qr-body')
let generate = document.querySelector('#generate')
let download = document.querySelector('#download')

let size = sizes.value

sizes.addEventListener('change', (e) => {
    size = e.target.value
    isEmpty()
})

function generateQRCode() {
    qrBody.innerHTML = "";
    new QRCode(qrBody, {
        text: input.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

function isEmpty() {
    input.value.length > 0 ? generateQRCode() : alert('Please Enter a Text or URl to Generate a QR Code!')
}

generate.addEventListener('click', (e) => {
    e.preventDefault()
    isEmpty()
})

download.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img')
    let canvas = document.querySelector('canvas')

    if (img !== null) {
        let imgAtt = img.getAttribute('src')
        download.setAttribute('href', imgAtt)
    } else {
        download.setAttribute('href', `${canvas.toDataURL()}`)
    }
})