import React from "react";


class Cart extends React.Component{
    render(){ if(!this.props.cart){
        return ("Cart is empty");
    }
        
        return this.props.cart.map((item, index) => {
            return (
                <div>
                    <div class="card mb-3 rounded-lg shadow offset-md-2 " style={{ width: "20rem" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={item.image} class="card-img-top" alt={item.itemName} ></img>
                            </div>
                            <div class="col-md-8 text-center">
                                <div class="card-body">
                                    <h6 className="card-title" > {item.itemName} </h6>
                                    <p>{item.description}</p>
                                    <p className="card-text">Rs.{item.price} </p>
                                    <button className="btn btn-dark text-white mt-2" onClick={()=>this.props.removeFromCart(index)} style={{ width: "10rem" }} >Remove from cart</button>
                                </div>
                            </div>
                        </div> 
                    </div>            
                </div>
            );
          });
        }
    }

export default Cart;