import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    usernameRef = React.createRef();
    passwordRef = React.createRef();
    state = {loading:false}
    constructor(props){
        super(props);
    }

    loginUser = async () => {
        const data = {user:{email:this.usernameRef.current?.value,password:this.passwordRef.current?.value}}
        this.setState({...this.state,loading:true})
        try {
            const user = await fetch('http://localhost:3001/users/login',{method:'POST',headers: {
                "Content-Type": "application/json"
            },body:JSON.stringify(data)}).then(data=>data.json());
        this.setState({...this.state,loading:false})
        console.log(user)
        localStorage.setItem('user',JSON.stringify(user))
        this.props.history.push('/main');    
     
        } catch (error) {
        this.setState({...this.state,loading:false})

            alert('Invalid Username or Password');
        }
     
    }
    
    render() {
        return (
            <div className="container-fluid loginpage">
                <div className="row">
                    <div className="col-4 offset-md-4 align-self-center">
                        <div className="form25">
                <h1>Login</h1>
                <form>
  <div className="form-group">
    <label for="exampleInputEmail1">User Id</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={this.usernameRef}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={this.passwordRef}/>
  </div>
    <center>
  <button type="button" className="btn btn-primary" onClick={this.loginUser}>Login</button>
  </center>
</form>
</div>
</div>
</div>
            </div>
        );
    }
}

export default withRouter(Login);