export default function gameReducer(
    state = {
        category: "",
        difficulty: "",
        questions: [],
        loading: false
    },
    action
) {
    switch(action.type) {
        case "ADD_GAME":
            return {
                ...state,
                category: action.game.category,
                difficulty: action.game.difficulty,
                questions: action.game.questions,
                loading: false
            };

        case "LOADING_GAME":
            return {
                ...state,
                loading: true
            }

        case "REMOVE_GAME":
            return {
                ...state,
                category: "",
                difficulty: "",
                questions: []
            };

        default:
            return state;
    }
}