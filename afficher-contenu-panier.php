<?php
// Connexion à la base de données et récupération du contenu du panier
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestionresto";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée : " . $conn->connect_error);
}

// Requête SQL pour récupérer le contenu du panier
$sql = "SELECT p.idPlat, p.nomPlat, p.prix, pa.quantite FROM panier pa INNER JOIN Plats p ON pa.idPlat = p.idPlat";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Tableau pour stocker les plats du panier
    $contenuPanier = array();

    // Parcourir les résultats de la requête
    while ($row = $result->fetch_assoc()) {
        // Ajouter chaque plat au tableau du contenu du panier
        $plat = array(
            'id' => $row['idPlat'],
            'nom' => $row['nomPlat'],
            'quantite' => $row['quantite']
            
        );
        $contenuPanier[] = $plat;
    }

    // Formatage des données en JSON
    $response = array('success' => true, 'contenuPanier' => $contenuPanier);
    echo json_encode($response);
} else {
    // Panier vide
    $response = array('success' => true, 'contenuPanier' => array());
    echo json_encode($response);
}

// Fermer la connexion à la base de données
$conn->close();
?>
