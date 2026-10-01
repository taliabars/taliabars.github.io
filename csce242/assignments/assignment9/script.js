class Vacation {
    constructor(title, type, description, thingsToDo, image, map) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.map = map;
    }

    getCard() {
        const section = document.createElement("section");
        section.classList.add("vacation");

        const title = document.createElement("h3");
        title.innerHTML = this.title;

        const type = document.createElement("p");
        type.innerHTML = this.type + " Vacation";

        const image = document.createElement("img");
        image.src = "images/" + this.image;
        image.alt = this.title;

        section.append(title);
        section.append(type);
        section.append(image);

        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

    showModal() {
        document.getElementById("modal-title").innerHTML = this.title;

        document.getElementById("modal-type").innerHTML =
            "<strong>Type:</strong> " + this.type;

        document.getElementById("modal-description").innerHTML =
            "<strong>Description:</strong> " + this.description;

        document.getElementById("modal-things").innerHTML =
            "<strong>Things To Do:</strong> " + this.thingsToDo;

        document.getElementById("modal-map").innerHTML =
            `<iframe src="${this.map}" loading="lazy"></iframe>`;

        document.getElementById("vacation-modal").style.display = "block";
    }
}


const vacations = [
    new Vacation(
        "Charleston",
        "Beach",
        "A historic coastal city known for colorful homes, beautiful architecture, and nearby beaches.",
        "Walk through the historic district, visit the Battery, shop at the City Market, and visit the beach.",
        "charleston.jpg",
        "https://www.google.com/maps?q=Charleston,SC&output=embed"
    ),

    new Vacation(
        "Savannah",
        "Beach",
        "A historic southern city known for beautiful parks, architecture, and coastal scenery.",
        "Walk River Street, visit Forsyth Park, explore historic squares, and take a trip to Tybee Island.",
        "savannah.jpg",
        "https://www.google.com/maps?q=Savannah,GA&output=embed"
    ),

    new Vacation(
        "Asheville",
        "Mountain",
        "A mountain city surrounded by the Blue Ridge Mountains with beautiful scenery and outdoor activities.",
        "Visit the Biltmore Estate, hike in the mountains, explore downtown, and drive the Blue Ridge Parkway.",
        "asheville.jpg",
        "https://www.google.com/maps?q=Asheville,NC&output=embed"
    ),

    new Vacation(
        "Myrtle Beach",
        "Beach",
        "A popular South Carolina beach destination with a long coastline and many attractions.",
        "Relax on the beach, visit Broadway at the Beach, walk the boardwalk, and ride the SkyWheel.",
        "myrtle-beach.jpg",
        "https://www.google.com/maps?q=Myrtle+Beach,SC&output=embed"
    ),

    new Vacation(
        "Hilton Head",
        "Beach",
        "A relaxing island destination known for beaches, golf courses, biking, and coastal scenery.",
        "Visit Coligny Beach, ride bikes, see Harbour Town Lighthouse, and kayak along the coast.",
        "hilton-head.jpg",
        "https://www.google.com/maps?q=Hilton+Head+Island,SC&output=embed"
    ),

    new Vacation(
        "Gatlinburg",
        "Mountain",
        "A mountain town located next to Great Smoky Mountains National Park.",
        "Hike in the Smoky Mountains, visit downtown Gatlinburg, ride the aerial tramway, and enjoy mountain views.",
        "gatlinburg.jpg",
        "https://www.google.com/maps?q=Gatlinburg,TN&output=embed"
    )
];


const vacationList = document.getElementById("vacation-list");

vacations.forEach((vacation) => {
    vacationList.append(vacation.getCard());
});


document.getElementById("close").onclick = () => {
    document.getElementById("vacation-modal").style.display = "none";
};


window.onclick = (event) => {
    const modal = document.getElementById("vacation-modal");

    if (event.target == modal) {
        modal.style.display = "none";
    }
};