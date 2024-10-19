import { useEffect, useState } from 'react';
import './App.css'
// import Product from './components/Product/Product'
// import Products from './components/Products/products'

function App() {
  const [state, setState] = useState(0);

  // let storageVar = 0;
  
  const handleState = () => {
    const sum = state +1;
    // setState(state + 1)
    setState(sum);
  }
  const handleVariableCount = () => {   
    storageVar = storageVar + 1;

    // storageVar += 1;
  }

  // const information = {
  //   massage: "Hi, How are you?",
  //   phone: "01863646515"
  // }

  
  
  return (
    <>
      <div>
      <h3>This is State Count {state}</h3>
      <h3>This is Variable Count {storageVar}</h3>

      </div>

      <button onClick={handleState}>Change State Count</button>
      <br /> <br />
      <button onClick={handleVariableCount}>Change Variable Count</button>
      <h2>Hello React</h2>
      {/* <Products info={information}></Products> */}
      {/* <Product></Product> */}
    </>
  )
}

export default App