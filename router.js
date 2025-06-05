const routes = {
    "/": "<h1>Dit is de home pagina!</h1>",
    "/about": "<h1>Dit is de about pagina!</h1>",
    "/contact": "<h1>Dit is de contact pagina!</h1>"
}

const handleRoute = () => {
    const url = window.location.pathname;
    const content = routes[url] || "<h1>ERROR - 404</h1>";
    document.getElementById("root").innerHTML = content;
}

document.addEventListener("click", (e) => {
    e.preventDefault();
    const url = e.target.getAttribute("href");
    history.pushState({}, "", url);
    handleRoute();
})

window.addEventListener("popstate", handleRoute);

handleRoute();