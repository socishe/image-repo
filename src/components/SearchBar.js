import React, { Component } from 'react'

 class SearchBar extends Component {
    state = {
         term: ""
     }

    handleOnChange=(e)=>{
        this.setState({
            term: e.target.value
        })
     }
     handleOnSubmit=(e)=>{
         e.preventDefault();
         this.props.onSubmit(this.state.term)
     }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleOnSubmit}>
                    <div className="field">
                    <label> Image Search</label>
                    <input type="text" value={this.state.term} onChange={this.handleOnChange} />
                    </div>
                    
                </form>
            </div>
        )
    }
}
export default SearchBar;