export default function userReducer(
    state = {
        logged_in: false,
        username: "",
        id: ""
    },
    action
) {
    switch(action.type) {
        case "ADD_USER":
            return {
                ...state,
                logged_in: action.user.logged_in,
                username: action.user.username,
                id: action.user.id
            };

        case "REMOVE_USER":
            return {
                ...state,
                logged_in: false,
                username: "",
                id: ""
            };

        default:
            return state;
    }
}