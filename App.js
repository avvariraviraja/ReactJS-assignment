import React from 'react';

import ReactDOM from 'react-dom';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {Home} from "./components/Home";
import {Department} from "./components/Department";
import {Employee} from "./components/Employee";
import {Navigation} from "./components/Navigation";
import './components/style.css';



function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h1 className="m-3 d-flex justify-content-center">Delivery Agent App</h1>

      <Navigation/>

      <switch>
      <Route path={"/"} component={Home} exact/>
         <Route path={"/Department"} component={Department}/>
         <Route path={"/Employee"} component={Employee}/>
      </switch>
  <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Yuvraj</a>
  <a href="#" class="list-group-item list-group-item-action">Virat</a>
  <a href="#" class="list-group-item list-group-item-action">Killer</a>
  <a href="#" class="list-group-item list-group-item-action">Tsoste</a>
  <a href="#" class="list-group-item list-group-item-action">michel</a>
  <a href="#" class="list-group-item list-group-item-action">Finch</a>
  <a href="#" class="list-group-item list-group-item-action">Rashid</a>
  <a href="#" class="list-group-item list-group-item-action">Shakib</a>
  </div>
  <div>
    <br/><button type="button" target="list-grop">Assign</button>
    &nbsp;&nbsp;<button type="button" target="list-grop">Revoke</button>
  </div>
    </div>
    </BrowserRouter>
  )
}

export default App;

