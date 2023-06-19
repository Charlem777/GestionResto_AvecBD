
<html>
<div class="body" >

      <head>
        <title>Réservation de restaurant</title>
      </head>
      
      <body >
        <h1>Réservation de restaurant</h1>
        <form>
            <label for="nom">Nom</label>
            <input placeholder="Ex. Kouadio" type="text" id="nom" name="nom" required><br><br>
            <label for="nom">Prenom</label>
            <input placeholder="Ex. Ismail" type="text" id="prenom" name="prenom" required><br><br>
    
          <label for="email">E-mail </label>
          <input placeholder="Ex. abc@gmail.com" type="email" id="email" name="email" required><br><br>
    
          <label for="telephone">Téléphone </label>
          <input  type="tel" id="telephone" name="telephone" required><br><br>
    
          <label for="date">Date </label>
          <input type="date" id="date" name="date" required><br><br>
    
          <label for="heure">Heure </label>
          <input type="time" id="heure" name="heure" required><br><br>
    
          <label for="personnes">Nombre de personnes </label>
          <input type="number" id="personnes" name="personnes" min="1" max="10" required><br><br>
    
          <label for="message">Commentaire </label><br>
          <textarea id="message" name="message" rows="4" cols="50"></textarea><br><br>
    
          <input type="submit" value="Envoyer">
          <input type="reset" value="Effacer">
        </form>
      </body>
   </div> 
   </html>