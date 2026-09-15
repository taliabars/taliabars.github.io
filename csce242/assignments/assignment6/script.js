const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");

const exercise1Link = document.getElementById("exercise1-link");
const exercise2Link = document.getElementById("exercise2-link");

const daysMissed = document.getElementById("days-missed");
const gradeLoss = document.getElementById("grade-loss");
const missMessage = document.getElementById("miss-message");

const toggleNav = document.getElementById("toggle-nav");
const navItems = document.getElementById("nav-items");


exercise1Link.onclick = () => {
    exercise1.classList.remove("hidden");
    exercise2.classList.add("hidden");
};


exercise2Link.onclick = () => {
    exercise1.classList.add("hidden");
    exercise2.classList.remove("hidden");

    showSemesterCounter();
};


daysMissed.oninput = () => {
    const days = daysMissed.value;

    const attendanceGrade = 7;
    const numberOfClasses = 25;

    const lossPerClass = attendanceGrade / numberOfClasses;
    const loss = lossPerClass * days;

    gradeLoss.innerHTML =
        "You will lose " + loss.toFixed(1) +
        "% for skipping " + days + " days.";

    if (days == 0) {
        missMessage.innerHTML =
            "Perfect attendance! Keep it up.";
    }
    else if (days <= 2) {
        missMessage.innerHTML =
            "Missing a couple classes should be manageable.";
    }
    else if (days <= 5) {
        missMessage.innerHTML =
            "Be careful, you are starting to miss important class time.";
    }
    else {
        missMessage.innerHTML =
            "You are missing valuable learning opportunities.";
    }
};


const showSemesterCounter = () => {
    const today = new Date();

    const lastDay =
        new Date(today.getFullYear(), 11, 4);

    const difference = lastDay - today;

    const days =
        Math.ceil(difference / (1000 * 60 * 60 * 24));

    document.getElementById("days-left").innerHTML =
        "You have " + days + " days left in the semester.";

    const message =
        document.getElementById("semester-message");

    if (days > 60) {
        message.innerHTML =
            "Not time to start counting down yet.";
    }
    else if (days > 30) {
        message.innerHTML =
            "The semester is moving along!";
    }
    else if (days > 7) {
        message.innerHTML =
            "Almost there! The end is getting close.";
    }
    else {
        message.innerHTML =
            "Final stretch! You can do it!";
    }
};


toggleNav.onclick = () => {
    navItems.classList.toggle("closed");

    if (navItems.classList.contains("closed")) {
        toggleNav.innerHTML = "&#9660;";
    }
    else {
        toggleNav.innerHTML = "&#9650;";
    }
};