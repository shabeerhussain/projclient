import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    
    return (
      <div className="container-fluid mainpage">
        <div className="row">
          <div className="col-12 align-self-center margintopcenter">
            <center>
            <h1>log your errors here</h1>
            <button className="btn btn-primary" onClick={()=>this.props.history.push('/login')}>Start</button>
            </center>
          
          </div>
          
        </div>
      </div>
    );
    }
}

export default withRouter(App);
