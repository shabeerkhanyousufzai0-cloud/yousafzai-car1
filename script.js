const WHATSAPP = "923259089890";


/* =========================
   CAR DATABASE
========================= */

const cars = {

    "Grande": {
        name: "Toyota Corolla Altis Grande X 1.8",
        price: "PKR 7,669,000",
        type: "Business Sedan",
        page: 2,
        details:
            "1.8L Automatic Grande\n" +
            "Premium business sedan\n" +
            "Reference price: PKR 7,669,000"
    },

    "Fortuner": {
        name: "Toyota Fortuner 2.7 G",
        price: "PKR 12,435,000",
        type: "Premium SUV",
        page: 3,
        details:
            "2.7L Petrol\n" +
            "Premium SUV\n" +
            "Reference price: PKR 12,435,000"
    },

    "Fortuner GR-S": {
        name: "Toyota Fortuner GR-S",
        price: "PKR 20,499,000",
        type: "Performance SUV",
        page: 3,
        details:
            "GR-S Performance Variant\n" +
            "Premium SUV\n" +
            "Reference price: PKR 20,499,000"
    },

    "Corolla Cross": {
        name: "Toyota Corolla Cross 1.8",
        price: "PKR 7,235,000",
        type: "Crossover",
        page: 3,
        details:
            "1.8L Crossover\n" +
            "Family SUV/Crossover\n" +
            "Reference price: PKR 7,235,000"
    },

    "Camry": {
        name: "Toyota Camry Hybrid",
        price: "PKR 43,800,000",
        type: "Executive Sedan",
        page: 4,
        details:
            "Hybrid Executive Sedan\n" +
            "Business Class\n" +
            "Reference price: PKR 43,800,000"
    },

    "Prado": {
        name: "Toyota Land Cruiser Prado",
        price: "PKR 61,500,000",
        type: "Luxury SUV",
        page: 4,
        details:
            "Luxury SUV\n" +
            "Premium Business Vehicle\n" +
            "Reference price: PKR 61,500,000"
    },

    "Land Cruiser 300": {
        name: "Toyota Land Cruiser 300",
        price: "PKR 106,000,000",
        type: "Luxury SUV",
        page: 4,
        details:
            "Flagship Luxury SUV\n" +
            "Premium Business Class\n" +
            "Reference price: PKR 106,000,000"
    },

    "Yaris": {
        name: "Toyota Yaris 1.3 GLI MT",
        price: "PKR 4,649,000",
        type: "Sedan",
        page: 5,
        details:
            "1.3L Sedan\n" +
            "Reference price: PKR 4,649,000"
    },

    "Revo": {
        name: "Toyota Hilux Revo G 2.8",
        price: "PKR 12,329,000",
        type: "Pickup",
        page: 5,
        details:
            "2.8L Pickup\n" +
            "Reference price: PKR 12,329,000"
    }
};


/* =========================
   CAR IMAGES
========================= */

const images = [

"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=85",

"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85",

"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",

"https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=85"

];


/* =========================
   PAGE DATA
========================= */

const pages = {

1: {
    title: "Yousafzai Cars",
    subtitle:
        "Premium cars, SUVs and business class vehicles.",
    cars: ["Grande", "Fortuner", "Camry"]
},

2: {
    title: "Business Cars",
    subtitle:
        "Professional and comfortable business class cars.",
    cars: ["Grande", "Yaris"]
},

3: {
    title: "Premium SUVs",
    subtitle:
        "Powerful SUVs for family and business.",
    cars: ["Fortuner", "Fortuner GR-S", "Corolla Cross"]
},

4: {
    title: "Luxury & Executive",
    subtitle:
        "Luxury vehicles for premium customers.",
    cars: ["Camry", "Prado", "Land Cruiser 300"]
},

5: {
    title: "More Cars",
    subtitle:
        "More vehicles available in our showroom.",
    cars: ["Yaris", "Revo"]
}

};


/* =========================
   CURRENT PAGE
========================= */

let currentPage = 1;


/* =========================
   SHOW PAGE
========================= */

function goPage(page) {

    if (page < 1) page = 5;
    if (page > 5) page = 1;

    currentPage = page;

    renderPage();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   RENDER
========================= */

function renderPage() {

    const page = pages[currentPage];

    let html = "";


    /* HOME SLIDER */

    if (currentPage === 1) {

        html += `

        <section class="hero">

            <h1>
                Drive the car that matches your class.
            </h1>

            <p>
                Welcome to Yousafzai Cars.
                Discover premium SUVs, business sedans
                and luxury vehicles.
            </p>

            <br>

            <button
                class="goldButton"
                onclick="addCar()">

                + Add Car

            </button>

        </section>


        <div class="slider">

            <div class="slide active"
                 style="background-image:url('${images[0]}')">

                <div class="slideText">

                    <h2>Premium Cars</h2>

                    <p>
                        Discover our premium collection.
                    </p>

                </div>

            </div>


            <div class="slide"
                 style="background-image:url('${images[1]}')">

                <div class="slideText">

                    <h2>Business Class</h2>

                    <p>
                        Comfort, prestige and style.
                    </p>

                </div>

            </div>


            <div class="slide"
                 style="background-image:url('${images[2]}')">

                <div class="slideText">

                    <h2>Luxury Collection</h2>

                    <p>
                        Experience premium driving.
                    </p>

                </div>

            </div>


            <div class="dots">

                <button class="dot active"
                        onclick="slideTo(0)">
                </button>

                <button class="dot"
                        onclick="slideTo(1)">
                </button>

                <button class="dot"
                        onclick="slideTo(2)">
                </button>

            </div>

        </div>

        `;

    }


    /* PAGE TITLE */

    html += `

    <section class="page">

        <div class="pageTitle">

            <h2>
                ${page.title}
            </h2>

            <p>
                ${page.subtitle}
            </p>

        </div>


        <div class="carGrid">

    `;


    /* CAR CARDS */

    page.cars.forEach((key, index) => {

        const car = cars[key];

        html += createCard(
            key,
            car,
            images[index % images.length]
        );

    });


    html += `

        </div>

    </section>


    <div class="pageButtons">

        <button
            onclick="goPage(${currentPage - 1})">

            ← Back

        </button>


        <button
            class="next"
            onclick="goPage(${currentPage + 1})">

            Next →

        </button>

    </div>

    `;


    document.getElementById("app").innerHTML = html;


    loadDeletedCars();
}


/* =========================
   CREATE CAR CARD
========================= */

function createCard(key, car, image) {

    return `

    <article
        class="carCard"
        data-name="${car.name}">

        <div class="menu">

            <button
                class="menuButton"
                onclick="toggleMenu(this)">

                ⋮

            </button>


            <div class="menuOptions">

                <button
                    onclick="addCar()">

                    Option 1 — Add Car

                </button>


                <button
                    class="deleteButton"
                    onclick="deleteCar(this)">

                    Option 2 — Delete Car

                </button>


                <button
                    onclick="showDetails('${key}')">

                    Option 3 — Car Details

                </button>

            </div>

        </div>


        <img
            src="${image}"
            alt="${car.name}">


        <div class="carInfo">

            <h3>
                ${car.name}
            </h3>

            <div class="carType">
                ${car.type}
            </div>

            <div class="price">
                ${car.price}
            </div>


            <a
                class="whatsapp"
                target="_blank"
                href="${whatsappLink(car.name)}">

                WhatsApp

            </a>

        </div>

    </article>

    `;
}


/* =========================
   WHATSAPP
========================= */

function whatsappLink(carName) {

    const message =
        `Hello Yousafzai Cars, I am interested in ${carName}. Please share availability and latest price.`;

    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}


/* =========================
   THREE DOT MENU
========================= */

function toggleMenu(button) {

    document
        .querySelectorAll(".menu.open")
        .forEach(menu => {

            if (
                menu !==
                button.closest(".menu")
            ) {

                menu.classList.remove("open");

            }

        });


    button
        .closest(".menu")
        .classList.toggle("open");
}


/* =========================
   DETAILS
========================= */

function showDetails(key) {

    const car = cars[key];

    document.getElementById(
        "modalTitle"
    ).textContent = car.name;


    document.getElementById(
        "modalText"
    ).textContent =

        `Type: ${car.type}

Price Reference:
${car.price}

${car.details}

For a real sale, confirm the latest dealer price, taxes, registration and on-road charges.`;


    document
        .getElementById("modal")
        .classList.add("show");
}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");

}


/* =========================
   DELETE CAR
========================= */

function deleteCar(button) {

    const card =
        button.closest(".carCard");

    const name =
        card.dataset.name;


    if (
        confirm(
            `Are you sure you want to delete ${name}?`
        )
    ) {

        let deleted =
            JSON.parse(
                localStorage.getItem(
                    "deletedCars"
                ) || "[]"
            );


        if (!deleted.includes(name)) {

            deleted.push(name);

        }


        localStorage.setItem(
            "deletedCars",
            JSON.stringify(deleted)
        );


        card.remove();

    }

}


/* =========================
   ADD CAR
========================= */

function addCar() {

    const name =
        prompt("Enter car name:");

    if (!name) return;


    const price =
        prompt(
            "Enter price:",
            "PKR "
        );

    if (!price) return;


    const type =
        prompt(
            "Enter car type:",
            "Business / SUV / Sedan"
        );


    const newCar = {

        name: name,

        price: price,

        type: type || "Car",

        details:
            "Custom car added by showroom owner."

    };


    const grid =
        document.querySelector(
            ".carGrid"
        );


    if (!grid) return;


    const wrapper =
        document.createElement("div");


    wrapper.innerHTML =
        createCard(
            name,
            newCar,
            images[0]
        );


    grid.prepend(
        wrapper.firstElementChild
    );

}


/* =========================
   SEARCH
========================= */

function searchCar() {

    const input =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase()
            .trim();


    if (!input) return;


    let foundPage = null;


    for (
        const key in cars
    ) {

        const car =
            cars[key];


        if (
            key
                .toLowerCase()
                .includes(input)

            ||

            car.name
                .toLowerCase()
                .includes(input)

            ||

            car.type
                .toLowerCase()
                .includes(input)
        ) {

            foundPage =
                car.page;

            break;

        }

    }


    if (foundPage) {

        goPage(foundPage);

    } else {

        alert(
            "No matching car found."
        );

    }

}


/* =========================
   DELETE MEMORY
========================= */

function loadDeletedCars() {

    const deleted =
        JSON.parse(
            localStorage.getItem(
                "deletedCars"
            ) || "[]"
        );


    document
        .querySelectorAll(
            ".carCard"
        )
        .forEach(card => {

            if (
                deleted.includes(
                    card.dataset.name
                )
            ) {

                card.remove();

            }

        });

}


/* =========================
   SLIDER
========================= */

let currentSlide = 0;


function slideTo(number) {

    const slides =
        document.querySelectorAll(
            ".slide"
        );

    const dots =
        document.querySelectorAll(
            ".dot"
        );


    if (!slides.length) return;


    slides.forEach(
        slide =>
            slide.classList.remove(
                "active"
            )
    );


    dots.forEach(
        dot =>
            dot.classList.remove(
                "active"
            )
    );


    slides[number]
        .classList.add(
            "active"
        );


    dots[number]
        .classList.add(
            "active"
        );


    currentSlide =
        number;
}


/* =========================
   AUTO SLIDER
========================= */

setInterval(() => {

    if (
        currentPage !== 1
    ) return;


    currentSlide++;

    if (
        currentSlide > 2
    ) {

        currentSlide = 0;

    }


    slideTo(
        currentSlide
    );

}, 4500);


/* =========================
   START WEBSITE
========================= */

renderPage();