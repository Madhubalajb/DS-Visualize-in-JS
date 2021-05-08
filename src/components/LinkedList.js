import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import insert_1 from '../gifs/LL/Linked_List_Insertion_1.gif'

const LinkedList = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>Linked List</h1>
            <p className="lead">
                A linked list is nothing but a collection of nodes where each node has two parts. One is to hold the data and the other one is to hold 
                the address of the next node. i.e., a pointer pointing to the next node.
            </p>
            <div className="bd-callout">
                    <p>In Linked List, the first node is called as the <mark>Head</mark> node. <br/></p>
                    <p>The <kbd>next field</kbd> of the last node is always <mark>NULL</mark>. Since it is the last node and doesn't have any other nodes to point after.</p>
                </div>
            <p>Following are the basic operations that can be performed in Linked List:</p>
            
            <div>
                <h3>Insertion</h3>
                <h5>At the beginning of the list</h5> 
                <ul>
                    <li>
                        To add a node at the beginning of the list, just create a new node holding the data and the <kbd>next field</kbd> as pointing the <mark>Head</mark> node of the list.
                    </li>
                    <li>Then reinitialize the new node as <mark>Head</mark> node.</li>
                </ul>
                <img className="gif" alt="Linked_List_Insertion" src={insert_1} />
                
                <h5>At the nth position of the list</h5>
                <ul>
                    <li>First create a new node holding the data and the <kbd>next field</kbd> pointing to NULL.</li>
                    <li>Traverse the list from Head to the (n-1)th node. i.e., (n-1)th node is the node after which we want to insert our new node.</li>
                    <li>Now, take the (n-1)th node's next field value and assign it to the new node's next field.</li>
                    <li>Then assign the new node's original address to the (n-1)th node' next field.</li>
                </ul>
                
                <h5>At the end of the list</h5>
                <ul>
                    <li>As always create a new node holding the data and address field pointing to NULL.</li>
                    <li>Traverse from Head to the last node of the List.</li>
                    <li>Then assign the new node's original address to the last node's address field pointer.</li> 
                </ul>
            </div>
            
            <div>
                <h3>Deletion</h3> 
                <p>As same as addition, deletion can also happen in the following three cases.</p>
                <h5>Deleting the Head node of the list</h5>
                <ul>
                    <li>Just simply made the second node as Head node. This way we are deleting the data at the beginning of the list.</li>
                </ul>

                <h5>Deleting the nth position</h5>
                <ul>
                    <li>Traverse the list from Head to the (n-1)th node. i.e., here (n-1)th node is the node, which is before the gonna delete node (nth node).</li>
                    <li>Now take the address (original location) of the (n-1)th node, the node which is after the gonna delete node (nth node), and put it in the
                    (n-1)th node's address field Value.</li>
                </ul>
                
                <h5>Deleting the end of the list</h5>
                <ul>
                    <li>Just like before, traverse from Head node to the <mark>(n-1)th node</mark> of the List.</li>
                    <li>Now, just assign the (n-1)th node, the address field value is NULL.</li>
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

export default LinkedList