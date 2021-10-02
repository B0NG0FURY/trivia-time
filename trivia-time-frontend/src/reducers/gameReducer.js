export default function gameReducer(
    state = {
        category: "",
        difficulty: "",
        questions: [],
        requesting: false
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
                requesting: false
            };

        case "START_ADDING_GAME_REQUEST":
            return {
                ...state,
                requesting: true
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