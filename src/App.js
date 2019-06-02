import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Posts from './Component/Posts';
import Comments from './Component/Comments';
import About from './Component/About';
import { BrowserRouter as Router, Route} from 'react-router-dom';


class App extends React.Component{
  render(){
    return(
      <Router>
      <div className="App">
      <Navbar />
      <Route path='/posts' component={ Posts } />
      <Route path='/comments' component={ Comments } />
      <Route path='/about' component={ About } />
      </div>
      </Router>
    )
  }
}

export default App;




