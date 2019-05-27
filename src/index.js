import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/index'
import {Provider} from 'react-redux';
/*import axios from 'axios';






axios.get(`/server/movies.json`)
    .then(res => {
        for(let i=0;i<res.data.length;i++) {
            store.dispatch({
                type: "ADD",
                payload: res.data[i]
            });
        }
})

1000)*/

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
