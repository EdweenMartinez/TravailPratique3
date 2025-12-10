/*---------------------- Pour afficher le message ajouter au panier dans la page articles ---------------------------*/

document.querySelectorAll(".bArticle").forEach(article => {
    article.addEventListener("click", () => {
        alert("Ajouter au panier");
    });
});








