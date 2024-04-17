
function addBoxes(numBoxes) {
    const container = document.querySelector("#container");
    const containerSize = 512; // Container size in pixels
    const boxesPerRow = Math.ceil(Math.sqrt(numBoxes)); // Calculate boxes per row
    const boxSize = containerSize / boxesPerRow; // New box size calculation

    container.innerHTML = ''; // Clear previous boxes if any

    let i = 0;
    while (i < numBoxes) {
        const pixel = document.createElement("div");
        pixel.style.backgroundColor = "white";
        pixel.setAttribute("id", "pixel");
        pixel.style.width = `${boxSize}px`;
        pixel.style.height = `${boxSize}px`;
        pixel.style.flex = `0 0 ${boxSize}px`; // Ensure the box doesn't grow or shrink
        container.appendChild(pixel);
        i++;
    }
}

addBoxes(10000);


const pixels = document.querySelectorAll("#pixel");
console.log(pixels);

pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black';
    })
});




