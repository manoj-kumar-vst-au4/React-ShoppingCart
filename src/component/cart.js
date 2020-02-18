import React from "react";


class Cart extends React.Component{
    render(){
        
        return this.props.cart.map((item, index) => {
            return (
                <div>
                    <div className="card  my-5 mx-5" style={{ width: "10rem" }} key={item.id}>
                        <img src={item.image} class="card-img-top" alt={item.itemName} ></img>
                        <div className="card-body">
                            <h6 className="card-title" > {item.itemName} </h6>
                            <p>{item.description}</p>
                            <p className="card-text">Rs.{item.price} </p>
                        </div>
                        
                            <button className="btn btn-dark text-white" onClick={()=>this.props.removeFromCart(index)} >Remove from cart</button>
                        
                    </div>
                </div>
            );
          });
        }
    }

export default Cart;