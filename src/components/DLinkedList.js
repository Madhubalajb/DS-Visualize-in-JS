import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import insert_1 from '../gifs/DL/Doubly_List_Insertion_1.gif'

const DLinkedList = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>Doubly Linked List</h1>
            <p className="lead">Doubly Linked List is the same as the Singly Linked List with an extra part called <mark>prev field</mark> holding the address of the previous Node.</p>
            <p>Following are the basic operations that can be performed in Doubly Linked List:</p>
            <div>
                <h3>Insertion</h3>
                <details>
                    <summary>At the beginning of the list</summary>
                    <ul>
                        <li>
                            Create a new Node holding the data, <kbd>prev field</kbd> having <mark>NULL</mark> value and the <kbd>next field</kbd> having the address of the <mark>Head</mark> node (First node).
                        </li>
                        <li>Assign the <mark>Head</mark> node's <kbd>prev field</kbd> with the address of the new node.</li>
                        <li>Then reinitialize the new node as <mark>Head</mark> node.</li>
                    </ul>
                    <img className="gif" alt="Doubly_List_Insertion" src={insert_1} />
                </details>
                
                <details>
                    <summary>At the n<sup>th</sup> position of the list</summary>
                    <ul>
                        <li>Create a Doubly Linked List new node holding the data, the prev and the next fields having the NULL value.</li>
                        <li>Traverse the list from Head to the (n-1)<sup>th</sup> Node the node after which we went to insert our new node.</li>
                        <li>Now, take the (n-1)<sup>th</sup> Node's address field value and assign it to the new node's address field(next).</li>
                        <li>Then assign the new node's original address to the (n-1)<sup>th</sup> Node's next field.</li>
                        <li>Assign the (n-1)<sup>th</sup> node's original address to the new node's prev field.</li> 
                    </ul>                    
                </details>
                
                <details>
                    <summary>At the end of the list</summary>
                    <ul>
                        <li>Create a doubly linked list new node holding the data, the prev and the next field fields having the NULL value.</li>
                        <li>Traverse from Head to the last Node of the list.</li>
                        <li>Assign the new node's original address to the last node's next field.</li>
                        <li>At last, assign the last Node's address to the new node's prev field.</li>
                    </ul>
                </details>
            </div>
            
            <div>
                <h3>Deletion</h3>
                <details>
                    <summary>Deleting the Head Node (1st Node)</summary>
                    <ul>
                        <li>Make the second Node of the list as the Head Node.</li>
                        <li>And assign NULL to the prev field of the Head Node.</li>
                    </ul>
                </details>
                
                <details>
                    <summary>Deleting the n<sup>th</sup> position</summary>
                    <ul>
                        <li>Traverse the list from the Head node to the (n-1)<sup>th</sup> Node. Here (n-1)<sup>th</sup> Node is the node that is before the gonna delete Node.</li>
                        <li>Assign the address of the (n+1)<sup>th</sup> Node(Node which is after the gonna delete node) to the (n-1)<sup>th</sup> Node next field.</li>
                        <li>And assign the address of the (n-1)<sup>th</sup> Node to the (n+1)<sup>th</sup> Node's prev field.</li>
                    </ul>
                </details>
                
                <details>
                    <summary>Deleting the last Node of the list</summary>
                    <ul>
                        <li>Traverse the list from Head Node to the (n-1)<sup>th</sup> Node. i.e., n is the last Node here.</li>
                        <li>Just assign the (n-1)<sup>th</sup> Node's next value to NULL.</li>
                    </ul>
                </details>
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