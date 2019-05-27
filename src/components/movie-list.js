import React from 'react';
import MovieListView from "./movies-list-view";
import Head from "./head";
import {connect} from "react-redux";

class MovieList extends React.Component {

    render() {
        return (
            <div style={{minHeight: '100vh'}}>
                <Head/>
                {
                    this.props.MoviesData.map((data,inx) => (
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
export default connect(mapStateToProps)(MovieList)