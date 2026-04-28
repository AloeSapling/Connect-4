import { ErrorCodes } from "../../errorCodes";

class CodedError
{
    constructor(_code: ErrorCodes, _error?: Error){
        this.code = _code;
        this.error = _error ?? new Error(_code);
    }

    code: ErrorCodes;
    error: Error;
}

export { CodedError }