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

// Requête SQL pour insérer la commande dans la table "commander"
$sql = "INSERT INTO commander (idPlat, quantite) SELECT idPlat, quantite FROM panier";
if ($conn->query($sql) === TRUE) {
    // Commande effectuée avec succès
    // Vider le panier après la commande
    $sqlDelete = "DELETE FROM panier";
    $conn->query($sqlDelete);
    $response = array('success' => true, 'message' => "Commande effectuée avec succès !");
} else {
    // Erreur lors de l'insertion de la commande
    $response = array('success' => false, 'error' => "Erreur lors de la commande.");
}

// Fermer la connexion à la base de données
$conn->close();

echo json_encode($response);
?>
