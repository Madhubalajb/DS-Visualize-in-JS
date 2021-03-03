import React from 'react'
import { Jumbotron, Row, Col, Card } from 'react-bootstrap'
import Clipboard from 'react-clipboard.js'
import LinkedList from './LinkedList'
import DLinkedList from './DLinkedList'
import CLinkedList from './CLinkedList'
import Stack from './Stack'
import Queue from './Queue'
import HashTable from './HashTable'

const Home = () => {
    return (
        <div>
            <h1>Visualize Data Structures in JavaScript</h1>
            <Jumbotron>
                <h4>Disclaimer</h4>
                <p>
                    If you enjoy learning by Visualizing the stuff, then Super Cool Welcome to "Visualize DS in JS"! I did a lot of research 
                    and used my experience to create this site and the content. I hope this will be useful to you guys. If you want to share 
                    your thoughts, doubts and even complaints, please feel free to email me. 
                    <span>
                        (madhujb01@gmail.com)
                        <Clipboard className="btn" data-clipboard-text="madhujb01@gmail.com" title="Click to copy the mail id">
                            <i className="far fa-clipboard"></i>
                        </Clipboard>
                    </span>
                </p>
                
            </Jumbotron>
            <h5>Here we go...</h5>
            <div className="cards">
                <Row>
                    <Col>
                        <Card className="ll">
                            Linked List
                        </Card>
                    </Col>
                    <Col>
                        <Card className="dll">
                            Doubly Linked List
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cll">
                            Circular Linked List
                        </Card>
                    </Col>
                    <Col>
                        <Card className="stack">
                            Stack
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="q">
                            Queue
                        </Card>
                    </Col>
                    <Col>
                        <Card className="tree">
                            Tree
                        </Card>
                    </Col>
                    <Col>
                        <Card className="graph">
                            Graph
                        </Card>
                    </Col>
                    <Col>
                        <Card className="hash">
                            Hash Table
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Home