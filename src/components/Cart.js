import React, { Component } from 'react'


export default class Cart extends Component {
    IncrementCount(item,index){ // index will be the key value 
        const items = this.cartItems;           
        item.count += 1;
        this.setState({
            cartItems: items
        });
       }
    DecrementCount(item,index){ // index will be the key value 
        const items = this.cartItems;           
        item.count -= 1;
        this.setState({
            cartItems: items
        });
       }
       
  render() {

      const {cartItems} = this.props;
    return (
      <div>
        {/*cart header*/} 
        {cartItems===0? <div className='cart cart-header'>Cart is Empty</div>:
        <div className='cart cart-header'>You have {cartItems.length} in your cart. Proceed to checkout</div>}

        {/*cart body*/}
        <div className='cart'>
        <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div className="right">
                        {"Rs. "}{(item.price)*( item.count)}{" "}
                        <button onClick={() => this.DecrementCount(item,item._id)}>{' '}-{' '}</button>
                            {item.count}
                        <button onClick={() => this.IncrementCount(item,item._id)}>{' '}+{' '}</button>           
                        <button
                          className="cartbtn primary"
                          onClick={() => this.props.removefromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
        </div>
        {cartItems.length!==0 && (
                    <div className='cart'>
                    <div className='total'><b>
                        
                        Total: Rs.{" "}
                        {cartItems.reduce((a,c) => a+ c.price*c.count,0 )}</b>
                        <button className='button primary'>PROCEED</button>
                    </div>
                    
                </div>
        )}
      </div>
    )
  }
}
