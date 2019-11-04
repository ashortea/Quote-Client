import React, {useState} from 'react';
import { Button} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { pink } from '@material-ui/core/colors';
import PublishIcon from '@material-ui/icons/Publish';


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
  icon:{
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    height: 200,
    '&:hover': {
      color: pink[800],
  }
}
 
}));

const CreateQotes=(props)=>{
  const classes = useStyles();

    const [quote, setQuote]= useState('');
    const [author, setAuthor]= useState('');
    const [owner, setOwner]= useState(''); 

    const handleSumbit =(e)=>{
        e.preventDefault(); 
        // console.log(quote, author, owner)
        
        fetch("http://localhost:3000/quotes", {
            method: "POST",
            body: JSON.stringify({quote: quote, author: author}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.setSession
            })
            
        })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then((quoteData)=>{
            console.log(quoteData);
            setQuote('');
            setAuthor('');
            setOwner('');
            props.fetchQuotes();
            
        })
    }

 
    return(
      
       <form onSubmit={handleSumbit} className={classes.container} noValidate autoComplete="off">
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
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Owner"
          margin="normal"
          value={owner} onChange={(e)=> setOwner(e.target.value)}
        />
      </div>
     
          <PublishIcon  color="primary" margin="normal" clasName={classes.icon} type="submit"  id="standard-basic" style={{ fontSize: 30 }}/>
       </form>
      
    )
}
export default CreateQotes;