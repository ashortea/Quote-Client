import React, {useState} from 'react';
import APIURL from '../../helpers/enviroment'
import { Button, Form, Label, Input, FormGroup, Container, Col } from 'reactstrap';
import './Auth.css';
import styled from 'styled-components'

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
    .then(json => props.setSession(json.sessionToken))
    .catch(err => console.log(err))
}


  return(
      <Container>
          <Row>
          <h2 className= "welcome"> Welcome to Cat-Box Quotes </h2>
          </Row>
          <Row>
    <Form onSubmit= {handleSumbit} className="form" >
        <h1>{title()}</h1>
        {signupFields()}
        <Col>
        <FormGroup>
        <Label htmlFor='username'>Username:</Label>
        <Input className="input" type='text' id = 'username' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
        <Label htmlFor='password'>Password:</Label>
        <Input className="input" type='password' id='password' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
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