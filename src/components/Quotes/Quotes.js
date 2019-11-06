import React, {useState, useEffect} from 'react';
import Navbar from '../Nav/Navbar';
import APIURL from '../../helpers/enviroment';
import Quotetable from './Quotetable';
import CreateQotes from './CreateQotes';
import QuoteEdit from './QuoteEdit';
import './Quotes.css';
import {Container, Jumbotron} from 'reactstrap';


const Quotes = (props)=>{
    const [quotes, setQuotes]= useState([]);
    const [updateQuote, setUpdateQuote]= useState(false);
    const [quoteToUpdate, setQuoteToUpdate]= useState({});
    

    const editUpdateQuote=(quoteInfo) =>{
        setQuoteToUpdate(quoteInfo);
        console.log(quoteInfo)
    }
    const updateOn=()=>{
        setUpdateQuote(true);
    }
    const updateOff=()=>{
        setUpdateQuote(false);
    } 
    

    const quoteRow= ()=>{
    const quoteColums ={
        quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
        author: "Maya Angelou"
        
    }
    
    return [<Quotetable key={'column names'}  editUpdateQuote={editUpdateQuote} token ={props.token} updateOn={updateOn} testData={quoteColums} setSession={props.setSession} quotes={quotes}/>].concat(
        quotes.map((quoteInfo, index) => {
            // console.log(quoteInfo)
           
            return <Quotetable key={index}  testData={quoteInfo} token ={props.token} setSession={props.setSession}  fetchQuotes={fetchQuotes} editUpdateQuote={editUpdateQuote} updateOn={updateOn} quotes={quotes}/>
        }))
    }

    const edit =()=>{

        return <QuoteEdit  quoteToUpdate={quoteToUpdate} token ={props.token} updateOff={updateOff} setSession={props.setSession} fetchQuotes={fetchQuotes}/>

    }

    const showEdit=() =>{
      return updateQuote ? edit() : null 
    }
    const fetchQuotes =()=>{

        fetch(`${APIURL}/quotes/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then (res => res.json())
        .then(json => setQuotes(json))
        .catch(err => console.log(err))

    };
      
    useEffect(() =>{
        fetchQuotes();
    },[])




    return (
        <div className="quotes">
            <Navbar className="nav" token ={props.token} setSession={props.setSession} fetchQuotes={fetchQuotes}/>
             <Jumbotron className="jumbo">
        <h1 className="display-3">Cat-Box Quotes</h1>
        <p className="lead">This is a simple way to share and store your quotes. Want to be notable, make a book, or make a inspirational poster. Your in the right place </p>
        <hr className="my-2" />
        <p>"Dream big, think big, be big."- Asia Shorter</p>
        
      </Jumbotron>
            <Container>
               
            <CreateQotes fetchQuotes={fetchQuotes} token={props.token} />
            <br/>
            <br/>
                   
            {quoteRow()}
            
            </Container>
            {showEdit()}
        </div>  
    )
}
export default Quotes;