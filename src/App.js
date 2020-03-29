import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TodosList from './components/todos-list.components';
import EditTodo from './components/edit-todos.component';
import CreateTodo from './components/create-todos.component';


class App extends Component {
  render() {
    return(
      <Router>
        <div className="container">
          
          {/*na bar*/}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
       <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link">Todos</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/create" className="nav-link">Create Todo</Link>
                    </li>
                  </ul>
        </div>
  </nav>
        

         <Route path="/" exact component={TodosList} />
         <Route path="/edit/:id" component={EditTodo} />
         <Route path="/create" component={CreateTodo} />

         </div>
      </Router>



    );
  }
}

export default App;
