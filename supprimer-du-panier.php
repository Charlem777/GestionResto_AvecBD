<?php
if (isset($_GET['idPlat'])) {
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

    // Requête SQL pour supprimer le plat du panier
    $sql = "DELETE FROM panier WHERE idPlat = '$platId'";

    if ($conn->query($sql) === TRUE) {
        // Succès de la suppression du plat du panier
        $response = array('success' => true);
        echo json_encode($response);
    } else {
        // Erreur lors de la suppression du plat du panier
        $response = array('success' => false, 'error' => "Erreur lors de la suppression du plat du panier : " . $conn->error);
        echo json_encode($response);
    }

    // Fermer la connexion à la base de données
    $conn->close();
} else {
    // ID du plat non spécifié
    $response = array('success' => false, 'error' => "ID du plat non spécifié.");
    echo json_encode($response);
}
?>
