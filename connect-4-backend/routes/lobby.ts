import { Router } from "express";
import { createLobby, getAllLobbies, getSpecificLobby } from "../database/lobby.ts";
import { CodedError } from "../lib/types.ts";
import { validateLobbyCode } from "../lib/lib.ts";

const router = Router();

router.get('/', (req, res) => {
  // Search params can include the code (to get a specific lobby) or include filters for the list of lobbies
  if(req.query.code){
    // Validate the code
    if(!validateLobbyCode(req.query.code.toString())){
      res.status(400).json(new CodedError("BadLobbyCode"));
    }

    try{
      res.json(getSpecificLobby(req.query.code.toString()));
    }catch{
      res.status(500).json(new CodedError("ServerError"));
    }
  }
  // If no code was provided, return all lobbies
  else{
    try{
      res.json(getAllLobbies());
    }catch{
      res.status(500).json(new CodedError("ServerError"));
    }
  }
})

router.get('/create/', (req, res) => {
  // Create a new lobby and return the associated code
  try{
    const code  = createLobby();
    console.log(code);
    res.send(code);
  }catch{
    res.status(500).json(new CodedError("ServerError"));
  }
});

export default router;