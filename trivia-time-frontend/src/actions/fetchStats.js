import { USER_URL } from '../api/userUrl';

export function fetchStats(userId, configObject) {
    return (dispatch) => {
        dispatch({ type: "LOADING_STATS" });
        fetch(`${USER_URL}/${userId}/stats`, configObject).then(resp => resp.json()).then(stats => {
            dispatch({ type: "ADD_STATS", stats: stats })
        });
    }
}