//show speech bubble when speech section is clicked
document.getElementById("speech").onclick = () => {
    document.getElementById("speech-bubble").classList.toggle("show");
};

//show beverage choice when selection changes
document.getElementById("beverage-select").onchange = (e) => {
    const beverage = e.target.value;

    document.getElementById("beverage-message").innerHTML =
        beverage + ": Nice Choice!";
};

//add sticker when sun is clicked
document.getElementById("sun").onclick = () => {
    document.getElementById("emoji").classList.add("show-sticker");
};