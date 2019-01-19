import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }


    handleChange = event => {
        this.setState({
            keyword: event.target.value
        })
    }
    searchCar = event => {
        event.preventDefault();
        console.log(this.state);
    }
    componentDidMount() {
        console.log(this.state);
    }

    render() {
        return (
            <div className='main-search'>
                <form onSubmit={this.searchCar}>
                    <input
                        type="text"
                        placeholder='Search Here...'
                        onChange={this.handleChange}
                        value={this.state.keyword} />
                </form>
            </div>
        );
    }
}

export default Search;