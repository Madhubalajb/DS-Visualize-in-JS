import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (
        <div className="cards">
            <Row>
                <Col>
                    <Link to="/Linked_List">
                        <Card className="ll">
                            Linked List
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/Doubly_Linked_List">
                        <Card className="dll">
                            Doubly Linked List
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/Circular_Linked_List">
                        <Card className="cll">
                            Circular Linked List
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/Stack">
                        <Card className="stack">
                            Stack
                        </Card>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/Queue">
                        <Card className="q">
                            Queue
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/Tree">
                        <Card className="tree">
                            Tree
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/Graph">
                        <Card className="graph">
                            Graph
                        </Card>
                    </Link>
                </Col>
                <Col>
                    <Link to="/Hash_Table">
                        <Card className="hash">
                            Hash Table
                        </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default Cards