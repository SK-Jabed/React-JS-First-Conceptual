import { useEffect, useState } from 'react';
import './App.css'
import Products from './components/Products/products';
import Services from './components/Services/Services';
// import Product from './components/Product/Product'
// import Products from './components/Products/products'

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    // console.log("Hello Guys");
  }, [state])

  let storageVar = 0;
  
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

  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    // console.log(!status);
    setStatus(!status)
    console.log(status);
  }
   
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

      <button onClick={handleStatus}>Status</button>

      {
        status ? <Products></Products> : <Services></Services>
      }
      
      {/* <Products info={information}></Products> */}
      {/* <Product></Product> */}
    </>
  )
}

export default App