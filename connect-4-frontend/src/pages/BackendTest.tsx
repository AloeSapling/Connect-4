import { useMemo, useState } from "react";

export default function BackendTest() {
        const [column, setColumn] = useState(0);
        const [inputCode, setInputCode] = useState("");
        const [code, setCode] = useState("");
        const playerID = "PLAYER1";
        const lobby = () => {
                fetch("http://localhost:8080/lobby/create", { method: "POST", credentials: "include" }).then(val => val.json()).then((val) => {
                        console.log(val);
                        setCode(val);
                }).catch(err => console.log(err))
        };
        const user = () => {
                fetch("http://localhost:8080/user/create", { method: "POST", credentials: "include" }).catch(err => console.log(err));
        }
        const game = () => {
                fetch("http://localhost:8080/game/create", {
                        method: "POST",
                        credentials: "include",
                        headers: new Headers({ 'content-type': 'application/json' }),
                        body: JSON.stringify({
                                code: code,
                        })
                }).catch(err => console.log(err));
        }
        const join = () => {
                setCode(inputCode);
                fetch("http://localhost:8080/lobby/join", {
                        method: "POST",
                        credentials: "include",
                        headers: new Headers({ 'content-type': 'application/json' }),
                        body: JSON.stringify({
                                code: inputCode,
                        })
                }).catch(err => console.log(err));
        }
        const ws = useMemo(() => {
                const websocket = new WebSocket("ws://localhost:8080/game");
                websocket.addEventListener("message", (event) => {
                        console.log("Message from server ", event.data);
                });
                websocket.addEventListener("error", (event) => {
                        console.log("Error from server ", event);
                });
                return websocket
        }, []);
        const init = () => {
                ws.send(JSON.stringify({
                        "action": 0,
                        "init": {
                                "lobbyCode": code,
                                "playerType": playerID,
                        }
                }))
        }
        const play = () => {
                ws.send(JSON.stringify({
                        "action": 1,
                        "insertTile": {
                                "column": column,
                        }
                }))
        }
        return (
                <main>
                        <button onClick={() => lobby()}> Create Lobby </button>
                        <button onClick={() => user()}> Create User </button>
                        <button onClick={() => game()}> Create Game </button>
                        <button onClick={() => init()}> Init </button>
                        <input onChange={e => setInputCode(e.target.value)} value={inputCode} />
                        <button onClick={() => join()}> Join </button>
                        <input onChange={(e) => setColumn(e.target.valueAsNumber)} value={column} type={"number"} />
                        <button onClick={() => play()}> Play </button>
                </main>
        );
}
