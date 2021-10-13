export default function statsReducer(
    state = {
        gamesPlayed: "",
        favCategory: "",
        favDifficulty: "",
        totalAnswered: "",
        avgCorrect: ""
    },
    action
) {
    switch(action.type) {
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