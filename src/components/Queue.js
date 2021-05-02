import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Queue = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>Queue</h1>
            <p className="lead">
                A Queue is a linear data structure where the data items are collected in a real Queue! Let's say like a movie ticket counter.
                It has two open ends. One is to insert data and the other is to remove data. <br/>
                It follows <mark>FIFO (First In First Out)</mark> i.e., whatever item is inserted first will be removed first. <br/>
                Or <mark>LILO (Last In Last Out)</mark> i.e., the item which is inserted last will be removed last.
            </p>
            
            <p>Let's look at the operations the Queue can handle</p>

            <h3>EnQueue</h3>
            <p>Here we are inserting the data at the Tail of the Queue.</p>

            <h3>DeQueue</h3>
            <p>In DeQueue, the item at the head of the Queue will be removed.</p>
        </Container>
    )
}

export default Queue