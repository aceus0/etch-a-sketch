

function addBoxes(numBoxes) {
    
    const container = document.querySelector("#container");
    const containerSize = 512;

    const boxesPerRow = Math.floor(Math.sqrt(numBoxes));
    const boxSize = Math.floor((containerSize / boxesPerRow) - 0.1);

    let i = 0
    while (i < numBoxes) {
        const pixel = document.createElement("div");
        pixel.style.backgroundColor = "white";
        pixel.setAttribute("id", "pixel");
        pixel.style.width =`${boxSize}px`
        pixel.style.height = `${boxSize}px`
        container.appendChild(pixel);
        i++
    }
}

addBoxes();

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




