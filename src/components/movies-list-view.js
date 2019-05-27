import React from 'react';
import { Redirect } from 'react-router';

class MovieListView extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }
    handleOnClick = () => {
        this.setState({redirect: true});
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to={"/movie-detail/"+this.props.id} />;
        }
        let RatingMarkup = [];
        for(let i=0;i<5;i++) {
            if(this.props.rating > i)
                {RatingMarkup.push(<i key={i} className="fas fa-star ps-rating-Active"></i>);}
            else
                {RatingMarkup.push(<i key={i} className="fas fa-star"></i>);}
        }
        return (
            <div className="ps-Movie-Tab-Box ps-Clear-Fix">
                <div className="ps-Movie-Tab-Img-Box">
                    <img alt="img" src={this.props.img}/>
                </div>

                <div className="ps-Movie-Tab-Detail-Box">
                    <h2>{this.props.title}</h2>
                    <p>
                        {this.props.detail}
                    </p>

                    <div className="ps-Movie-Rat-Box">
                        <h6>Ratings</h6>
                        {RatingMarkup}
                         <span>({this.props.rating})</span>
                    </div>

                    <button className="ps-More-bnt" onClick={this.handleOnClick}>Show More <i className="fas fa-angle-double-right"></i></button>
                </div>
            </div>
        )
    }
}

export default MovieListView;