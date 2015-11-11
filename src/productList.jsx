import React from 'react'
import {Product} from './product.jsx'

export default ProductList = React.createClass({

  getInitialState: function () {
    return { products: [] }
  },


  componentWillMount: function(){
    this.firebaseRef = new Firebase("https://ceres-price-list.firebaseio.com/Ceres")
    this.firebaseRef.on("value", function(snapshot){
      let products = []

      for( var key in snapshot.val()) {
        var product = snapshot.val()[key]
        // product.key = key
        products.push(product)
      }
      this.setState({ products: products })
    })
  },

  render: function() {
    return (
      <div>
        <p> All products </p>
        {
          this.state.products.map(product => {
            return <Product data={product} />
          })
        }
      </div>
    )
  }
})



// export class ProductList extends React.Component {

// componentWillMount() {
//   this.setState({products: []})
//   this.products = []
//   this.firebaseRef = new Firebase("https://ceres-price-list.firebaseio.com/Ceres")
//   this.firebaseRef.on("value", function(snapshot) {
//     const products = []
//       console.log("snapshot", snapshot.val())
//     for( var key in snapshot.val()) {
//       var product = snapshot.val()[key]
//       // product.key = key
//       products.push(product)
//     }
//     this.setState({
//       products: products
//     })
//   }.bind(this))
// }

// render() {
//   return <div> All products
//     {this.state.products.map((product) => {
//       return <Product data={product} />
//       })
//     }
//   </div>
//   }
// }
