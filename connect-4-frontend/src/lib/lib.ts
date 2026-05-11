import { toast } from 'sonner';
import * as proto from './proto.js';

/** Decodes the recieved error and displays it using a toast */
function HandleFetchError(err: ArrayBuffer) {
	const decodedData = proto.shared.CodedError.decode(new Uint8Array(err));

	toast.error(decodedData.toJSON()["code"]);
}

export { HandleFetchError };
