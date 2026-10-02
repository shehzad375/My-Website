        const menuBtn = document.getElementById("menuBtn");
        const navLinks = document.getElementById("navLinks");

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });


        document.querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove("show");

                });

            });



        const sections =
            document.querySelectorAll("section[id]");

        const navItems =
            document.querySelectorAll(".nav-links a");

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (window.scrollY >= sectionTop) {

                    current = section.getAttribute("id");

                }

            });


            navItems.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add("active");

                }

            });

        });



        const searchInput =
            document.getElementById("siteSearch");

        const searchResults =
            document.getElementById("searchResults");

        const clearSearch =
            document.getElementById("clearSearch");


        const searchData = [

            {
                title: "About Me",
                description: "Learn more about Shehzad",
                target: "#about",
                keywords: "about me shehzad introduction profile"
            },

            {
                title: "Skills",
                description: "View current skills and learning",
                target: "#skills",
                keywords: "skills html wordpress web design"
            },

            {
                title: "Education",
                description: "View academic background",
                target: "#education",
                keywords: "education college science computer science study"
            },

            {
                title: "CV",
                description: "View or download CV",
                target: "#cv",
                keywords: "cv resume curriculum vitae download"
            },

            {
                title: "Contact",
                description: "Get in touch with Shehzad",
                target: "#contact",
                keywords: "contact email phone message"
            },

            {
                title: "Home",
                description: "Return to the homepage",
                target: "#home",
                keywords: "home main homepage"
            }

        ];


        function showSearchResults(value) {

            const query =
                value.trim().toLowerCase();


            clearSearch.style.display =
                query ? "block" : "none";


            if (!query) {

                searchResults.classList.remove("show");

                return;

            }


            const matches =
                searchData.filter(item => {

                    return (
                        item.title.toLowerCase().includes(query) ||
                        item.description.toLowerCase().includes(query) ||
                        item.keywords.includes(query)
                    );

                });


            if (!matches.length) {

                searchResults.innerHTML = `

                    <div class="search-result">

                        <strong>
                            No results found
                        </strong>

                        <small>
                            Try searching About, Skills, Education, CV or Contact.
                        </small>

                    </div>

                `;

                searchResults.classList.add("show");

                return;

            }


            searchResults.innerHTML =
                matches.map(item => `

                    <div
                        class="search-result"
                        data-target="${item.target}">

                        <strong>
                            ${item.title}
                        </strong>

                        <small>
                            ${item.description}
                        </small>

                    </div>

                `).join("");


            searchResults.classList.add("show");


            document.querySelectorAll(".search-result[data-target]")
                .forEach(result => {

                    result.addEventListener("click", () => {

                        const target =
                            result.getAttribute("data-target");

                        document.querySelector(target)
                            .scrollIntoView({
                                behavior: "smooth"
                            });

                        searchInput.value = "";

                        searchResults.classList.remove("show");

                        clearSearch.style.display = "none";

                    });

                });

        }


        searchInput.addEventListener("input", () => {

            showSearchResults(searchInput.value);

        });


        clearSearch.addEventListener("click", () => {

            searchInput.value = "";

            searchResults.classList.remove("show");

            clearSearch.style.display = "none";

            searchInput.focus();

        });


        document.addEventListener("click", event => {

            if (
                !event.target.closest(".search-box")
            ) {

                searchResults.classList.remove("show");

            }

        });



        const contactForm =
            document.getElementById("contactForm");

        const formMessage =
            document.getElementById("formMessage");


        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            formMessage.style.display = "block";

            contactForm.reset();

        });



        const revealElements =
            document.querySelectorAll(".reveal");


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("active");

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });



        document.getElementById("year").textContent =
            new Date().getFullYear();