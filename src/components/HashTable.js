import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HashTable = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>Hash Table</h1>
            <p className="lead">
                Hash table ia an array of fixed size where data will be stored in key-value manner. The key will be mapped to an array index
                in the range of <mark>0</mark> to <mark>Tablesize - 1</mark>. The mapping is done by <mark>Hash-Function</mark>. And thus value
                will be stored in the respective mapped cell.
            </p>
            <p>Let's say we are gonna store the salary information, the key and values are</p>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bruce</td>
                        <td>40000</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Clark</td>
                        <td>50000</td>
                    </tr>
                </tbody>
            </Table>
            <p>The Hash Function will distribute the keys evenly among the cells.</p>
        </Container>
    )
}

export default HashTable