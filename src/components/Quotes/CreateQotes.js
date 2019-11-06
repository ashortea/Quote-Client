import React, {useState} from 'react';
import APIURL from '../../helpers/enviroment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { pink } from '@material-ui/core/colors';
import AddBoxIcon from '@material-ui/icons/AddBox';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button:{
    margin: theme.spacing(2),
    color: 'pink',
    borderRadius: 25,
    border: 0,
    width: 60,
    height: 60,
    '&:hover': {
      color: pink[800],
  }
}
 
}));

const CreateQotes=(props)=>{
  const classes = useStyles();

    const [quote, setQuote]= useState('');
    const [author, setAuthor]= useState('');
   

    const handleSumbit =(e)=>{
        e.preventDefault(); 
        console.log(quote, author)
        
        fetch(`${APIURL}/quotes`, {
            method: "POST",
            body: JSON.stringify({quote: quote, author: author}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
            
        })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then((quoteData)=>{
            console.log(quoteData);
            setQuote('');
            setAuthor('');
            props.fetchQuotes();
            
        })
    }

 
    return(
      
       <form onSubmit={handleSumbit} className={classes.container}>
           <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Add a Quote"
          margin="normal"
          value={quote} onChange={(e)=> setQuote(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Who Said it"
          margin="normal"
          value={author} onChange={(e)=> setAuthor(e.target.value)}
        />
        
      </div>
      <div className={classes.root}> 
      <AddBoxIcon border={0}  className={classes.button} type="submit" onClick={handleSumbit}/>
    
      </div>
       </form>
      
    )
}
export default CreateQotes;