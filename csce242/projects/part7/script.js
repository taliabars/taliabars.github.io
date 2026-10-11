const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

if (menuButton) {
    menuButton.onclick = () => {
        mainNav.classList.toggle("hide-small");
    };
}

const optionGroups = document.querySelectorAll(".options");

optionGroups.forEach((group) => {
    const options = group.querySelectorAll(".option");

    options.forEach((option) => {
        option.onclick = () => {
            options.forEach((item) => {
                item.classList.remove("selected");
            });

            option.classList.add("selected");
        };
    });
});

const findBookButton = document.getElementById("find-book-button");
const recommendation = document.getElementById("recommendation");

if (findBookButton) {
    findBookButton.onclick = () => {
        const genre = document.querySelector(
            "#genre-options .selected"
        );

        const mood = document.querySelector(
            "#mood-options .selected"
        );

        const pace = document.querySelector(
            "#pace-options .selected"
        );

        const length = document.querySelector(
            "#length-options .selected"
        );

        if (!genre || !mood || !pace || !length) {
            recommendation.innerHTML =
                "<p>Please choose one option from each question.</p>";
            return;
        }

        let bookTitle = "";
        let bookAuthor = "";
        let bookImage = "";

        if (genre.dataset.value === "romance") {
            bookTitle = "People We Meet on Vacation";
            bookAuthor = "Emily Henry";
            bookImage = "images/people-vacation.jpg";
        } else if (genre.dataset.value === "mystery") {
            bookTitle = "The It Girl";
            bookAuthor = "Ruth Ware";
            bookImage = "images/it-girl.jpg";
        } else if (genre.dataset.value === "fantasy") {
            bookTitle = "The Hawthorne Legacy";
            bookAuthor = "Jennifer Lynn Barnes";
            bookImage = "images/hawthorne-legacy.jpg";
        } else {
            bookTitle = "The Seven Husbands of Evelyn Hugo";
            bookAuthor = "Taylor Jenkins Reid";
            bookImage = "images/evelyn-hugo.jpg";
        }

        if (mood.dataset.value === "emotional") {
            bookTitle = "The Seven Husbands of Evelyn Hugo";
            bookAuthor = "Taylor Jenkins Reid";
            bookImage = "images/evelyn-hugo.jpg";
        }

        if (mood.dataset.value === "edge") {
            bookTitle = "The It Girl";
            bookAuthor = "Ruth Ware";
            bookImage = "images/it-girl.jpg";
        }

        if (mood.dataset.value === "comforted") {
            bookTitle = "Welcome to Beach Town";
            bookAuthor = "Susan Wiggs";
            bookImage = "images/beach-town.jpg";
        }

        recommendation.innerHTML = `
            <h2>Your Next Read</h2>
            <img src="${bookImage}" alt="${bookTitle}">
            <h3>${bookTitle}</h3>
            <p>${bookAuthor}</p>
            <p>
                Based on the preferences you selected, this could be
                a great book for your next read.
            </p>
        `;
    };
}