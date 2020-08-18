import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

      type1: "Vegetables",

      veg1: "Spinach",
      veg1Img:
       <img src='./images/spinach.jpeg' alt=""/>,
        
      spinachQuantity: 10,

      veg2: "Onion",
      veg2Img:
        <img src='./images/onions.jpeg' alt=""/>,
      onionQuantity: 30,

      veg3: "Carrots",
      veg3Img:
        <img src='./images/carrots' alt=""/>,
      carrotQuabtity: 50,

      veg4:"kales",
      veg4Img:
      <img src='./images/kales.jpeg' alt=""/>,
      kalesQuantity:50,

      type2: "Fruits",

      fruit1: " banana",
      fruit1Img:
        <img src='./images/banana.jpeg' alt =""/>,
      bananaQuantity: 200,

      fruit2: " Mango",
      fruit2Img:
    <img src='./images/mango.jpeg' alt=""/>,
      mangoQuantity: 50,
         
      appleImgQuantity: 30,
      appleImgPrice: 100,

      
};
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Quick snap store</h1>
        

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.appleImg} alt="" />
            </div>
            <div className="product-info">
              <img src='./images/banana.jpeg'width="200"  height="200" alt=""/>
              <h5> Banana's </h5>
              <p> Ksh {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <img src='./images/oranges.jpg'width="200" height="200" alt=""/>
              <h5> Oranges</h5>
              <p> ksh 80</p>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <img src='./images/pineapples.jpg'width="200" height="200" alt=""/>
              <p> Pineapples </p>
              <p> ksh 100 </p>
              
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.bunchImg} alt="" />
            </div>
            <div className="product-info">
              <img src='./images/apples.jpeg' width="200" height="200" alt=""/>
              <p> Apples</p>
              <p> Ksh {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.appleImgQuantity} </p>
              <button className="btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div> 
      
      
    

    <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg4Img} alt="" />
            </div>
            <div className="product-info">
              <img src='./images/tangerine.jpeg'width="200" height="200" alt=""/>
              <h5>Tangerine</h5>
              <p> ksh 50</p>
              <p> Quantity {this.state.kalesQuantity} </p>
              <button className="btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>
          
        
  
    <div className="product-card">
    <div className="product-image">
      <img className="photo" src={this.state.veg4Img} alt="" />
    </div>
    <div className="product-info">
      <img src='./images/peach.jpg'width="200" height="200" alt=""/>
      <h5>Peach</h5>
      <p> ksh 50</p>
      <p> Quantity {this.state.peachQuantity} </p>
      <button className="btn" onClick="saveItem()">
        Add To cart
      </button>
    </div>
      </div>
    

    <div className="product-card">
    <div className="product-image">
      <img className="photo" src={this.state.veg4Img} alt="" />
    </div>
    <div className="product-info">
      <img src='./images/kales.jpeg'width="200" height="200" alt=""/>
      <h5>Kales</h5>
      <p> ksh 50</p>
      <p> Quantity {this.state.peachQuantity} </p>
      <button className="btn" onClick="saveItem()">
        Add To cart
      </button>
    </div>
      </div>
    
  
    <div className="product-card">
    <div className="product-image">
      <img className="photo" src={this.state.veg4Img} alt="" />
    </div>
    <div className="product-info">
      <img src='./images/images.jpeg'width="200" height="200" alt=""/>
      <h5>Carrots</h5>
      <p> ksh 250</p>
      <p> Quantity {this.state.peachQuantity} </p>
      <button className="btn" onClick="saveItem()">
        Add To cart
      </button>
    </div>
      </div>
      
      
  
    <div className="product-card">
    <div className="product-image">
      <img className="photo" src={this.state.veg4Img} alt="" />
    </div>
    <div className="product-info">
      <img src='./images/cassava.webp'width="200" height="200" alt=""/>
      <h5>cassava</h5>
      <p> ksh 50</p>
      <p> Quantity {this.state.peachQuantity} </p>
      <button className="btn" onClick="saveItem()">
        Add To cart
      </button>
    </div>
      </div>
  
    
    
<div className="product-card">
    <div className="product-image">
      <img className="photo" src={this.state.veg4Img} alt="" />
    </div>
    <div className="product-info">
      <img src='./images/tomato.jpg'width="200" height="200" alt=""/>
      <h5>Tomatoes</h5>
      <p> ksh 350</p>
      <p> Quantity {this.state.peachQuantity} </p>
      <button className="btn" onClick="saveItem()">
        Add To cart
      </button>
    </div>
      </div>
    
      <div className="product-card">
      <div className="product-image">
        <img className="photo" src={this.state.veg4Img} alt="" />
      </div>
      <div className="product-info">
        <img src='./images/courgete.jpeg'width="200" height="200" alt=""/>
        <h5>courgette</h5>
        <p> ksh 50</p>
        <p> Quantity {this.state.courgeteQuantity} </p>
        <button className="btn" onClick="saveItem()">
          Add To cart
        </button>
      </div>
        </div>
        </section>
        </div>
          );
   }

}

export default App;
