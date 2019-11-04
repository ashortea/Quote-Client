import React, {useState} from "react";
import {Modal, Form, FormGroup, Label, Input, Button, ModalBody, ModalHeader} from 'reactstrap'

const QuoteEdit= (props)=> {
    const[editQuote, setEditQote]= useState(props.testData.quote);
    const[editAuthor, setEditAuthor]= useState(props.testData.author);
    const[editOwner, setEditOwner]= useState(props.testData.owner);

    console.log(props.testData.id)

    // console.log(props.testData) 

        const quoteUpdate = (event, quotes) =>{
            event.preventDefault();
            fetch(`http://localhost:3000/quotes/${props.testData.id}`,{
                method:"PUT",
                body: JSON.stringify({quote: editQuote, author: editAuthor}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.setSession
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
            {/* <FormGroup>
                <Label htmlFor="owner">Edit Owner</Label>
                <Input name="owner" value={editOwner} onChange={(e) => setEditOwner(e.target.value)}/>
            </FormGroup> */}
            <Button type="sumbit">Update</Button>
        </Form>
        </ModalBody>
        </Modal>
    )
}
export default QuoteEdit;
