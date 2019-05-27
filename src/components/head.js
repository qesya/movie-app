import React from 'react';
import { Redirect } from 'react-router';

class Head extends React.Component {
    shouldComponentUpdate() {
        return true
    }
    constructor() {
        super();
        this.state = {
            redirect: false,
            input: ''
        }
    }
    onclickHandler = () => {
        this.setState({redirect: true});
    }
    render() {
        let renderBtn;
        if(window.location.pathname.substring(1,7) === 'search') {
            renderBtn = (<button onClick={this.onclickHandler} style={{display: 'none'}} className="ps-Search-btn"><i className="fas fa-search"></i></button>)
        }
        else {
            renderBtn = (<button onClick={this.onclickHandler} className="ps-Search-btn"><i className="fas fa-search"></i></button>)
        }
        if (this.state.redirect) {
            return <Redirect push to={"/search/"+this.state.input} />;
        }
        return (
            <nav className="ps-Side-Nav ps-Clear-Fix">
                <div className="ps-Nav-Input-Container ps-Clear-Fix">
                    <h1 className="ps-Site-Head">
                        <span>M</span><span>o</span><span>v</span><span>i</span><span>e</span><span>s</span></h1>
                    <input className="ps-Search-Input" value={this.state.input} onChange={(e) => {this.setState({input: e.target.value})}} type="text"/>
                    {renderBtn}

                </div>
            </nav>
        )
    }
}

export default Head;