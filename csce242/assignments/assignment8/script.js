const beaches = {
    "Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach+SC&output=embed",
    "Hilton Head": "https://www.google.com/maps?q=Hilton+Head+SC&output=embed",
    "Folly Beach": "https://www.google.com/maps?q=Folly+Beach+SC&output=embed",
    "Isle of Palms": "https://www.google.com/maps?q=Isle+of+Palms+SC&output=embed"
};

const cities = {
    "Charleston": "https://www.google.com/maps?q=Charleston+SC&output=embed",
    "Columbia": "https://www.google.com/maps?q=Columbia+SC&output=embed",
    "Greenville": "https://www.google.com/maps?q=Greenville+SC&output=embed",
    "Savannah": "https://www.google.com/maps?q=Savannah+GA&output=embed"
};

const destinationType = document.getElementById("destination-type");
const destinationList = document.getElementById("destination-list");
const map = document.getElementById("map");

const showDestinations = () => {
    destinationList.innerHTML = "";
    map.innerHTML = "";

    let destinations;

    if(destinationType.value == "beaches") {
        destinations = beaches;
    } else if(destinationType.value == "cities") {
        destinations = cities;
    } else {
        return;
    }

    for(let destination in destinations) {
        const p = document.createElement("p");
        const link = document.createElement("a");

        link.innerHTML = destination;
        link.href = "#";

        link.onclick = () => {
            showMap(destinations[destination]);
        };

        p.appendChild(link);
        destinationList.appendChild(p);
    }
};

const showMap = (mapLink) => {
    map.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = mapLink;

    map.appendChild(iframe);
};

destinationType.onchange = showDestinations;