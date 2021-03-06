import './App.css';
import {useState} from 'react';

function App() {

  const [name, setName] = useState("")
  const [pepperoni, setPepperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  return (

    <div className="App">

      <div class="container">
        <div class="row">
          <h1>Pizza Order</h1>
        </div>
        <div class="row">
          <div class="col-6 order-menu">
            <form>
              
              <input 
              placeholder="name"
              onChange={ e => setName(e.target.value)}
              >
              </input>

              <label>
                <input 
                type="checkbox"
                checked={pepperoni}
                onChange={() => setPepperoni(!pepperoni)}
                />
              Pepperoni
              </label>

              <label>
                <input 
                type="checkbox"
                checked={sausage}
                onChange={() => setSausage(!sausage)}
                />
              Sausage
              </label>

              <label>
                <input 
                type="checkbox"
                checked={peppers}
                onChange={() => setPeppers(!peppers)}
                />
              Peppers
              </label>


              <label>
                <input 
                type="checkbox"
                checked={onions}
                onChange={() => setOnions(!onions)}
                />
              Onions
              </label>

              <button
              className="submit-btn">
                Submit
              </button>

            </form>
            </div>
            <div class="col-6">
              <div className="orderSummary">
                <h3>Your Order</h3>
                <p>{name}</p>

              {pepperoni && <div>Pepperoni</div>}
              {sausage && <div>Sausage</div>}
              {peppers && <div>Peppers</div>}
              {onions && <div>Onions</div>}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
