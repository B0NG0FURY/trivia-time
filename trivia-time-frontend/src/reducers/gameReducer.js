export default function gameReducer(
    state = {
        category: "",
        difficulty: "",
        questions: [],
        answered: 0,
        correct: 0,
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
            };

        case "REMOVE_GAME":
            return {
                ...state,
                category: "",
                difficulty: "",
                questions: []
            };

        case "ANSWERED_CORRECT":
            let answered = state.answered + 1;
            let correct = state.correct + 1;
            return {
                ...state,
                answered: answered,
                correct: correct
            };

        case "ANSWERED_INCORRECT":
            let increase = state.answered + 1;
            return {
                ...state,
                answered: increase
            }

        default:
            return state;
    }
}