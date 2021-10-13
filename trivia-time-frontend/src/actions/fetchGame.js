import { BACKEND_URL } from "../api/backendUrl";

export function fetchGame(configObject) {
    return (dispatch) => {
        dispatch({ type: "LOADING_GAME" });
        fetch(`${BACKEND_URL}`, configObject).then(resp => resp.json()).then(game => {
            dispatch({ type: "ADD_GAME", game: game })
        });
    }
}