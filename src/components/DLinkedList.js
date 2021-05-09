import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import insert_1 from '../gifs/DL/Doubly_List_Insertion_1.gif'
import insert_2 from '../gifs/DL/Doubly_List_Insertion_2.gif'
import insert_3 from '../gifs/DL/Doubly_List_Insertion_3.gif'
import delete_1 from '../gifs/DL/Doubly_List_Deletion_1.gif'
import delete_2 from '../gifs/DL/Doubly_List_Deletion_2.gif'
import delete_3 from '../gifs/DL/Doubly_List_Deletion_3.gif'

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
                    <img className="gif" alt="Doubly_List_Insertion_1" src={insert_1} />
                </details>
                
                <details>
                    <summary>At the n<sup>th</sup> position of the list</summary>
                    <ul>
                        <li>Create a Doubly Linked List new node holding the data, the <mark>prev</mark> and the <mark>next</mark> fields having the <mark>NULL</mark> value.</li>
                        <li>Traverse the list from <mark>Head</mark> to the <mark>(n-1)<sup>th</sup></mark> node. i.e., (n-1)<sup>th</sup> node is the node after which we want to insert our new node.</li>
                        <li>Now, take the (n-1)<sup>th</sup> node's <kbd>next field</kbd> value and assign it to the new node's <kbd>next field</kbd>.</li>
                        <li>Then assign the new node's original address to the (n-1)<sup>th</sup> node's <kbd>next field</kbd>.</li>
                        <li>Assign the (n-1)<sup>th</sup> node's address to the new node's <kbd>prev field</kbd>.</li> 
                    </ul>
                    <img className="gif" alt="Doubly_List_Insertion_2" src={insert_2} />                    
                </details>
                
                <details>
                    <summary>At the end of the list</summary>
                    <ul>
                        <li>Create a doubly linked list new node holding the data, the <mark>prev</mark> and the <mark>next</mark> field fields having <mark>NULL</mark> value.</li>
                        <li>Traverse from <mark>Head</mark> to the <mark>last </mark>node of the list.</li>
                        <li>Assign the new node's address to the last node's <kbd>next field</kbd>.</li>
                        <li>At last, assign the last node's address to the new node's <kbd>prev field</kbd>.</li>
                    </ul>
                    <img className="gif" alt="Doubly_List_Insertion_3" src={insert_3} />
                </details>
            </div>
            
            <div>
                <h3>Deletion</h3>
                <details>
                    <summary>Deleting the Head of the list</summary>
                    <ul>
                        <li>Make the second Node of the list as the <mark>Head</mark> node.</li>
                        <li>And assign <mark>NULL</mark> to the <kbd>prev field</kbd> of the Head node.</li>
                    </ul>
                    <img className="gif" alt="Doubly_List_Deletion_1" src={delete_1} />
                </details>
                
                <details>
                    <summary>Deleting the n<sup>th</sup> position of the list</summary>
                    <ul>
                        <li>Traverse the list from the <mark>Head</mark> node to the <mark>(n-1)<sup>th</sup></mark> node. Here (n-1)<sup>th</sup> node is the node that is before the gonna delete node.</li>
                        <li>Assign the <mark>address</mark> of the <mark>(n+1)<sup>th</sup></mark> node (node which is after the gonna delete node) to the (n-1)<sup>th</sup> node's <kbd>next field</kbd>.</li>
                        <li>And assign the address of the (n-1)<sup>th</sup> node to the (n+1)<sup>th</sup> node's <kbd>prev field</kbd>.</li>
                    </ul>
                    <img className="gif" alt="Doubly_List_Deletion_2" src={delete_2} />
                </details>
                
                <details>
                    <summary>Deleting the last Node of the list</summary>
                    <ul>
                        <li>Traverse the list from <mark>Head</mark> node to the <mark>(n-1)<sup>th</sup></mark> node. i.e., n is the last node here.</li>
                        <li>Then assign the (n-1)<sup>th</sup> node's <kbd>next field</kbd> to NULL.</li>
                    </ul>
                    <img className="gif" alt="Doubly_List_Deletion_3" src={delete_3} />
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