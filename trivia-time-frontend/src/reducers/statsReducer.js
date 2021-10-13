export default function statsReducer(
    state = {
        gamesPlayed: "",
        favCategory: "",
        favDifficulty: "",
        totalAnswered: "",
        avgCorrect: "",
        loading: false
    },
    action
) {
    switch(action.type) {
        case "LOADING_STATS":
            return {
                ...state,
                loading: true
            }
            
        case "ADD_STATS":
            return {
                ...state,
                gamesPlayed: action.gamesPlayed,
                favCategory: action.favCategory,
                favDifficulty: action.favDifficulty,
                totalAnswered: action.totalAnswered,
                avgCorrect: action.avgCorrect
            };

        default:
            return state;
    }
}