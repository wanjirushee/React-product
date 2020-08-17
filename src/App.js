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
        "https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      spinachQuantity: 10,

      veg2: "Onion",
      veg2Img:
        "https://images.pexels.com/photos/175415/pexels-photo-175415.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      onionQuantity: 30,

      veg3: "Carrots",
      veg3Img:
        "https://images.pexels.com/photos/3650647/pexels-photo-3650647.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      carrotQuabtity: 50,

      type2: "Fruits",

      fruit1: " banana",
      fruit1Img:
        "https://images.pexels.com/photos/365810/pexels-photo-365810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      bananaQuantity: 200,

      fruit2: " Mango",
      fruit2Img:
        "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      mangoQuantity: 50,

      appleImg:
        "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      appleImgQuantity: 30,
      appleImgPrice: 100,

      bunchImg:
        "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      bunch2Img:
        "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      bunch3Img:
        "https://images.pexels.com/photos/2820144/pexels-photo-2820144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>GREEN KIOSK</h1>
        <h> Shop Our Fruits and  {this.state.type1} </h>

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.appleImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Braeburn Apples</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Kale (Sukuma Wiki)</h5>
              <h6> kes 50 per Bunch</h6>
              <h7> We all need alittle</h7>nn
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Onion </h5>
              <h6> kes 50 per KG </h6>
              <h7> Who doesn't need onions? Shop this pantry staple here! </h7>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.bunchImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Apples</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.appleImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
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
