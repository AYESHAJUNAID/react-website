import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <div className='nav-div'>
       <div> <h1> Yummy </h1></div>
       <div>
        <ul className='name'>
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Chefs</li>
          <li>Gafery</li>
          <li>Dropdown</li>
          <li>Contact</li>
          
        </ul>
        </div>
        <div className='btn-div'>
        <button className='btn'>Book a Tables</button>
        </div>
</div>
<div className="content-div">
<div>
  <p className='para'> ENJOY YOUR HEALTHY DELICIOUS FOOD </p>
<p>We are team of talented designers making websites with Bootstrap</p>
<button className='btn-2'>Book a Tables</button>
</div>
<div>
  {/* <img src="../img/true-food-kitchen-35.png" alt="" /> */}
  <img src="https://www.freepnglogos.com/uploads/food-png/true-food-kitchen-35.png" alt="" />
</div>
</div>




<div className="card-container">
<div className="outer">
  <div className="inner"></div>
  <div className="item">
    <div className="item-name">
      <h4>Pizza</h4>
      <p>Fresh & sweet</p>
    </div>
    <div className="item-price">
      <p>&#36; 5</p>
      <div className="rating">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</div>


<div className="outer">
  <div className="inner"></div>
  <div className="item">
    <div className="item-name">
      <h4>Pizza</h4>
      <p>Fresh & sweet</p>
    </div>
    <div className="item-price">
      <p>&#36; 5</p>
      <div className="rating">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</div>



<div className="outer">
  <div className="inner"></div>
  <div className="item">
    <div className="item-name">
      <h4>Pizza</h4>
      <p>Fresh & sweet</p>
    </div>
    <div className="item-price">
      <p>&#36; 5</p>
      <div className="rating">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}


export default App
