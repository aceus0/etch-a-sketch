


const container = document.querySelector("#container");

    let i = 0
    while (i < 256) {
    const pixel = document.createElement("div");
    pixel.style.backgroundColor = "white";
    pixel.style.height = "32px";
    pixel.style.width = "32px";
    pixel.setAttribute("id", "pixel");
 
    container.appendChild(pixel);
    i++
    }

const highlightPixel = (e) => {
    target.style.backgroundColor = "black"
}

const pixels = document.querySelectorAll("#pixel");
console.log(pixels);

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black';
    })
});

const clearButton = document.querySelector("#clear")

clearButton.addEventListener(`click`, () => {
    pixels.style.backgroundColor = 'white';
})