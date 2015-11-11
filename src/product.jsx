import React from 'react'

export class Product extends React.Component {
  render() {
    const product = this.props.data
    return(<p>
      <b>{product.brand} {product.description} ({product.unitSize})</b>
       - {product.caseTradePrice} for {product.quantity} ({product.unitTradePrice} per unit)
       </p>)

  }
}


