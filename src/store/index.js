import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import movieReducer from '../reducer/index';
import axios from "axios";

const store = createStore(
    movieReducer,
    applyMiddleware(logger)
);

axios.get(`/server/movies.json`)
    .then(res => {
        for(let i=0;i<res.data.length;i++) {
            store.dispatch({
                type: "ADD",
                payload: res.data[i]
            });
        }
    })

export default store