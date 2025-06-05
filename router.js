const routes = {
    "/csr/": "<h1>Home</h1><p>This is the homepage!</p>",
    "/csr/about": "<h1>About</h1><p>This is the about page!</p>",
    "/csr/contact": "<h1>Contact</h1><p>This is the contact page!</p>",
}

const handleRoute = () => {
    const path = window.location.pathname;
    const content = routes[path] || "<h1>404</h1><p>Oops, page not found!</p>"
    document.getElementById("root").innerHTML = content;
}

// clicks intercepten
document.addEventListener("click", (e) => {
    e.preventDefault();
    const url = e.target.getAttribute("href");
    history.pushState({}, '', url);
    handleRoute();
})

window.addEventListener('popstate', handleRoute);

handleRoute()