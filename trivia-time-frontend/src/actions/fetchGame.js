export function fetchGame(configObject) {
    const BACKEND_URL = "http://localhost:3001/games"
    return (dispatch) => {
        dispatch({ type: "LOADING_GAME" });
        fetch(`${BACKEND_URL}`, configObject).then(resp => resp.json()).then(game => {
            dispatch({ type: "ADD_GAME", game: game })
        });
    }
}