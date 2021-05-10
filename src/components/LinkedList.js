import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import insert_1 from '../gifs/LL/Linked_List_Insertion_1.gif'
import insert_2 from '../gifs/LL/Linked_List_Insertion_2.gif'
import insert_3 from '../gifs/LL/Linked_List_Insertion_3.gif'
import delete_1 from '../gifs/LL/Linked_List_Deletion_1.gif'
import delete_2 from '../gifs/LL/Linked_List_Deletion_2.gif'
import delete_3 from '../gifs/LL/Linked_List_Deletion_3.gif'

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
                <details>
                    <summary>At the beginning of the list</summary>
                    <ul>
                        <li>
                            To add a node at the beginning of the list, just create a new node holding the data and the <kbd>next field</kbd> as pointing the <mark>Head</mark> node of the list.
                        </li>
                        <li>Then reinitialize the new node as <mark>Head</mark> node.</li>
                    </ul>
                    <img className="gif" alt="Linked_List_Insertion" src={insert_1} />
                </details>
                
                <details>
                    <summary>At the n<sup>th</sup> position of the list</summary>
                    <ul>
                        <li>First create a new node holding the data and the <kbd>next field</kbd> pointing to <mark>NULL</mark>.</li>
                        <li>Traverse the list from <mark>Head</mark> to the <mark>(n-1)<sup>th</sup></mark> node. i.e., (n-1)<sup>th</sup> node is the node after which we want to insert our new node.</li>
                        <li>Now, take the (n-1)<sup>th</sup> node's <kbd>next field</kbd> value and assign it to the new node's <kbd>next field</kbd>.</li>
                        <li>Then assign the <mark>new node's address</mark> to the (n-1)<sup>th</sup> node's <kbd>next field</kbd>.</li>
                    </ul>
                    <img className="gif" alt="Linked_List_Insertion_2" src={insert_2} />
                </details>

                <details>
                    <summary>At the end of the list</summary>
                    <ul>
                        <li>As always, create a new node holding the data and <kbd>next field</kbd> pointing to <mark>NULL</mark>.</li>
                        <li>Traverse from <mark>Head</mark> to the <mark>last</mark> node of the List.</li>
                        <li>Then assign the new node's address to the last node's <kbd>next field</kbd>.</li> 
                    </ul>
                    <img className="gif" alt="Linked_List_Insertion_3" src={insert_3} />
                </details>
            </div>
            
            <div>
                <h3>Deletion</h3> 
                <details>
                    <summary>Deleting the Head node of the list</summary>
                    <ul>
                        <li>Just simply made the second node as <mark>Head</mark> node. This way we are deleting the data at the beginning of the list.</li>
                        <li>Once the first node becomes unreachable, <a href="https://javascript.info/garbage-collection" target="_blank" rel="noreferrer" >Javascript garbage collector</a> will delete that and free the memory.</li>
                    </ul>
                    <img className="gif" alt="Linked_List_Deletion_1" src={delete_1} />
                </details>
                
                <details>
                    <summary>Deleting the n<sup>th</sup> position of the list</summary>
                    <ul>
                        <li>Traverse the list from <mark>Head</mark> node to the <mark>(n-1)<sup>th</sup></mark> node. Here (n-1)<sup>th</sup> node is the node, which is before the gonna delete node (n<sup>th</sup> node).</li>
                        <li>Now take the address of the <marK>(n+1)<sup>th</sup></marK> node (the node which is after the gonna delete node (nth node)), and put it in the
                        (n-1)<sup>th</sup> node's <kbd>next field</kbd>.</li>
                    </ul>
                    <img className="gif" alt="Linked_List_Deletion_2" src={delete_2} />
                </details>
                
                <details>
                    <summary>Deleting the end of the list</summary>
                    <ul>
                        <li>Just like before, traverse from <mark>Head</mark> node to the <mark>(n-1)<sup>th</sup></mark>  node of the List.</li>
                        <li>Then assign the (n-1)<sup>th</sup> node's <kbd>next field</kbd> to <mark>NULL</mark>.</li>
                    </ul>
                    <img className="gif" alt="Linked_List_Deletion_3" src={delete_3} />
                </details>
            </div>
            
            <div>
                <h3>Traversal</h3>
                <ul>
                    <li>We can traverse the list from Head to whatever position you want using the loop functionality (while, for, do-while...)</li>
                    <li>In each Iteration just point to the next node using the current node's <kbd>next field</kbd> value.</li>
                    <li>Continue with Iteration, until the next node's address field value equal to NULL.</li>
                </ul>
            </div>
            <p>Checkout the code <a href="https://github.com/Madhubalajb/Data-Structures-JS/blob/master/DS/singlyLL.js" target="_blank" rel="noreferrer">here</a></p>
        </Container>
    )   
}

export default LinkedList