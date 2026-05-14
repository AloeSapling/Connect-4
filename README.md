# Overview
This is a project built using React and Express.

It allows 2 users to play connect-4 live online.

# ERROR CODES reference
**Unspecified** - This error code remains unused<br>
**Server_error** - A server-side error occured<br>
**Bad_data** - The body or some other data is malformed<br>
**Bad_turn** - The user is trying to act outside of their turn<br>
**Bad_user** - Something is incorrect about the specified user e.g. They're inactive<br>
**Unauthorised** - The user is not allowed to perform this action<br>
**Already_joined** - The user is already part of the room/game/lobby/..ect they're trying to join<br>
**Not_a_member** - The user is not a member of some room/game/lobby/..ect they need to be a part of to perform this action<br>
**Game_locked** - The game the user is trying to interact with is locked and unable to be accessed or changed<br>
**Game_expired** - The game has expired or was never created<br>
**Game_already_exist**s - The user is trying to create a game when one already exists<br>
**Doesnt_exist** - The item the user is trying to access or change doesn't exist<br>
**User_already_exsits** - The user already has an account associated with their session id<br>

# Backend API reference
## /lobby/ 
Methods: **GET**; <br>
Response: **200, 400, 401, 500**; <br>
Parameters: **"code"**; <br>
Auth: **Must be a user**; <br>
Description: **Returns all the lobbies**; <br>
Error codes: 
- unauthorised
- server_error
## /lobby/create/
Methods: **POST, PUT**; <br>
Response: **201, 400, 401, 500**; <br>
Parameters: **lobbyName**; <br>
Auth: **Must be a user**; <br>
Description: **Creates a new lobby and returns the associated lobby code**; <br>
Error codes:
- unauthorised
- bad_data
- bad_name
- server_error
## /lobby/:code/join/
Methods: **POST, PUT**; <br>
Response: **200, 400, 401, 500**; <br>
Auth: **Must be a user and a member of the lobby**; <br>
Description: **Joins the lobby associated with the provided code**; <br>
Error codes:
- unauthorised
- doesnt_exist
- server_error
## /lobby/:code/leave/
Methods: **POST, PUT, DELETE**; <br>
Response: **204, 400, 401, 500**; <br>
Auth: **Must be a user and a member of the lobby**; <br>
Description: **Leaves the lobby associated with the provided code**; <br>
Error codes:
- unauthorised
- doesnt_exist
- server_error
## /lobby/:code/changePlayerID/
Methods: **POST, PUT**; <br>
Response: **200, 400, 401, 500**; <br>
Parmaters: **userId, playerId**; <br>
Auth: **Must be a user and the host of the lobby**; <br>
Description: **Changes the player id of the specified user**; <br>
Error codes:
- unauthorised
- bad_data
- doesnt_exist
- bad_user
- server_error
## /lobby/:code/details/
Methods: **GET**; <br>
Response: **200, 400, 401, 500**; <br>
Auth: **Must be a user and a member of the lobby**; <br>
Description: **Gets detailed data about the specified lobby**; <br>
Error codes:
- unauthorised
- doesnt_exist
- server_error
## /game/:code/
Methods: **GET**; <br>
Response: **200, 400, 500**; <br>
Auth: **Must be a user and a member of the lobby**; <br>
Description: **Returns the gamestate of the game with the associated lobby code**; <br>
Error codes:
- unauthorised
- doesnt_exist
- server_error
- game_expired
- game_locked
## /game/:code/create/
Methods: **POST, PUT**; <br>
Response: **201, 400, 500**; <br>
Auth: **Must be a user and the host of the lobby**; <br>
Description: **Creates / starts a game using the provided lobby code**; <br>
Error codes:
- unauthorised
- doesnt_exist
- server_error
- game_already_exists
## /user/create/
Methods: **POST**; <br>
Parmaeters: **username**; <br>
Response: **201, 400, 409, 500**; <br>
Description: **Creates a new user and ties it with the client's session id**; <br>
Error codes:
- bad_data
- bad_name
- user_already_exists
- server_error
## /user/changeUsername/
Methods: **POST, PATCH**; <br>
Parmaeters: **username**; <br>
Response: **200, 400, 500**; <br>
Auth: **Must be a user**; <br>
Description: **Changes the username of the user**; <br>
Error codes:
- unauthorised
- bad_data
- bad_name
- server_error
## /user/getAll/
Methods: **GET**; <br>
Response: **200, 500**; <br>
Description: **Gets a list of all active users. Meant for the development environment only - REMOVE IN PRODUCTION**
