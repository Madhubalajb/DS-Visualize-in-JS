import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Queue = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>Queue</h1>
            <p className="lead">
                A Queue is a <mark>linear data structure</mark> where the data items are collected in a real Queue! Let's say like a movie ticket counter.
                It has two open ends. One is to <mark>insert</mark> the data and the other is to <mark>remove</mark> the data.
            </p>

            <p className="bd-callout">
                It follows <mark>FIFO</mark> (First In First Out) i.e., whatever item that is inserted first will be removed first. <br/>
                Or <mark>LILO</mark> (Last In Last Out) i.e., the item which is inserted last will be removed last.
            </p>
            
            <p>Let's look at the operations the Queue can handle</p>

            <h3>EnQueue</h3>
            <p>Here we are <mark>inserting</mark> the data at the <mark>Tail</mark> of the Queue.</p>

            <h3>DeQueue</h3>
            <p>In DeQueue, the item at the <mark>Head</mark> of the Queue will be <mark>removed</mark>.</p>
            <p>Checkout the code <a href="https://github.com/Madhubalajb/Data-Structures-JS/blob/master/DS/queue.js" target="_blank" rel="noreferrer">here</a></p>
        </Container>
    )
}

export default Queue