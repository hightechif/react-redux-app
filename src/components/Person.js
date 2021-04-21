import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'

class Person extends Component {
    render() {
        const {name, address, phoneNumber, photo} = this.props
        return (
           <Card className="container-fluid p-4 text-center">
               <Card.Img variant="top" src={photo}/>
               <Card.Body>
                   <Card.Title>{name}</Card.Title>
                   <Card.Text>
                       <Row className="my-2">
                            <Col>{address},{phoneNumber}</Col>
                       </Row>
                   </Card.Text>
                   <Button variant="danger">remove</Button>
               </Card.Body>
           </Card>
        )
    }
}

export default Person