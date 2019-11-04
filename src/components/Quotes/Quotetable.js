import React from 'react';
import { Table, Button } from 'reactstrap';
import './Quotes.css'
import APIURL from '../../helpers/enviroment';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

const Row = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
padding-bottom: 2em;
align-items: center;
justify-content: center;
text-align: center;
color: white;
`;

const Quotetable = (props) => {
    const classes = useStyles();
    // console.log(props.testData);
    

        const deleteQuote=()=>{
            fetch(`${APIURL}/quotes/${props.testData.id}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.setSession
                })
            })
            .then(()=>{props.fetchQuotes()})
        }


    return(

        
    <Table className="container">
        <Row>
        
    <tr >
        <th>{props.testData.id}</th>
        <td>{props.testData.quote}</td>
        <td>{props.testData.author}</td>
        <td>{props.testData.owner}</td>
        <td>
            <Button color="" onClick={()=> {props.editUpdateQuote(props.testData); props.updateOn()}} >Update</Button>
            <Button color="" onClick={deleteQuote}>Delete</Button>
        </td>
  </tr>
    </Row>
</Table>

            
            
        
            
    )
}

export default Quotetable;