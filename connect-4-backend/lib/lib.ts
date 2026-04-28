import { randomInt } from "crypto";

const ALL_CODE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789" as const;
const CODE_LENGTH = 8 as const;

function createLobbyCode() : string{
    let code = "";
    for(let i=0; i<CODE_LENGTH;i++)
        code += ALL_CODE_CHARS[randomInt(0, ALL_CODE_CHARS.length)];
    return code;
}
function validateLobbyCode(code: string): boolean{
    if(code.length !== CODE_LENGTH) return false;
    // for(let i=0; i<CODE_LENGTH;i++){
    //     // Check if the code is comprised of only valid characters
    //     if(!ALL_CODE_CHARS.includes(code[i]))
    //         return false;
    // }
    return true;
}

export { createLobbyCode, validateLobbyCode };