import React, {useState} from "react";
import APIURL from '../../helpers/enviroment';
import {Modal, Form, FormGroup, Label, Input, ModalBody, ModalHeader} from 'reactstrap'
import './QuoteEdit.css'



const QuoteEdit= (props)=> {
    const[editQuote, setEditQote]= useState(props.quoteToUpdate.quote);
    const[editAuthor, setEditAuthor]= useState(props.quoteToUpdate.author);

    console.log(props.quoteToUpdate.quote)
    console.log(props.quoteToUpdate.id)

    // console.log(props.quoteToUpdate) 

        const quoteUpdate = (event, quoteToUpdate) =>{
            event.preventDefault();
            fetch(`${APIURL}/quotes/${props.quoteToUpdate.id}`,{
                method:"PUT",
                body: JSON.stringify({quote: editQuote, author: editAuthor}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
            .then((res)=>{
                props.fetchQuotes();
                props.updateOff();
            })
            .catch(err => console.log(err))
        }


    return(
        <Modal isOpen={true}>
               
            <ModalHeader>Update Your Quote</ModalHeader>
           
            <ModalBody>
        <Form onSubmit={quoteUpdate}>
            <FormGroup>
                <Label htmlFor="quote">Edit Quote</Label>
                <Input name="quote" value={editQuote} onChange={(e) => setEditQote(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="author">Edit Author</Label>
                <Input name="author" value={editAuthor} onChange={(e) => setEditAuthor(e.target.value)}/>
            </FormGroup> 
           
            <button className="button" type="sumbit">Update</button> 
        <button className="button" onClick={props.updateOff}> Close</button>
       
        </Form>  
        </ModalBody>
        </Modal>
    )
}
export default QuoteEdit;
