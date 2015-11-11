import React from 'react'
import {Product} from './product.jsx'

export class ProductList extends React.Component {

componentWillMount() {
  this.setState({products: []})
  this.products = []
  this.firebaseRef = new Firebase("https://ceres-price-list.firebaseio.com/Ceres");
  this.firebaseRef.on("value", function(snapshot) {
    const products = []
    for( var key in snapshot.val()) {
      var product = snapshot.val()[key]
      product.key = key
      products.push(product)
    }
    this.setState({
      products: products
    });
  }.bind(this));
}

  render() {
    return <div> All products
        {this.state.products.map((product) => {
            return <Product data={product} />
          })
        }

     </div>

  }
}
