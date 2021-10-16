export default function statsReducer(
    state = {
        gamesPlayed: "",
        favCategory: "",
        favDifficulty: "",
        questionsAnswered: "",
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
                gamesPlayed: action.stats.games_played,
                favCategory: action.stats.fav_category,
                favDifficulty: action.stats.fav_difficulty,
                questionsAnswered: action.stats.questions_answered,
                avgCorrect: action.stats.avg_correct,
                loading: false
            };

        default:
            return state;
    }
}