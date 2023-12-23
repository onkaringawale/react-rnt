import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,  
} from "react-router-dom";
import Home from "./component/Home";
import Layout from "./component/layout/Layout";
import '../src/App.css'
class App extends Component {
    render() {
        return (
          <Router>
            <div className="row">

              <div className="col-md-3 navigationMenu">
                    <Layout/>
              </div>
              <div className="col-md-9">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                            ></Route>
                    </Routes>

              </div>
              
            </div>
          </Router>
        );
    }
}
 
export default App;