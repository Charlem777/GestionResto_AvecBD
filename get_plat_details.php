<?php
// Inclure le fichier de configuration de la base de données
require_once 'config.php';

// Vérifier si l'ID du plat est passé en paramètre et est un entier valide
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $platId = $_GET['id'];

    // Requête SQL pour récupérer les détails du plat en fonction de l'ID
    $sql = "SELECT idPlat, nomPlat, description, calories, proteines, prix, image FROM Plats WHERE idPlat = ?";

    // Préparer la requête SQL
    $stmt = mysqli_prepare($conn, $sql);

    // Vérifier si la préparation de la requête a réussi
    if ($stmt) {
        // Lier le paramètre à la requête
        mysqli_stmt_bind_param($stmt, "i", $platId);

        // Exécuter la requête préparée
        mysqli_stmt_execute($stmt);

        // Récupérer les résultats de la requête
        $result = mysqli_stmt_get_result($stmt);

        // Vérifier si le plat a été trouvé
        if ($result && mysqli_num_rows($result) > 0) {
            // Récupérer les détails du plat dans un tableau associatif
            $plat = mysqli_fetch_assoc($result);

            // Convertir le tableau associatif en format JSON
            $jsonPlat = json_encode($plat);

            // Envoyer la réponse JSON
            header('Content-Type: application/json');
            echo $jsonPlat;
        } else {
            // Le plat n'a pas été trouvé
            echo json_encode(['error' => 'Plat non trouvé']);
        }

        // Fermer la requête préparée
        mysqli_stmt_close($stmt);
    } else {
        // Erreur de préparation de la requête
        echo json_encode(['error' => 'Erreur de préparation de la requête']);
    }
} else {
    // ID du plat manquant ou invalide
    echo json_encode(['error' => 'ID du plat invalide']);
}

// Fermer la connexion à la base de données
mysqli_close($conn);
?>
