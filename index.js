import {ProductList} from './src/productList.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

$( ()=> {
  ReactDOM.render(<ProductList />, document.getElementById("displayProductsDiv"))
})

