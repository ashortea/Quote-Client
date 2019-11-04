import React, {useState} from 'react';
import Auth from './components/Auth/Auth';
import Quotes from './components/Quotes/Quotes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ sessionToken, setSessionToken] = useState(undefined); 

  const viewConductor = () => {
    return sessionToken !== undefined ? <Quotes setSession ={setSessionToken} token={sessionToken} /> : <Auth setSession ={setSessionToken}/>
  }
  
  return (
    <div className="App">
      {viewConductor()}
    </div>
  );
}

export default App;
