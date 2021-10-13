import { USER_URL } from '../api/userUrl';

export function fetchStats(userId) {
    return (dispatch) => {
        dispatch({ type: "LOADING_STATS" });
        fetch(`${USER_URL}/${userId}/stats`).then(resp => resp.json()).then(stats => {
            dispatch({ type: "ADD_STATS", stats: stats })
        });
    }
}