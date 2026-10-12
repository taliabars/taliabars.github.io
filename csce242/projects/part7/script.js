
/* Mobile Navigation */

const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

if (menuButton && mainNav) {
    menuButton.onclick = () => {
        mainNav.classList.toggle("hide-small");
    };
}

/* Book Recommendation Quiz */

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

if (findBookButton && recommendation) {
    findBookButton.onclick = () => {
        const genre = document.querySelector("#genre-options .selected");
        const mood = document.querySelector("#mood-options .selected");
        const pace = document.querySelector("#pace-options .selected");
        const length = document.querySelector("#length-options .selected");

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

/* Browse Books - JSON */

const bookGrid = document.getElementById("book-grid");
const bookCount = document.getElementById("book-count");

const getBooks = async () => {
    const url = "https://taliabars.github.io/csce242/projects/part7/books.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load books");
        }

        const books = await response.json();

        bookGrid.innerHTML = "";
        bookCount.textContent = books.length + " recommendations";

        books.forEach((book) => {
            const card = document.createElement("section");
            card.classList.add("book-card");

            const image = document.createElement("img");
            image.src = book.img_name;
            image.alt = book.title;

            const title = document.createElement("h3");
            title.textContent = book.title;

            const author = document.createElement("p");
            author.textContent = book.author;

            const rating = document.createElement("p");
            rating.textContent = "★".repeat(book.rating);

            const genre = document.createElement("p");
            genre.textContent = book.genre;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(author);
            card.appendChild(rating);
            card.appendChild(genre);

            if (book._id === 1) {
                const link = document.createElement("a");
                link.classList.add("button");
                link.href = "book.html";
                link.textContent = "View Book →";
                card.appendChild(link);
            }

            bookGrid.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        bookCount.textContent = "Unable to load recommendations.";
    }
};

if (bookGrid && bookCount) {
    getBooks();
}

/* Contact Form - Web3Forms */

const contactForm = document.getElementById("contact-form");
const contactStatus = document.getElementById("contact-status");

if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');

        contactStatus.textContent = "Sending your message...";
        submitButton.disabled = true;

        const formData = new FormData(contactForm);

        // Replace this placeholder with your Web3Forms access key.
        formData.append("access_key", "2aff50c0-c462-4225-8d0e-72ea6484f29b");

        formData.append("subject", "New Message from Dog-Eared");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (response.ok && result.success) {
                contactStatus.textContent =
                    "Your message was sent successfully! Thank you for reaching out.";
                contactStatus.className = "success";
                contactForm.reset();
            } else {
                contactStatus.textContent =
                    "There was a problem sending your message. Please try again.";
                contactStatus.className = "error";
            }
        } catch (error) {
            console.error(error);
            contactStatus.textContent =
                "Unable to send your message right now. Please try again later.";
            contactStatus.className = "error";
        } finally {
            submitButton.disabled = false;
        }
    });
}
