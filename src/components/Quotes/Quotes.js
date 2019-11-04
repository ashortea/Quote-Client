import React, {useState, useEffect} from 'react';
import Navbar from '../Nav/Navbar';
import APIURL from '../../helpers/enviroment';
import Quotetable from './Quotetable';
import CreateQotes from './CreateQotes';
import QuoteEdit from './QuoteEdit';
import './Quotes.css';
import {Container, Row, Col} from 'reactstrap';

const Quotes = (props)=>{
    const [quotes, setQuotes]= useState([]);
    const [updateQuote, setUpdateQuote]= useState(false);
    const [quoteToUpdate, setQuoteToUpdate]= useState({});
    const [create, setcreate]= useState(false)
    console.log(props.token)

    const editUpdateQuote=(quoteInfo)=>{
        setQuoteToUpdate(quoteInfo);
        // console.log(quoteInfo)
    }
    const updateOn=()=>{
        setUpdateQuote(true);
    }
    const updateOff=()=>{
        setUpdateQuote(false);
    } 
    

    const quoteRow= ()=>{
    const quoteColums ={
        quote: 'Quote',
        author: "Author"
        
    }
    
    return [<Quotetable key={'column names'} editUpdateQuote={editUpdateQuote} updateOn={updateOn} testData={quoteColums} setSession={props.setSession} quotes={quotes}/>].concat(
        quotes.map((quoteInfo, index) => {
            // console.log(quoteInfo)
           
            return <Quotetable key={index} testData={quoteInfo} setSession={props.setSession}  fetchQuotes={fetchQuotes} editUpdateQuote={editUpdateQuote} updateOn={updateOn} quotes={quotes}/>
        }))
    }

    const edit =()=>{
        const quoteColums ={
        id:0 ,
        quote: 'Quote',
        author: "Author",
        owner: 0
        
    }

        return [<QuoteEdit key={'edit'} quoteToUpdate={quoteToUpdate} testData={quoteColums} updateOff={updateOff} setSession={props.setSession} fetchQuotes={fetchQuotes}/>].concat(
            quotes.map((quoteInfo, index) => {
                // console.log(quoteInfo)
            return <QuoteEdit  key = {index} testData= {quoteInfo} quoteToUpdate={quoteToUpdate} updateOff={updateOff} setSession={props.setSession} fetchQuotes={fetchQuotes}/>
            }
        ))

    }

    const showEdit=() =>{
      return updateQuote ? edit() : null 
    }
    const fetchQuotes =()=>{

        fetch(`${APIURL}/quotes/`,{
            method: 'GET',
            headers: new Headers( {
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
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
            <Container>
            <Navbar token ={props.token} setSession={props.setSession} fetchQuotes={fetchQuotes}/>
               
            <CreateQotes fetchQuotes={fetchQuotes} token={props.token} />
                   
            {quoteRow()}
            
            </Container>
            {showEdit()}
        </div>  
    )
}
export default Quotes;