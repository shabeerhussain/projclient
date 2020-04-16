import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Product from './product';
 class Main extends Component {
     
    state = { products: [], cart: {}, total:0,loading:false };
    user = JSON.parse(localStorage.getItem('user'));
    cartObject = JSON.parse(localStorage.getItem('cart'))
    totalObject = parseFloat(localStorage.getItem('total'))
	constructor(props) {
		super(props);
		
    }
    


	componentDidMount() {
		fetch('http://localhost:3001/items')
			.then((data) => data.json())
            .then((data) => {this.setState({ ...this.state, products: data });
            if(this.cartObject){
                console.log(('here'))
                
                this.setState({...this.state,cart:this.cartObject,total:this.totalObject})
                console.log(this.state)
            }
        });
           
    }
    
    componentDidUpdate(){
        localStorage.setItem('total',this.state.total)
    }

	addToCart = (item) => {
        console.log(this.state);
        const stateCopy = { ...this.state };
        let {cart,total} = stateCopy;
        cart[item._id] = cart[item._id] + 1 || 1;
        total = total+parseFloat(item['price']);
        this.setState({...stateCopy,cart,total});
        localStorage.setItem('cart',JSON.stringify(cart));
       
    }
    
    removeCartItem = (item,key) => {
        const stateCopy = { ...this.state };
        let {cart,total} = stateCopy;
        total = 0 || total - (parseFloat(item['price'])*cart[key]);
        delete cart[key];
        this.setState({...stateCopy,cart,total});
        localStorage.setItem('cart',JSON.stringify(cart));
      
    }

    createBooking = async () => {
       const items = Object.keys(this.state.cart);
       const total = this.state.total;
       const user_id = this.user.user._id;
       this.setState({...this.state,loading:true})
        try {
            const user = await fetch('http://localhost:3001/orders',{method:'POST',headers: {
                "Content-Type": "application/json"
            },body:JSON.stringify({items,total,user_id})}).then(data=>data.json());
        this.setState({...this.state,loading:false})
        console.log(user)
      
        localStorage.removeItem('cart');
        this.setState({...this.state,cart: {}, total:0,loading:false})
        alert('Booking Success')
        this.props.history.push('/main');    
     
        } catch (error) {
        this.setState({...this.state,loading:false})

            alert(error);
        }

        
    }

    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push('/login');
    }

	render() {

		const {
			products,
			cart,total
        } = this.state;

        
        if(this.state.loading)
            return (<div>loading...</div>)
		return (
			<div className="container">
                
                <div className="row">
                    <div className="col-12 menubar">

                <b>
                    {this.user?.user?.email?(<span>{this.user.user?.email} <button onClick={this.logout} className="btn btn-link">Logout</button> <button onClick={()=>this.props.history.push('/bookings')} className="btn btn-link">Bookings</button></span>):''}
                    {this.user?.user?.userType==1?( <button onClick={() => this.props.history.push('/addproducts')} className="btn btn-link">Add Item</button>):''}
                    </b>

                    </div>

				<div className="col-10 col-sm-12">
                    <div className="row">

					{products.map((product) => (
						<Product key={product._id} addToCart={this.addToCart} item={product}></Product>
					))}
                    </div>
				</div>
				<div className="col-2 col-sm-12">
                
                    <div className="card-body">
                        <h5 className="card-title">To Fix</h5>
                        <p className="card-text"> 	<ul>
						{
                            Object.keys(cart).map(item=>{
                                const product = products.find(p=>p._id == item);
                            return <li>{product.name} ... {cart[item]} <a href="#" onClick={()=>this.removeCartItem(product,item)}>x</a></li>
                            })
                        }
					</ul></p>
                    <hr></hr>
					<b>Total: {total} </b>
                    {   this.state.total>0?this.user?.user?.email?(<button className="btn btn-primary" onClick={this.createBooking}>Create Booking</button>):(<button className="btn btn-primary" onClick={()=>this.props.history.push('/login')}>Signin to Create Booking</button>):''
                    }
                    </div>
                </div>
                    <h3></h3>
				

					
                    

				</div>
                </div>
			
		);
	}
}


export default withRouter(Main)