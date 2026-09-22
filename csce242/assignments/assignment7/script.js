const cars = document.getElementById("cars");

const colors = [
    "red",
    "blue",
    "purple",
    "orange",
    "pink",
    "lightgreen"
];

const addCar = (left, top, color) => {
    const car = document.createElement("div");
    car.classList.add("car");

    car.style.left = left + "%";
    car.style.top = top + "px";
    car.style.background = color;

    const carTop = document.createElement("div");
    carTop.classList.add("car-top");

    const leftWheel = document.createElement("div");
    leftWheel.classList.add("wheel");
    leftWheel.classList.add("left-wheel");

    const rightWheel = document.createElement("div");
    rightWheel.classList.add("wheel");
    rightWheel.classList.add("right-wheel");

    car.appendChild(carTop);
    car.appendChild(leftWheel);
    car.appendChild(rightWheel);

    cars.appendChild(car);
};

for(let i = 0; i < 8; i++) {
    const left = Math.floor(Math.random() * 90);

    let top;

    if(Math.random() < 0.5) {
        top = 35;
    } else {
        top = 135;
    }

    const color = colors[Math.floor(Math.random() * colors.length)];

    addCar(left, top, color);
}