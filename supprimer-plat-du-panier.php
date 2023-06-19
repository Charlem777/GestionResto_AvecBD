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

// Récupérer l'ID du plat à supprimer du panier
$idPlat = $_GET['idPlat'];

// Requête SQL pour supprimer le plat du panier
$sql = "DELETE FROM panier WHERE idPlat = $idPlat";

if ($conn->query($sql) === TRUE) {
    $response = array('success' => true);
} else {
    $response = array('success' => false, 'error' => "Erreur lors de la suppression du plat du panier.");
}

// Fermer la connexion à la base de données
$conn->close();

// Retourner la réponse au format JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
