setFontSize()

function setFontSize() {
    let width = document.documentElement.clientWidth || document.body.clientWidth
    document.querySelector('html').style.fontSize = width / 3.75 + "px"
}
document.body.onresize = function () {
    setFontSize()
}