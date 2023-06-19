<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gestionresto";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connexion échouée : " . $conn->connect_error);
}

$sql = "DELETE FROM panier"; // Supprime toutes les lignes de la table "panier"

if ($conn->query($sql) === TRUE) {
  $response = array('success' => true);
  echo json_encode($response);
} else {
  $response = array('success' => false, 'error' => "Erreur lors de la suppression du panier : " . $conn->error);
  echo json_encode($response);
}

$conn->close();
?>
