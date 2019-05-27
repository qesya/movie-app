import React from 'react';
import Head from './head'
import MovieListView from "./movies-list-view";
import {connect} from "react-redux";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.MoviesData,
            finds: []
        }
        setTimeout(() => {
            var a = this.state.movies;
            var teststrings = [];
            teststrings.push(this.props.match.params.search);


            function matcher(regexp) {
                return function (obj) {
                    var found = false;
                    Object.keys(obj).forEach(function(key){
                        if ( ! found) {
                            if ((typeof obj[key] == 'string') && regexp.exec(obj[key])) {
                                found = true;
                            }
                        }
                    });
                    return found;
                };
            }

            teststrings.forEach((needle) => {
                /*console.log('searching for: %s', needle);*/
                var re1 = new RegExp("\\b" + needle + "\\b", 'i');
                var matches = a.filter(matcher(re1));
                /*console.log('found count: %s', matches.length);
                console.log('found: %s', JSON.stringify(matches));*/
                this.setState({
                    finds: matches
                })
            });

           /* console.log(this.state.finds)
            console.log(this.state.movies)*/
        },1000)

    }
    render() {
        return (
            <div style={{minHeight: '100vh'}}>
                <Head/>
                <h2 style={{marginLeft: '20px'}}>Results For: {this.props.match.params.search}</h2>
                {
                    this.state.finds.map((data,inx) => (
                        <MovieListView key={inx} id={data.id} title={data.title} detail={data.detail} img={data.img} rating={data.rating} cast={data.cast} />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        MoviesData: state.movies
    };
};
export default connect(mapStateToProps)(Search)