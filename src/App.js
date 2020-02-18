import React from 'react';
import Items from "./component/items";
import Cart from "./component/cart";

class App extends React.Component{
  state={
     items:[
        {"id":1, itemName:"Florence",description:"Woven  banarasi saree", price:2199, image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7499851/2018/9/29/458b862b-c3ed-4482-9b31-a20a2917d1fa1538209677719-Pisara-Peach-Silk-Cotton-Woven-Design-Kanjeevaram-Saree-7191538209677524-1.jpg" },
       {"id":2, itemName:"Mitera",description:"Solid Kanjeevaram saree", price:2199, image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7715819/2018/10/30/73757f81-139d-4c17-81d1-6a4deb0ccd691540883613501-Mitera-Navy-Blue-Silk-Blend-Solid-Kanjeevaram-Saree-9911540883613298-1.jpg"  },
       {"id":3, itemName:"Dressberry",description:"Solid round neck tshirt", price:699, image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11143496/2020/1/10/19d078ef-fbc3-4ae6-8a3d-40f525aacd281578652734348-Mast--Harbour-Women-Tshirts-4411578652732919-1.jpg"  },
        {"id":4, itemName:"Wisstler", price:1199,description:"Solid Long-Line Shrug", image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2204260/2019/8/20/ae799b52-a996-4c87-91ec-1b68fba9dec71566284949856-DressBerry-Navy-Blue-Solid-Open-Front-Longline-Shrug-4491566-1.jpg"  },
       {"id":5, itemName:"Berrylush", price:899,description:"Regular fit casual shirt", image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2060951/2018/1/12/11515749641345-DressBerry-Women-Black--White-Regular-Fit-Striped-Casual-Shirt-6241515749641248-1.jpg"  },
       {"id":6, itemName:"Pepe Jeans", price:1699,description:"Skinny fit jeans", image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2359211/2018/1/22/11516623813971-HERENOW-Women-Black-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-2661516623813918-1.jpg"  },
       {"id":7, itemName:"Dolce Crudo", price:1499, description:"Boyfriend fit jeans", image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1734034/2020/1/24/9a603337-0152-4b67-bb2f-43635b4853721579845994481-ether-Women-Blue-Boyfriend-Fit-Stretchable-Jeans-18715798459-1.jpg"  },
       {"id":8, itemName:"Zastraa", description:"Reguler fit parallel trouser", price:999, image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11144232/2020/2/4/9cf9081a-b510-4c90-8b33-197ceb6b9ba61580803274889-Mast--Harbour-Women-Teal-Blue--White-Regular-Fit-Striped-Par-5.jpg"  },
       {"id":9, itemName:"Melange by Lifestyle", description:"Ankle Lenght trouser", price:1299, image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/1/28/b1c78eb5-1f24-4447-bab2-6adc9d6438ad1580165022937-1.jpg"  },
       {"id":10, itemName:"Harpa", price:1799,description:"Printed A-line top", image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7723426/2018/11/12/2d8b9efc-3f60-4382-ab2a-7e14a046e7691542012165480-Nayo-Women-Tops-6451542012165163-1.jpg"  },
       {"id":11, itemName:"Scotch & Soda", price:1599, description:"High-Low top", image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1848719/2019/5/10/08ba64ff-1261-4e1e-a293-31a78a989aae1557462026034-Roadster-Women-Maroon-Solid-High-Low-Top-5021557462024390-1.jpg"  },
       {"id":12, itemName:"Dorothy Perkins", price:1390, description:"Pink Solid Shirt", image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8816777/2019/6/14/fddcc388-186b-4277-a33e-2d2e380701541560497607018-Roadster-Women-Pink-Solid-Shirt-2191560497605861-1.jpg"  },
       {"id":13, itemName:"Aurelia", description:"Block print straight kurta", price:1199, image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9329399/2019/4/24/8df4ed41-1e43-4a0d-97fe-eb47edbdbacd1556086871124-Libas-Women-Kurtas-6161556086869769-1.jpg"  },
       {"id":14, itemName:"Anouk", description:"Printed A-Line kurta", price:1099, image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9658675/2019/5/27/5866fc9e-ae67-4134-ae76-ab8731b443ac1558954938814-Indo-Era-Navy-Blue-Printed-Anarkali-Kurtas-2491558954937750-1.jpg"  },
       {"id":15, itemName:"Superdry",description:"Printed round neck tshirt", price:990, image:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8353077/2019/3/11/c03fe2cf-4ae4-48bc-afa8-46e24475c2c81552307929169-Roadster-Women-Black-Printed-Top-3541552307927845-1.jpg"  }
     ],
     cart:[]
  }

   addToCart = (key) =>{
     let filteredCart = [...this.state.cart, this.state.items[key]] 
     this.setState({
       cart : filteredCart
     })
   }

   removeFromCart =(key) =>{
     let filterItem = this.state.cart.filter((item, index)=>{
       return index !== key
     })
     this.setState({
       cart:filterItem
     })
   }

  render(){
    return(
      <div className="container-fluid-lg bg-light">
          <nav class="navbar navbar-light bg-dark d-flex justify-content-end">
            <button className="btn px-0 py-0" ><i className="fas fa-shopping-cart text-warning" style={{"font-size":"30px"}} ></i></button><p className="text-warning" style={{"font-size":"10px"}}></p>
          </nav> 
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-row flex-wrap">
              <Items 
                items={this.state.items}
                addToCart={this.addToCart}
                
              />
            </div>
            <div className="col-md-4 border border-dark">
              <Cart
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
              />
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default App;
