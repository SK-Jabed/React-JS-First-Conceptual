import './App.css'
// import Product from './components/Product/Product'
import Products from './components/Products/products'

function App() {

  const information = {
    massage: "Hi, How are you?",
    phone: "01863646515"
  }

  return (
    <>

      <h2>Hello React</h2>
      <Products info={information}></Products>
      {/* <Product></Product> */}
    </>
  )
}

export default App