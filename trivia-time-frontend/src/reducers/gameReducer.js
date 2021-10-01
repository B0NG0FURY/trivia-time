export default function gameReducer(
    state = {
        category: "",
        difficulty: "",
        questions: []
    },
    action
) {
    switch(action.type) {
        case "ADD_GAME":
            return {
                ...state,
                category: action.game.category,
                difficulty: action.game.difficulty,
                questions: action.game.questions
            };

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