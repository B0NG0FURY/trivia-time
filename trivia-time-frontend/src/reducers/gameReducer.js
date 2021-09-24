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
                category: action.category,
                difficulty: action.difficulty,
                questions: action.questions
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