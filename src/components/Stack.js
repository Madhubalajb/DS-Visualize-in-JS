import React from 'react'
import { Link } from 'react-router-dom'

const Stack = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Stack</h1>
            <p className="lead">
                A Stack is a like of pile of pancakes where we just keep adding the data one by one. It follows <mark>LIFO (Last In First Out)</mark> 
                i.e., the recently inserted item will be the first one to remove.
                or <mark>FILO (First In Last Out)</mark> i.e., the very first inserted item will be the last one to remove.
            </p>

            <p className="bd-callout">
                We can use either <mark>Array</mark> or <mark>Linked List</mark> to achieve Stack.
            </p>
            <p>The two main operations performed in the Stack are</p>

            <h3>Push</h3>
            <p>In the Push operation, the data will be added as top of the Stack.</p>

            <h3>Pop</h3>
            <p>In the Pop operation, the data at the top of the Stack will be removed.</p>
        </div>
    )
}

export default Stack