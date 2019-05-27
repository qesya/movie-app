import React from 'react';
import { Redirect } from 'react-router';
import Head from "./head";


class MovieDetailView extends React.Component {
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
        let RatingMarkup = [];
        for(let i=0;i<5;i++) {
            if(this.props.rating > i)
                RatingMarkup.push(<i key={i} className="fas fa-star ps-rating-Active"></i>);
            else
                RatingMarkup.push(<i key={i} className="fas fa-star"></i>);
        }
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        return (
            <div style={{minHeight: '100vh'}}>
                <Head/>
            <div className="ps-Movie-Tab-Box-Single ps-Clear-Fix">
                <div className="ps-Movie-Tab-Img-Box-Single">
                    <img src={this.props.img} alt="img" />
                </div>

                <div className="ps-Movie-Tab-Detail-Box-Single">
                    <h1>{this.props.title}</h1>
                    <p>
                        {this.props.detail}
                    </p>

                    <div className="ps-Movie-Actor-Cast ps-Clear-Fix">
                        <h3>Cast</h3>
                        {
                            this.props.cast.map((data,inx) => (
                                <div key={inx} className="ps-More-Cast-Child">
                                    <img src={data.img} alt="img" />
                                    <h6>{data.name}</h6>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className="ps-Single-Bottom-Box ps-Clear-Fix">

                    <div className="ps-Movie-Rat-Box-Single">
                        <h3>Ratings</h3>
                        {RatingMarkup}
                        <span>({this.props.rating})</span>
                    </div>

                    <div className="ps-Clear-Fix" style={{float: 'right'}} >

                        <button className="ps-More-bnt-Single" onClick={this.handleOnClick} style={{margin: '15px', bottom: '0px'}}>Back to Home <i
                            className="fas fa-home"></i></button>
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default MovieDetailView;