import React, {useState} from 'react';
import APIURL from '../../helpers/enviroment'
import { Button, Form, Label, Input, FormGroup, Container, Col } from 'reactstrap';
import './Auth.css';
import styled from 'styled-components'
import Paw from '../../assets/paw.png'

const Row = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
padding-bottom: 2em;
align-items: center;
justify-content: center;
text-align: center;
marginLeft 2em;
`;

const Auth = (props) => {

const [username, setUsername]= useState('');
const [password, setPassword]= useState ('');
const [login, setLogin] = useState(true);
const [errorPassword, setErrorPassword] = useState('Password must have atleast 5 characters')

const title = ()=>{
    return login ? 'Login' : 'Signup';
}

const logginToggle = (event) => {
    event.preventDefault();
    setLogin(!login);

    setUsername('');
    setPassword('');
    
}
const signupFields = () => !login ? 
(
    <div>
     <p>Signup to share and explore some of the best quotes ever!</p>
    </div>
) : null;

const handleSumbit = (e) => {
    e.preventDefault();
    setErrorPassword('');
    const url = login ? `${APIURL}/auth/signin` : `${APIURL}/auth/signup`
    const bodyObj = login ? {
        username: username,
        password: password 
    } : {
        username: username,
        password : password,
    }
   
    fetch(url, { 
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => props.updateToken(json.sessionToken))
    .catch(err => console.log(err))
}


  return(
      <Container>
        
          <Row>
    <Form onSubmit= {handleSumbit} className="form" >
            <img src={Paw} className="paw"/>
          <h2 className= "welcome"> Welcome to Cat-Box Quotes </h2>
        <h1 className="title">{title()}</h1>
        {signupFields()}
        <Col>
        <FormGroup>
        <Label htmlFor='username'>Email:</Label>
        <Input className="input" type='email' id = 'email' placeholder='Enter email' value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
        <Label htmlFor='password'>Password:</Label>
        <Input className="input" type='password' id='password' pattern="(?=.*[a-z].{6-12})" placeholder='at least 6 characters' value={password} onChange={(e)=> setPassword(e.target.value)} required/>
        {/* <div style={{fontSize: 12, color: "red"}}>{errorPassword}</div> */}
        </FormGroup>

        </Col>
        <Button className="button" onClick={logginToggle}>Login/Signup</Button>
        <Button className="button" type='submit'>Submit</Button>
    </Form>
    </Row>
    </Container>
  )
}


export default Auth;