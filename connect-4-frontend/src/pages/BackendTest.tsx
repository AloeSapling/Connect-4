// import { useState } from 'react';
// import { CreateGame, CreateLobby, CreateUser, JoinLobby } from '../lib/api';
// import { GameWebSocket } from '../lib/websockets';
// import * as proto from '../lib/proto.js';
// import type { AxiosError } from 'axios';
//
// export default function BackendTest() {
//     const [column, setColumn] = useState(0);
//     const [inputCode, setInputCode] = useState('');
//     const [code, setCode] = useState('');
//     const lobby = async () => {
//         const data = await CreateLobby();
//         setCode(data.code);
//     };
//     const user = async () => {
//         await CreateUser('');
//     };
//     const game = async () => {
//         try {
//             await CreateGame(code);
//         } catch (err) {}
//     };
//     const join = async () => {
//         setCode(inputCode);
//         await JoinLobby(inputCode);
//     };
//     const [ws, setWS] = useState<GameWebSocket | undefined>();
//     const init = async () => {
//         try {
//             setWS(
//                 await GameWebSocket.create(code, (ev) => {
//                     console.log(ev.data);
//                     const data = proto.ws.WSGameResponsePacket.decode(new Uint8Array(ev.data));
//                     console.log(data);
//                 })
//             );
//         } catch (err) {
//             console.error(err);
//             console.error(JSON.parse((err as Error).message));
//         }
//     };
//     const play = () => {
//         if (!ws) return;
//         ws.insertTile(column);
//     };
//     return (
//         <main>
//             <button onClick={() => lobby()}> Create Lobby </button>
//             <button onClick={() => user()}> Create User </button>
//             <button onClick={() => game()}> Create Game </button>
//             <button onClick={() => init()}> Init </button>
//             <input onChange={(e) => setInputCode(e.target.value)} value={inputCode} />
//             <button onClick={() => join()}> Join </button>
//             <input onChange={(e) => setColumn(e.target.valueAsNumber)} value={column} type={'number'} />
//             <button onClick={() => play()}> Play </button>
//         </main>
//     );
// }
