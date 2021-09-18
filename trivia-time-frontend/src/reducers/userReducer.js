function userReducer(
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
                logged_in: true,
                username: action.user.username,
                id: action.user.id
            };

        default:
            return state;
    }
}