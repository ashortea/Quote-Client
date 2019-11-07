import React, {useState, useEffect} from 'react';
import Auth from './components/Auth/Auth';
import Quotes from './components/Quotes/Quotes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [ sessionToken, setSessionToken] = useState(undefined); 

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const viewConductor = () => {
    return sessionToken === localStorage.getItem('token')  ? <Quotes setSession ={setSessionToken} token={sessionToken} clearToken={clearToken} /> : <Auth updateToken ={updateToken}/>
  }
  
  return (
    <div className="App">
    
      {viewConductor()}
    </div>
  );
}

export default App;
