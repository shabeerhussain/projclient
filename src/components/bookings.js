import React, { Component } from 'react'
import  { withRouter } from 'react-router-dom'


class Bookings extends Component {
    state = { orders: [],user:localStorage.getItem('user')};
   
    user = JSON.parse(localStorage.getItem('user'));
    constructor(props){
        super(props);

    }

    componentDidMount() {
        const user = JSON.parse(this.state.user);
		fetch(`http://localhost:3001/orders/${user.user._id}/${user.user.userType}`)
			.then((data) => data.json())
            .then((data) => {this.setState({ ...this.state, orders: data });
           
        });
           
    }
    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push('/login');
    }
    render() {
        const {
			orders
        } = this.state;
        return (
            <div className="container">
                              <div className="col-12 menubar">

<b>
    {this.user?.user?.email?(<span>{this.user.user?.email} <button onClick={this.logout} className="btn btn-link">Logout</button> <button onClick={()=>this.props.history.push('/bookings')} className="btn btn-link">Bookings</button></span>):''}
    {this.user?.user?.userType==1?( <button onClick={() => this.props.history.push('/addproducts')} className="btn btn-link">Add Item</button>):''}
    </b>

    </div>
                <p><button className="btn btn-link" onClick={()=>this.props.history.push('/main')}>Back</button></p>
                <h1>Orders</h1>
                <table className="table table-bordered">
                    <tr>
                         <td>Booked by</td>
                        <td>Total Amount</td>
                        <td>Items</td>
                        <td>Status</td>
                    </tr>
                    {
                        orders.map(order=>{
                            return (<tr>
                                <td>{order.user_id.email}</td>
                                <td>{order.total}</td>
                            <td>{
                                    order.items.map(item=>{
                                        return (<p>{item.name} , {item.price}</p>)
                                    })
                                }</td>
                                <td>{order.status=='1'?'Processing':''}</td>
                                
                            </tr>)
                        })
                    }
                </table>
            </div>
        );
    }
}


export default withRouter(Bookings)