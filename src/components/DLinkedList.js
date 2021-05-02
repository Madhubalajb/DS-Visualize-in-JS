import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DLinkedList = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>Doubly Linked List</h1>
            <p>Doubly Linked List is the same as the Singly Linked List with an extra part holding the address of the previous Node.</p>
            <div>
                <h3>Insertion</h3>
                <h5>At the beginning of the list</h5>
                <ul>
                    <li>
                        Just create a new Node holding the data, prev field having the NULL value and the next field having the address value of the 
                        Head Node (1st Node).
                    </li>
                    <li>Then reinitialize the New Node as the Head Node.</li>
                </ul>

                <h5>At the nth position</h5>
                <ul>
                    <li>Create a doubly Linked List new node holding the data, the prev and the next fields having the NULL value.</li>
                    <li>Traverse the list from Head to the (n-1)th Node the node after which we went to insert our new node.</li>
                    <li>Now, take the (n-1)th Node's address field value and assign it to the new node's address field(next).</li>
                    <li>Then assign the new node's original address to the (n-1)th Node's next field.</li>
                    <li>Assign the (n-1)th node's original address to the new node's prev field.</li> 
                </ul>

                <h5>At the end of the list</h5>
                <ul>
                    <li>Create a doubly linked list new node holding the data, the prev and the next field fields having the NULL value.</li>
                    <li>Traverse from Head to the last Node of the list.</li>
                    <li>Assign the new node's original address to the last node's next field.</li>
                    <li>At last, assign the last Node's address to the new node's prev field.</li>
                </ul>
            </div>
            
            <div>
                <h3>Deletion</h3>
                <h5>Deleting the Head Node (1st Node)</h5>
                <ul>
                    <li>Make the second Node of the list as the Head Node.</li>
                    <li>And assign NULL to the prev field of the Head Node.</li>
                </ul>
                
                <h5>Deleting the nth position</h5>
                <ul>
                    <li>Traverse the list from the Head node to the (n-1)th Node. Here (n-1)th Node is the node that is before the gonna delete Node.</li>
                    <li>Assign the address of the (n+1)th Node(Node which is after the gonna delete node) to the (n-1)th Node next field.</li>
                    <li>And assign the address of the (n-1)th Node to the (n+1)th Node's prev field.</li>
                </ul>
            
                <h5>Deleting the last Node of the list</h5>
                <ul>
                    <li>Traverse the list from Head Node to the (n-1)th Node. i.e., n is the last Node here.</li>
                    <li>Just assign the (n-1)th Node's next value to NULL.</li>
                </ul>
            </div>
            
            <div>
                <h3>Traversal</h3>
            </div>
            <ul>
                <li>
                    Same as a Singly linked list, we can traverse the doubly linked list from the Head to whatever position we want via loop functionality
                    (while, do-while, for..).
                </li>
                <li>
                    In each Iteration, just point to the next Node using the current Node's next field until the next field's value is equal to NULL.
                </li>
                <li>You can also traverse the list in reverse order using the "prev" field.</li>
            </ul>
        </Container>
    )
}

export default DLinkedList