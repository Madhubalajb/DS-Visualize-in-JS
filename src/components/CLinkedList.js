import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import insert_1 from '../gifs/CL/Circly_List_Insertion_1.gif'

const CLinkedList = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>Circular Linked List</h1>
            <p className="lead">
                Circular Linked List is a linked list where the last node's next field points to the first Node circularly.
            </p>
            <p className="bd-callout">
                In Circular Linked List, we refer to the first node of the list as <mark>Head</mark> and the last node as <mark>Tail</mark>.
            </p>
            <p>Following are the basic operations that can be performed in Circular Linked List:</p>
            <div>
                <h3>Insertion</h3>
                <h5>At the beginning of the list</h5>
                <ul>
                    <li>Create a new node holding the data and the <kbd>next field</kbd> is <mark>NULL</mark>.</li>
                    <li>Now put the address of the Head node in the new node's <kbd>next field</kbd>. And make the new node as the <mark>Head</mark> node.</li>
                    <li>
                        Since it is Circular Linked List, the <mark>Tail</mark> node's <kbd>next field</kbd> should be pointing to the <mark>Head</mark> node. So, assign 
                        the <mark>Tail</mark> node's <kbd>next field</kbd> with the address of the <mark>Head</mark> node
                    </li>
                </ul>
                <img className="gif" src={insert_1} />

                <h5>At the nth position of the list</h5>
                <ul>
                    <li>Create a new node holding the data and the next field is <mark>NULL</mark>.</li>
                    <li>
                        Traverse the list from <mark>Head</mark> to the <mark>(n-1)th node</mark>, (n-1)th node is the node after which we want to
                        insert our new node.
                    </li>
                    <li>Now, assign the new node's next field with the (n-1)th node's next field value.</li>
                    <li>Then assign the (n-1)th node next field with the address of the new node.</li>
                </ul>

                <h5>At the end of the list</h5>
                <ul>
                    <li>Create a new node holding the data and the next field is <mark>NULL</mark>.</li>
                    <li>Assign the Tail node's next field with the address of the new node.</li>
                    <li>Now make the new node as the Tail node and assign the tail node's next field with the address of the Head node.</li>
                </ul>
            </div>

            <div>
                <h3>Deletion</h3>
                <h5>Deleting the Head node</h5>
                <ul>
                    <li>
                        Make the second node of the list as the Head node. Then assign the Tail node's next field with the address of the 
                        Head node.
                    </li>
                </ul>

                <h5>Deleting the node at the nth position of the list</h5>
                <ul>
                    <li>
                        Traverse the list from <mark>Head</mark> to the <mark>(n-1)th node</mark>, (n-1)th node is the node after which is
                        before the gonna delete node.
                    </li>
                    <li>Now assign the (n-1)th node's next field with the nth node's next field value.</li>
                </ul>

                <h5>Deleting the Tail node</h5>
                <ul>
                    <li>
                        Traverse the list from Head to the node before the Tail node. And assign the (n-1)th node's next field with the
                        address of the Head node.
                    </li>
                </ul>
            </div>

            <div>
                <h3>Traversal</h3>
                <ul>
                    <li>We can traverse the list from Head to whatever position you want using the loop functionality (while, for, do-while...)</li>
                    <li>In each Iteration just point to the next node using the current node's address field value.</li>
                    <li>Continue with Iteration, until the next node's address field value equal to NULL.</li>
                </ul>
            </div>
        </Container>
    )
}

export default CLinkedList