import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import insert_1 from '../gifs/CL/Circly_List_Insertion_1.gif'
import insert_2 from '../gifs/CL/Circly_List_Insertion_2.gif'
import insert_3 from '../gifs/CL/Circly_List_Insertion_3.gif'
import delete_1 from '../gifs/CL/Circly_List_Deletion_1.gif'
import delete_2 from '../gifs/CL/Circly_List_Deletion_2.gif'
import delete_3 from '../gifs/CL/Circly_List_Deletion_3.gif'

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
                <details>
                    <summary>At the beginning of the list</summary>
                    <ul>
                        <li>Create a new node holding the data and the <kbd>next field</kbd> is <mark>NULL</mark>.</li>
                        <li>Now put the address of the Head node in the new node's <kbd>next field</kbd>. And make the new node as the <mark>Head</mark> node.</li>
                        <li>
                            Since it is Circular Linked List, the <mark>Tail</mark> node's <kbd>next field</kbd> should be pointing to the <mark>Head</mark> node. So, assign 
                            the <mark>Tail</mark> node's <kbd>next field</kbd> with the address of the <mark>Head</mark> node
                        </li>
                    </ul>
                    <img className="gif" alt="Circly_List_Insertion" src={insert_1} />
                </details>
                
                <details>
                    <summary>At the n<sup>th</sup> position of the list</summary>
                    <ul>
                        <li>First create a new node holding the data and the <kbd>next field</kbd> pointing to <mark>NULL</mark>.</li>
                        <li>Traverse the list from <mark>Head</mark> to the <mark>(n-1)<sup>th</sup></mark> node. i.e., (n-1)<sup>th</sup> node is the node after which we want to insert our new node.</li>
                        <li>Now, take the (n-1)<sup>th</sup> node's <kbd>next field</kbd> value and assign it to the new node's <kbd>next field</kbd>.</li>
                        <li>Then assign the <mark>new node's address</mark> to the (n-1)<sup>th</sup> node's <kbd>next field</kbd>.</li>
                    </ul>
                    <img className="gif" alt="Circly_List_Insertion_2" src={insert_2} />
                </details>
                
                <details>
                    <summary>At the end of the list</summary>
                    <ul>
                        <li>Create a new node holding the data and the <kbd>next field</kbd> value as <mark>NULL</mark>.</li>
                        <li>Assign the Tail node's <kbd>next field</kbd> with the <mark>address</mark> of the new node.</li>
                        <li>Make the new node as the <mark>Tail</mark> node</li>
                        <li>At last, again assign the Tail node's <kbd>next field</kbd> with the <mark>address</mark> of the Head node.</li>
                    </ul>
                    <img className="gif" alt="Circly_List_Insertion_3" src={insert_3} />
                </details>
            </div>

            <div>
                <h3>Deletion</h3>
                <details>
                    <summary>Deleting the Head node</summary>
                    <ul>
                        <li>Make the second node of the list as the <mark>Head</mark> node.</li>
                        <li>Then assign the Tail node's <kbd>next field</kbd> with the <mark>address</mark> of the <mark>Head</mark> node.</li>
                    </ul>
                    <img className="gif" alt="Circly_List_Deletion_1" src={delete_1} />
                </details>
                
                <details>
                    <summary>Deleting at the n<sup>th</sup> position of the list</summary>
                    <ul>
                        <li>Traverse the list from <mark>Head</mark> node to the <mark>(n-1)<sup>th</sup></mark> node. Here (n-1)<sup>th</sup> node is the node, which is before the gonna delete node (n<sup>th</sup> node).</li>
                        <li>Now take the address of the <marK>(n+1)<sup>th</sup></marK> node (the node which is after the gonna delete node (nth node)), and put it in the
                        (n-1)<sup>th</sup> node's <kbd>next field</kbd>.</li>
                    </ul>
                    <img className="gif" alt="Circly_List_Deletion_2" src={delete_2} />
                </details>
                
                <details>
                    <summary>Deleting the Tail node</summary>
                    <ul>
                        <li>Traverse the list from <mark>Head</mark> node to the node ((n-1)<sup>th</sup> node), which is before the <mark>Tail</mark> node (n<sup>th</sup> node).</li>
                        <li>And assign the (n-1)<sup>th</sup> node's <kbd>next field</kbd> with the <mark>address</mark> of the Head node.</li>
                    </ul>
                    <img className="gif" alt="Circly_List_Deletion_3" src={delete_3} />
                </details>
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