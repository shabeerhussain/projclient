import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Signup extends Component {
    usernameRef = React.createRef();
    passwordRef = React.createRef();
    state = {loading:false}
    constructor(props){
        super(props);
    }

    signUpUser = async () => {
        const data = {user:{email:this.usernameRef.current.value,password:this.passwordRef.current.value}}
        this.setState({...this.state,loading:true})
        try {
            const user = await fetch('http://localhost:3001/users/',{method:'POST',headers: {
                "Content-Type": "application/json"
            },body:JSON.stringify(data)}).then(data=>data.json());
        this.setState({...this.state,loading:false})
        console.log(user)
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.removeItem('cart')

        this.props.history.push('/main');   
        } catch (error) {
        this.setState({...this.state,loading:false})

            alert(error);
        }
     
    }

    render() {
        if(this.state.loading)
          return (<div>loading...</div>)
        return (
            <div className="container">
                <h1>Signup</h1>
                <form>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={this.usernameRef}/>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={this.passwordRef}/>
  </div>
 
  <button type="button" onClick={this.signUpUser} className="btn btn-primary">SignUp</button>
</form>
            </div>
        );
    }
}

export default withRouter(Signup);