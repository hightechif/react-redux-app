import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import {connect} from 'react-redux'
import Person from './Person'
import PersonAPI from '../assets/person'

class PersonContainer extends Component {
    createCard = (personProps) => (
        <Col xs={4}>
            <Person { ...personProps }/>
        </Col>
    )
    
    createRow = (rows) => (
        <Row key={`${Math.random()}-${Date.now()}`}>
            {rows.map(el => this.createCard(Object.assign(el, {key: el.id})))}
        </Row>
    )

    componentDidMount(){
        
        
        // Memasukan data dari API ke Redux
        PersonAPI.all().then(persons => {
            return this.props.dispatch({
                type: 'person/INIT',
                payload: persons
            })
        })

        // console.log('Data dari Redux Store');
        // console.log('Data', this.props.data);
    }
    
    render() {
        const {data}  = this.props
        const contents = []
        for (let i=0; i<data.length; i+=3) {
            contents.push(data.slice(i,i+3))
        }
        return (
            <Container fluid className="p-4">
                {contents.map(el => this.createRow(el))}
            </Container>
        )
    }
}

const mapStateToProps = (state) => { // state di sini adalah global state
    console.log(state);
    return {
        data: state.personReducer
    }
}

export default connect(mapStateToProps)(PersonContainer) // Ini yang menyebabkan store terbaca dari redux