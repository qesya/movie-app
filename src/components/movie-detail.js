import React from 'react';
import MovieDetailView from './movie-detail-view'
import {connect} from "react-redux";

class MovieDetail extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.MoviesData.map((data,inx) => {
                        if(data.id === this.props.match.params.id)
                            return <MovieDetailView key={inx} title={data.title} img={data.img} detail={data.detail} cast={data.cast} rating={data.rating} />
                        else
                            return ''
                    })
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        MoviesData: state.movies
    };
};
export default connect(mapStateToProps)(MovieDetail)