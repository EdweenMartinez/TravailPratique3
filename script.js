/*---------------------- Pour afficher le message ajouter au panier dans la page articles  et changement de icon cart ---------------------------*/

document.querySelectorAll(".bArticle").forEach(article => {
    article.addEventListener("click", () => {
        alert("Ajouter au panier");

        const cart = document.getElementById("cartHeader");

       cart.src = "./IMages/cart_plein.png";
       cart.style.height = "90px";
       cart.style.width = "90px";

       sessionStorage.setItem("cartPlein" ,"true");


       
       
    });
});

window.addEventListener("DOMContentLoaded",() =>{

    const cart = document.getElementById("cartHeader");

    if(sessionStorage.getItem("cartPlein") == "true"){
         cart.src = "./IMages/cart_plein.png";
       cart.style.height = "90px";
       cart.style.width = "90px";
    }
});



const champs = document.querySelectorAll(".formulaire");

champs.forEach(champs => {
    champs.addEventListener("focus", () =>{
        champs.style.backgroundColor = "#B1F6FC";
    });

    champs.addEventListener("blur",() =>{
champs.style.backgroundColor = "white";

})
   
});



const barre = document.getElementById("barreRecherche");


    barre.addEventListener("focus", () =>{
        barre.style.backgroundColor = "#B1F6FC";
    });

    barre.addEventListener("blur",() =>{
barre.style.backgroundColor = "white";

});


const bouton = document.getElementById("bFormulaire"); 
const verif = document.getElementById("verification"); 

bouton.addEventListener("click", () => {
    
    let vide = false;

    champs.forEach(champs => {
        if(champs.value.trim() ===""){
            vide = true;
        }
    });

    if(vide){
        verif.style.color = "red";
        verif.textContent = "Remplir rous les champs svp!";
        verif.style.display = "block";

    }else{
       
        verif.style.color = "yellow";
        verif.textContent = "Message envoyer"

        champs.forEach(champs =>{
            champs.value = "";
        });
        
    }

});



   


















