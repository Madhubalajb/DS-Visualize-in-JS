import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tree = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>Tree</h1>
        </Container>
    )
}

export default Tree