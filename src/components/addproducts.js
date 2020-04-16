import React, { Component } from 'react'
import  { withRouter } from 'react-router-dom'


class Addproducts extends Component {
    nameRef = React.createRef();
    descriptionRef = React.createRef();
    priceRef = React.createRef();
    imageRef = React.createRef();
    stockRef = React.createRef();
    state = {loading:false}
    user = JSON.parse(localStorage.getItem('user'));
    constructor(props){
        super(props);
    }

    createItem = async (e) => {
        e.preventDefault()
        const data = {
            name: this.nameRef.current.value,
  description: this.descriptionRef.current.value,
  price: this.priceRef.current.value,
  image: this.imageRef.current.value,
  stock: this.stockRef.current.value,
        }
        this.setState({...this.state,loading:true})
        try {
            const user = await fetch('http://localhost:3001/items',{method:'POST',headers: {
                "Content-Type": "application/json"
            },body:JSON.stringify(data)}).then(data=>data.json());
        this.setState({...this.state,loading:false})
        alert('Item Created Success')
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
        return (
            <div className="container">
               <div className="col-12 menubar">

<b>
    {this.user?.user?.email?(<span>{this.user.user?.email} <button onClick={this.logout} className="btn btn-link">Logout</button> <button onClick={()=>this.props.history.push('/bookings')} className="btn btn-link">Bookings</button></span>):''}
    {this.user?.user?.userType==1?( <button onClick={() => this.props.history.push('/addproducts')} className="btn btn-link">Add Item</button>):''}
    </b>

    </div>
                <h1>Create Item</h1>
                <form onSubmit={(e)=>this.createItem(e)}>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.nameRef}/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Description</label>
    <textarea className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.descriptionRef}/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Price</label>
    <input type="text" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.priceRef}/>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Image URL</label>
    <select classname="form-control" ref={this.imageRef}>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.coca-cola.com.au%2F&psig=AOvVaw2yb3d8GEXJYk_fZp9H3W4H&ust=1586976556758000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDKv8HK6OgCFQAAAAAdAAAAABAM">Image1</option>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tweewieler.nl%2Fwinkel%2Fnieuws%2F2018%2F05%2F34625-10134625&psig=AOvVaw3afxPr3KxeW-BI-aE4Ik0l&ust=1586976692028000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDNw4PL6OgCFQAAAAAdAAAAABAD">Image2</option>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mcdonalds.com%2Fus%2Fen-us%2Fproduct%2Fsmall-french-fries.html&psig=AOvVaw2NItEqUqcATzqzOzKo3TGr&ust=1586976751315000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCOuJ_L6OgCFQAAAAAdAAAAABAD">Image3</option>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.volkskrant.nl%2Feconomie%2Fnederlands-bedrijf-levert-vegetarische-whopper-aan-burger-king~b332ba30%2F&psig=AOvVaw0MJ2FAa25ntQwbP0uhP7tR&ust=1586976782161000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiooq3L6OgCFQAAAAAdAAAAABAD">Image4</option>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Fdessert&psig=AOvVaw2LlxgNgC5-rDjzc4-h9BPm&ust=1586976823005000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjjwsLL6OgCFQAAAAAdAAAAABAD">Image5</option>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.delish.com%2Fcooking%2Frecipe-ideas%2Frecipes%2Fa54696%2Feasy-indian-chicken-curry-recipe%2F&psig=AOvVaw0HHEwM-_knqj5N7fJut-Pn&ust=1586976905702000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCY8-jL6OgCFQAAAAAdAAAAABAD">Image6</option>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.businessinsider.nl%2Fchinese-american-food-isnt-from-china-2018-12%2F&psig=AOvVaw3jUWsEaDYmv2TaDwy5qOdR&ust=1586976940124000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDU2PrL6OgCFQAAAAAdAAAAABAD">Image7</option>
      <option value="https://media.gettyimages.com/photos/starbucks-coffee-cup-is-seen-inside-a-starbucks-coffee-shop-in-dc-picture-id947784930?s=612x612">Image8</option>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.landolakes.com%2Frecipe%2F21329%2Frainbow-cake%2F&psig=AOvVaw2SiEMtitNthT-0XBAy3jvc&ust=1586977079696000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOiv8bzM6OgCFQAAAAAdAAAAABAD">Image9</option>
      <option value="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lifewire.com%2Fgoogle-play-refund-1616844&psig=AOvVaw35v_OKJso_mZtVbvPJj1b9&ust=1586977141970000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDF9tjM6OgCFQAAAAAdAAAAABAD">Image10</option>
    </select>
  </div>

  <div className="form-group">
    <label for="exampleInputEmail1">Stock</label>
    <input type="number" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" ref={this.stockRef}/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Create</button>
</form>
            </div>
        );
    }
}


export default withRouter(Addproducts)