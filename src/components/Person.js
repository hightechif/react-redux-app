import React, { Component } from 'react'
import { connect } from 'react-redux';

class Person extends Component {
    componentDidMount(){
        console.log('Data dari Redux Store');
        console.log('Data', this.props.data);
    }

    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = (state) => { // state di sini adalah global state
    console.log(state);
    return {
        data: state.personReducer
    }
}

export default connect(mapStateToProps)(Person) // Ini yang menyebabkan store terbaca dari redux