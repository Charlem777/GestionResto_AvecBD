<html>
    
    <link rel="stylesheet" href="style1.scss" lang="scss">
    
<div class="home">
  <div class="header">
    <div class="promotion">
      <p>Remise -5% et livraison gratuite sur les commandes d'au moins 40€</p>
    </div>
    
    <div class="logo" >
      <img class="eatandgo" src="image/logo.jpg" alt="Eat and Go" />
    </div>
    <div class="wrapper--input">
      <input  type="text" placeholder="De quoi avez-vous besoin ?" />
      <div class="search-results" >
        <div class="search">
          <a >
            <div >
              <h2></h2>
              <div class="wrapper--img">
                <img :src="plat.image" class="image" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <nav>
    <ul>
      
      <li><a href="#">MENU GENERAL</a></li>
      <li>
        <a href="#">CATEGORIES SPECIALES</a>
        <ul>
          <li><a href="#">SPECIALITE</a></li>
          <li><a href="#">HEALTHY</a></li>
          <li><a href="#">GOURMAND</a></li>
          <li><a href="#">MENU ENFANT</a></li>
          <li><a href="#">EN PROMOTION</a></li>
        </ul>
      </li>
      <a href="/Reservation">
        <li><a href="reservation.php">RESERVATION</a></li>
      </a>
      <li>
        <a href="#">A PROPOS</a>
        <ul>
          <li><a href="/NosRestaurants">NOS RESTAURANTS</a></li>
          <li><a href="/ContactezNous">CONTACTEZ-NOUS</a></li>
        </ul>
      </li>
      
    </ul>
   
   

  </nav> 
  
  <div class="slideshow"></div>

  <!-- Le composant "PlatRow" sera inséré ici pour chaque élément dans "platsData" -->
</div>
<body>
<button id="panierS" >
  <img class="icone-panier" src="panier.png" alt="Icône Panier">
  Panier
</button>
<div class="cart-container" id="panierContainer">
  <!-- Le contenu du panier sera ajouté ici -->
  <div id="panier" class="panier">
        <h3>Mon Panier</h3>
        <ul id="contenuPanier" class="contenu-panier"></ul>
        <div class="actions-panier">
            <button id="btnViderPanier" class="btn-action" onclick="viderPanier()">Vider le panier</button>
            <button id="btnFermerPanier" class="btn-action" onclick="fermerPanier()">Fermer le panier</button>
            <button id="btnCommander" onclick="commander()">Commander</button>
        </div>
        <div id="messageCommande"></div>
       
    </div>
</div>
<section class="presentation">
  <div class="presentation__content">
    <h1>Bienvenue chez Eat and Go</h1>
    <p>Découvrez notre délicieuse sélection de plats à emporter.</p>
    <a href="#" class="btn">Commandez maintenant</a>
  </div>
</section>

<div class="plats-container">
    <?php
    // Connexion à la base de données
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "gestionresto";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Vérifier la connexion
    if ($conn->connect_error) {
        die("Connexion échouée : " . $conn->connect_error);
    }

    // Requête SQL pour sélectionner tous les plats de la table "plats"
    $sql = "SELECT * FROM plats";
    $result = $conn->query($sql);

    // Vérifier s'il y a des résultats
    if ($result->num_rows > 0) {
        // Parcourir les résultats et afficher les plats
        while ($row = $result->fetch_assoc()) {
            // Récupérer les valeurs des colonnes
            $idPlat= $row["idPlat"];
            $platNom = $row["nomPlat"];
            $platDescription = $row["description"];
            $platCalories = $row["calories"];
            $platProteines = $row["proteines"];
            $platPrix = $row["prix"];
            $platImage = $row["image"];

            // Afficher les plats dans des div individuelles
            echo '<div class="plat">
            <img class="plat-image" src="images/' . $platImage . '" alt="' . $platNom . '" />
            <div class="plat-info">
                <h2 class="plat-nom">' . $platNom . '</h2>
                <p class="plat-description">' . $platDescription . '</p>
                <p class="plat-details">Calories : ' . $platCalories . ' | Protéines : ' . $platProteines . '</p>
                <p class="plat-prix">Prix : ' . $platPrix . '</p>
                <button class="plat-commander" onclick="ajouterAuPanierEtAfficher(' . $idPlat .')">Ajouter au panier</button> </div>
                </div>';
        }
    } else {
        echo "Aucun plat trouvé.";
    }

    // Fermer la connexion à la base de données
    $conn->close();
    ?>
  </div>


  <div class="cart-container" id="panierContainer">
  <!-- Le contenu du panier sera ajouté ici -->
  <div id="panier" class="panier">
        <h3>Mon Panier</h3>
        <ul id="contenuPanier" class="contenu-panier"></ul>
        <div class="actions-panier">
            <button id="btnViderPanier" class="btn-action" onclick="viderPanier()">Vider le panier</button>
            <button id="btnFermerPanier" class="btn-action" onclick="fermerPanier()">Fermer le panier</button>
            <button id="btnCommander" onclick="commander()">Commander</button>
        </div>
        <div id="messageCommande"></div>
       
    </div>
</div>


  <a href="pageAdmin.php" > page admin </a>

 
<!-- HTML du panier -->

    <section class="restaurant-info">
  <h2>Informations sur le restaurant</h2>
  <ul>
    <li><strong>Horaires d'ouverture :</strong> Du lundi au samedi, de 12h00 à 22h00</li>
    <li><strong>Adresse :</strong> 123 Rue Principale, Ville, Pays</li>
    <li><strong>Téléphone :</strong> +12 345 678 910</li>
    <li><strong>Suivez-nous :</strong> <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a></li>
  </ul>
</section>



 <script src="panier.js"></script>
</body>

</html>