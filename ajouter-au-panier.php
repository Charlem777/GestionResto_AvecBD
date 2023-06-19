<?php
// Vérifier si le plat ID est fourni en tant que paramètre
if (isset($_GET['idPlat'])) {
    // Récupérer l'ID du plat depuis les paramètres GET
    $platId = $_GET['idPlat'];

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

    // Requête SQL pour insérer le plat dans le panier
    $sql = "INSERT INTO panier (idPlat, quantite) VALUES ('$platId',1)";

    if ($conn->query($sql) === TRUE) {
        $response = array("success" => true);
        echo json_encode($response);
    } else {
        $response = array("success" => false, "error" => "Erreur lors de l'ajout du plat au panier : " . $conn->error);
        echo json_encode($response);
    }

    // Fermer la connexion à la base de données
    $conn->close();
} else {
    $response = array("success" => false, "error" => "ID du plat non spécifié.");
    echo json_encode($response);
}
?>
