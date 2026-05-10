import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Username() {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    // placeholder
    const submitUserName = () => {
        if (userName != "") {
            navigate("/lobbylist");
        }
    }

    return (
        <div className="bg-yellow-800 text-white text-center justify-center content-center text-xl rounded-md grid grid-cols-1 gap-y-2
            absolute w-[300px] md:w-[350px] h-[150px] md:h-[200px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p className="text-2xl md:text-3xl justify-self-center-safe">Choose your username</p>
            <div className="inline-block bg-amber-900 w-[70%] justify-self-center-safe rounded-md p-[5px]">
                <label className="mr-[5%]">Name:</label>
                <input className="w-[70%] rounded-md bg-yellow-950 focus:bg-amber-950"
                    type="text"
                    placeholder="username"
                    onChange={e => setUserName(e.target.value)}
                    value={userName}>
                </input>
            </div>

            <button className="w-[30%] justify-self-center-safe bg-amber-900 h:bg-amber-950 cursor-pointer rounded-lg"
                onClick={submitUserName}>
                OK
            </button>
        </div>
    )
}

export default Username;