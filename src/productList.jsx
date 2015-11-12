import React from 'react'
import {Product} from './product.jsx'
import snapshot from '../test-data'
import { groupBy, map } from 'lodash'

export const ProductList = React.createClass({

  getInitialState: function () {
    return { products: [] }
  },

  // componentWillMount: function(){
    // proper firebse method
  //   let self = this
  //   this.firebaseRef = new Firebase("https://ceres-price-list.firebaseio.com/Ceres")
  //   this.firebaseRef.on("value", function(snapshot){

  //     console.log('snapshot', JSON.stringify(snapshot.val()))
  //     let products = []

  //     for( var key in snapshot.val()) {
  //       var product = snapshot.val()[key]
  //       product.key = key
  //       products.push(product)
  //     }
  //     self.setState({ products: products })
  //   })
  // },

  componentWillMount: function(){ //cheat synchronous test data method
    let products = []
    for( var key in snapshot ) {
      var product = snapshot[key]
      product.key = key
      products.push(product)
    }
    this.setState({ products: products })
  },

  render: function() {

    var categorised = groupBy(this.state.products, function(product){
      return product.category
    })
    console.log("categorised",categorised)




    return (
      <div>
        <h2> All products </h2>

        {
          map(categorised, function(productsCat, category){
            return (
                <div>
                  <h3>{category}</h3>
                  {
                    map(productsCat, function(product, index){
                      return <Product key={product.key} product={product} />
                    })
                  }
                </div>
              )
          })


          // this.state.products.map(product => {
          //   return <Product key={product.key} data={product} />
          // })
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
