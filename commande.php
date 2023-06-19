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

// Vérifier si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $adresse = $_POST['adresse'];
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];

    // Valider et traiter les données du formulaire

    // ...

    $sqlInsertClient = "INSERT INTO client (nom, prenom, adresse, telephone, email)
    VALUES ('" . mysqli_real_escape_string($conn, $nom) . "', '" . mysqli_real_escape_string($conn, $prenom) . "', '" . mysqli_real_escape_string($conn, $adresse) . "', '" . mysqli_real_escape_string($conn, $telephone) . "', '" . mysqli_real_escape_string($conn, $email) . "')";

    if ($conn->query($sqlInsertClient) === TRUE) {
        $idClient = $conn->insert_id; // Récupérer l'ID du client inséré

        // Requête SQL pour récupérer le contenu du panier
        $sqlContenuPanier = "SELECT Plats.idPlat, Plats.nomPlat AS nomPlat, panier.quantite, Plats.prix FROM panier
                    JOIN Plats ON Plats.idPlat = panier.idPlat";

        $resultContenuPanier = $conn->query($sqlContenuPanier);

        if ($resultContenuPanier === false) {
            echo "Erreur lors de la récupération du contenu du panier : " . $conn->error;
        } else {
            // Récupérer les données et les stocker dans $contenuPanier
            $contenuPanier = array();
            while ($row = $resultContenuPanier->fetch_assoc()) {
                $contenuPanier[] = $row;
            }
        }

        // Insérer les données de la commande dans la table "commander"
        foreach ($contenuPanier as $plat) {
            $idPlat = $plat['idPlat'];
            $nomPlat = $plat['nomPlat'];
            $quantite = $plat['quantite'];
            $prixTotal = $plat['quantite'] * $plat['prix'];

            $sqlInsertCommande = "INSERT INTO commander (idPlat, nomPlat, quantite, idClient, prixTotal)
               VALUES ('$idPlat', '$nomPlat', '$quantite', '$idClient', '$prixTotal')";

            if ($conn->query($sqlInsertCommande) !== TRUE) {
                // Gérer les erreurs d'insertion dans la table "commander"
                echo "Erreur lors de l'insertion des données de la commande : " . $conn->error;
            }
        }

        // Vider le panier après la commande
        $sqlViderPanier = "DELETE FROM panier";
        // Après avoir inséré les données de la commande avec succès
if ($conn->query($sqlViderPanier) === TRUE) {
    // Rediriger vers une page de confirmation de commande
    header("Location: confirmation-commande.php");
    exit(); // Terminer le script pour éviter toute exécution supplémentaire
} else {
    echo "Erreur lors de la suppression du panier : " . $conn->error;
}
    }}
?>


<!DOCTYPE html>
<html>
<head>
    <title>Commande</title>
</head>
<body>
    <h1>Commande</h1>

    <h2>Contenu du panier :</h2>
    <div id="contenuPanier">
        <?php
        // Requête SQL pour récupérer le contenu du panier
        $sql = "SELECT Plats.idPlat AS nomPlat, panier.quantite FROM panier
                JOIN Plats ON Plats.idPlat = panier.idPlat";

        $result = $conn->query($sql);

        if ($result === false) {
            echo "Erreur lors de la récupération du contenu du panier : " . $conn->error;
        } else {
            // Récupérer les données et les afficher
            while ($row = $result->fetch_assoc()) {
                echo "Nom du plat : " . $row["nomPlat"] . "<br>";
                echo "Quantité : " . $row["quantite"] . "<br>";
                echo "<br>";
            }
        }
        ?>
    </div>

    <h2>Renseignements du client :</h2>
    <form method="POST" action="commande.php">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required><br><br>

        <label for="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" required><br><br>

        <label for="adresse">Adresse :</label>
        <textarea id="adresse" name="adresse" required></textarea><br><br>
        
        <label for="telephone">Téléphone :</label>
        <input type="tel" id="telephone" name="telephone" required><br><br>

        <label for="email">E-mail :</label>
        <input type="email" id="email" name="email" required><br><br>

        <input type="submit" value="Passer la commande">
    </form>
</body>
</html>
