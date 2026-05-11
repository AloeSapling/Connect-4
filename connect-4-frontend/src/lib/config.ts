import 'dotenv';

export const SERVER_URL = import.meta.env.SERVER_URL ?? "http://localhost:8080/";
export const SERVER_URL_WS = import.meta.env.SERVER_URL_WS ?? "ws://localhost:8080";
