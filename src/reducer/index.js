const initialMoviesState = {
    movies: []
}
const movieReducer = (state = initialMoviesState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                movies: [
                    ...state.movies,
                    action.payload
                ]
            };
            break;
        default:
            break;
    }
    return state;
};

export default movieReducer