import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Product from './Product';
import axios from 'axios'
class App extends Component {
  render() {

    // Make a request for a user with a given ID
    axios.get('http://localhost:4000/getData')
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    return (
      <div >
        <Header/>>
        <div className="container">
          <div className="row">
            <Product
              product_name ="but chi"
              product_price ="5999"
              image= "https://kenh14cdn.com/2019/4/6/tumblrparaoa8tju1vee85eo71280-15545029608871377167662.jpg"
            />
            <Product 
              product_name="but bi"
              product_price="5999"
              image="https://kenh14cdn.com/2019/4/6/tumblrparaoa8tju1vee85eo71280-15545029608871377167662.jpg"/>
            <Product />
            <Product
              product_name="but bi"
              product_price="5999"
              image="https://kenh14cdn.com/2019/4/6/tumblrparaoa8tju1vee85eo71280-15545029608871377167662.jpg" />
            <Product />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
