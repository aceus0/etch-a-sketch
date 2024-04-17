


const container = document.querySelector("#container")

    let i = 0
    while (i < 512) {
    const pixel = document.createElement("div");
    pixel.style.backgroundColor = "white";
    pixel.style.height = "32px";
    pixel.style.width = "32px";

    container.appendChild(pixel);
    i++
    }