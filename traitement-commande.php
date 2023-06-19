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

// Vérifier si les données du formulaire ont été soumises
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérer les valeurs du formulaire
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $adresse = $_POST["adresse"];
    $numero = $_POST["numero"];
    $email = $_POST["email"];

    // Insérer les données dans la table "client"
    $sqlClient = "INSERT INTO client (nom, prenom, adresse, numero, email) VALUES ('$nom', '$prenom', '$adresse', '$numero', '$email')";
    if ($conn->query($sqlClient) === TRUE) {
        // Récupérer l'ID du client inséré
        $clientId = $conn->insert_id;

        // Récupérer le contenu du panier depuis la table "panier"
        $sqlPanier = "SELECT * FROM panier INNER JOIN Plats ON panier.idPlat = Plats.idPlat";
        $resultPanier = $conn->query($sqlPanier);

        if ($resultPanier->num_rows > 0) {
            // Parcourir les résultats du panier
            while ($row = $resultPanier->fetch_assoc()) {
                $idPlat = $row['idPlat'];
                $nomPlat = $row['nomPlat'];
                $quantite = $row['quantite'];

                // Insérer les données dans la table "commande"
                $sqlCommande = "INSERT INTO commande (idClient, idPlat, nomPlat, quantite) VALUES ('$clientId', '$idPlat', '$nomPlat', '$quantite')";
                $conn->query($sqlCommande);
            }

            // Vider le panier en supprimant toutes les entrées de la table "panier"
            $sqlViderPanier = "DELETE FROM panier";
            $conn->query($sqlViderPanier);

            // Fermer la connexion à la base de données
            $conn->close();

            // Rediriger vers une page de confirmation de commande ou afficher un message de succès
            header("Location: confirmation-commande.php");
            exit();
        } else {
            // Aucun plat dans le panier
            echo "Le panier est vide.";
        }
    } else {
        // Erreur lors de l'insertion dans la table "client"
        echo "Erreur lors de la création du client : " . $conn->error;
    }
}
?>
