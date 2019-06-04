import React, { Component } from 'react';
// import { throwStatement } from '@babel/types';

class SearchBar extends Component{
    state = {term: ''};
    

    onFormSubmit = event => {
        event.preventDefault();
        console.log('hit onFormSubmit')
        this.props.onSubmit(this.state.term)
    }


    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e)=>this.setState({term : e.target.value})}/>
                        {/* alt what to do above line */}
                        {/* <input type="text"  onChange={(event) => console.log(event.target.value)}/> */}

                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;