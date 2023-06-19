// Écouteur d'événement pour le bouton "Ajouter au panier"
function ajouterAuPanierEtAfficher(idPlat,nomPlat) {
    fetch(`ajouter-au-panier.php?idPlat=${idPlat}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("Plat ajouté au panier !");
          afficherContenuPanier(); // Appeler la fonction pour afficher le contenu du panier
        } else {
          console.error("Erreur lors de l'ajout du plat au panier.");
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
  }
  
  // Fonction pour afficher le contenu du panier
 // ...

// Fonction pour afficher le contenu du panier
// Fonction pour afficher le contenu du panier
// Fonction pour afficher le contenu du panier
function afficherContenuPanier() {
    fetch(`afficher-contenu-panier.php`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const contenuPanier = data.contenuPanier;
          const ulContenuPanier = document.getElementById("contenuPanier");
  
          ulContenuPanier.innerHTML = ""; // Vider la liste du contenu du panier
  
          contenuPanier.forEach(plat => {
            const li = document.createElement("li");
            
            // Créer un élément pour afficher le nom du plat
            const nomPlat = document.createElement("span");
            nomPlat.textContent = plat.nomPlat;
            li.appendChild(nomPlat);
  
            // Créer le bouton de suppression
            const btnSupprimer = document.createElement("button");
            btnSupprimer.textContent = "Supprimer";
            btnSupprimer.addEventListener("click", () => supprimerDuPanier(plat.id));
            li.appendChild(btnSupprimer);
  
            // Créer le champ de quantité
            const inputQuantite = document.createElement("input");
            inputQuantite.type = "number";
            inputQuantite.value = plat.quantite;
            inputQuantite.addEventListener("change", event => modifierQuantite(plat.id, event.target.value));
            li.appendChild(inputQuantite);
  
            ulContenuPanier.appendChild(li);
          });
  
          console.log("Contenu du panier :", contenuPanier);
        } else {
          console.error("Erreur lors de la récupération du contenu du panier :", data.error);
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
}

 // Fonction pour commander
 function commander() {
    console.log("commander");
    fetch("commander.php")
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Rediriger vers la page de commande après la commande réussie
          window.location.href = "commande.php";
        } else {
          // Afficher le message d'erreur de commande
          const messageCommande = document.getElementById("messageCommande");
          messageCommande.textContent = data.error;
          messageCommande.style.color = "red";
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
  }
  
  
  

  // Fonction pour supprimer un plat du panier
function supprimerDuPanier(idPlat) {
    fetch(`supprimer-plat-du-panier.php?idPlat=${idPlat}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("Plat supprimé du panier !");
          afficherContenuPanier(); // Actualiser le contenu du panier après suppression
        } else {
          console.error("Erreur lors de la suppression du plat du panier.");
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
  }
  
  // Fonction pour modifier la quantité d'un plat dans le panier
  function modifierQuantite(idPlat, nouvelleQuantite) {
    fetch(`modifier-quantite.php?idPlat=${idPlat}&quantite=${nouvelleQuantite}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("Quantité du plat modifiée !");
          afficherContenuPanier(); // Actualiser le contenu du panier après modification
        } else {
          console.error("Erreur lors de la modification de la quantité du plat.");
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
  }
  
  // Fonction pour vider le panier
  function viderPanier() {

    console.log("vider");
    fetch("vider-panier.php")
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("Panier vidé !");
          afficherContenuPanier();
        } else {
          console.error("Erreur lors de la suppression du panier :", data.error);
        }
      })
      .catch(error => {
        console.error("Une erreur s'est produite :", error);
      });
  }
  var panier = document.getElementById("panier");
var panierContainer = document.getElementById("panier");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("panierS").addEventListener("click", function() {
    console.log(panierContainer);
    panierContainer.style.display = "block";
    console.log("yo");
  });
});

  


// Récupérer l'élément du panier et l'élément du panierContainer


// Fonction pour fermer le panier
function fermerPanier() {
  // Cacher le panier en modifiant le style de l'élément panierContainer
  panierContainer.style.display = "none";
}