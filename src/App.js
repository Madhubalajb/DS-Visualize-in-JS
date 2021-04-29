import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import LinkedList from './components/LinkedList'
import DLinkedList from './components/DLinkedList'
import CLinkedList from './components/CLinkedList'
import Stack from './components/Stack'
import Queue from './components/Queue'
import Graph from './components/Graph'
import Tree from './components/Tree'
import HashTable from './components/HashTable'

function App() {
  return (
    <div className="App">
      <Router> 
        <Route exact path="/" component={Home} />
        <Route exact path="/Linked_List" component={LinkedList} />
        <Route exact path="/Doubly_Linked_List" component={DLinkedList} />
        <Route exact path="/Circular_Linked_List" component={CLinkedList} />
        <Route exact path="/Stack" component={Stack} />
        <Route exact path="/Queue" component={Queue} />
        <Route exact path="/Tree" component={Tree} />
        <Route exact path="/Graph" component={Graph} />
        <Route exact path="/Hash_Table" component={HashTable} />
      </Router>
    </div>
  );
}

export default App;
