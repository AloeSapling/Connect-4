# Overview
This is a project built using React and Express.

It allows 2 users to play connect-4 live online.

# Backend API reference
## /lobby/ 
Methods: **GET**; <br>
Response: **200, 400, 500**; <br>
Parameters: **"code"**; <br>
Description: **Returns all the lobbies or if supplied with a code, returns the lobby with that code. Returns null/status 400 if that lobby isn't found**;
## /lobby/create/
Methods: **POST, PUT**; <br>
Response: **204, 500**; <br>
Auth: **Must be a user**; <br>
Description: **Creates a new lobby and returns the associated lobby code**;
## /game/
Methods: **GET**; <br>
Response: **200, 400, 500**; <br>
Parameters: **"code"**; <br>
Auth: **User must be a part of the associated game / lobby**; <br>
Description: **Returns the gamestate of the game with the associated lobby code**;
## /game/create/
Methods: **GET**; <br>
Response: **204, 500**; <br>
Parameters: **"code"**; <br>
Auth: **User must be the host of the associated lobby**; <br>
Description: **Creates / starts a game using the provided lobby cod**e
