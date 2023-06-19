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

// Récupérer l'ID du plat et la nouvelle quantité
$idPlat = $_GET['idPlat'];
$nouvelleQuantite = $_GET['quantite'];

// Requête SQL pour mettre à jour la quantité du plat dans le panier
$sql = "UPDATE panier SET quantite = $nouvelleQuantite WHERE idPlat = $idPlat";

if ($conn->query($sql) === TRUE) {
    $response = array('success' => true);
} else {
    $response = array('success' => false, 'error' => "Erreur lors de la modification de la quantité du plat.");
}

// Fermer la connexion à la base de données
$conn->close();

// Retourner la réponse au format JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
