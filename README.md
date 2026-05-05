# Overview
This is a project built using React and Express.

It allows 2 users to play connect-4 live online.

# Backend API reference
## /lobby/ 
Methods: **GET**; <br>
Response: **200, 400, 500**; <br>
Parameters: **"code"**; <br>
Auth: **Must be a user**; <br>
Description: **Returns all the lobbies or if supplied with a code, returns the lobby with that code**;
## /lobby/create/
Methods: **POST, PUT**; <br>
Response: **201, 500**; <br>
Auth: **Must be a user**; <br>
Description: **Creates a new lobby and returns the associated lobby code**;
## /game/
Methods: **GET**; <br>
Response: **200, 400, 500**; <br>
Parameters: **"code"**; <br>
Auth: **User must be a part of the associated game / lobby**; <br>
Description: **Returns the gamestate of the game with the associated lobby code**;
## /game/create/
Methods: **POST, PUT**; <br>
Response: **201, 400, 500**; <br>
Parameters: **"code"**; <br>
Auth: **User must be the host of the associated lobby**; <br>
Description: **Creates / starts a game using the provided lobby code**;
## /user/create/
Methods: **POST, PUT**; <br>
Response: **201, 500**; <br>
Description: **Creates a new user and ties it with the client's session id**;
## /user/getAll/
Methods: **GET**; <br>
Response: **200, 500**; <br>
Description: **Gets a list of all active users. Meant for the development environment only - REMOVE IN PRODUCTION**
